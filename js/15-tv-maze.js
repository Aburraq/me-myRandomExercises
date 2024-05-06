// ========== API ==========
const TV_MAZE_API = 'https://api.tvmaze.com';

// ================ Accessing DOM Elements ================
const searchInputElement = document.getElementById('search');
const outputElement = document.getElementById('output');

// ================ Global Variables ================
let debounceTimeoutId = null;

// ================ Event Listeners ================
searchInputElement.addEventListener('keyup', (event) => {
    const query = event.target.value;


    if (!query) {
        outputElement.innerHTML = '';
        return;
    }

    if (debounceTimeoutId) {
        clearTimeout(debounceTimeoutId);
    }

    // set a new timeout to fetch the data
    debounceTimeoutId = setTimeout(() => {
        getRequest(query);
    }, 1000);
});

// ================ Fetch Data from TV Maze API ================
async function getRequest(query) {
    try {
        const response = await axios({
            method: 'get',
            url: `${TV_MAZE_API}/search/shows?q=${query}`
        });

        if (response.status !== 200) {
            throw new Error('Failed to fetch data');
        }

        // if no problem, set the data to a variable
        const shows = response.data;

        console.log(shows);

        // populate the output with the data
        populateOutput(shows);
    } catch (error) {
        console.error(error);
        errorText(error.message);
    }
}

// ================ Functions ================

function errorText(text) {
    const errorElement = document.createElement('div');
    errorElement.setAttribute('class', 'alert alert-danger');
    errorElement.textContent = text;
    outputElement.after(errorElement);
}

function populateOutput(data) {
    outputElement.innerHTML = '';

    if (!Array.isArray(data)) {
        return errorText('No shows found');
    }

    data.forEach((item) => {

        const cardElement = document.createElement('div');
        cardElement.setAttribute('class', 'card');
        cardElement.style.width = '18rem';

        const imgElement = document.createElement('img');
        imgElement.setAttribute('class', 'card-img-top');
        imgElement.src =
            item.show?.image?.medium || './img/noimage.png';
        imgElement.alt = item.show?.name;
        imgElement.title = item.show?.name;

        const cardBodyElement = document.createElement('div');
        cardBodyElement.setAttribute('class', 'card-body');

        const titleElement = document.createElement('h5');
        titleElement.setAttribute('class', 'card-title');
        titleElement.textContent = item.show?.name;

        const summaryElement = document.createElement('p');
        summaryElement.setAttribute('class', 'card-text');
        summaryElement.innerHTML = item.show?.summary;

        cardBodyElement.appendChild(titleElement);
        cardBodyElement.appendChild(summaryElement);

        cardElement.appendChild(imgElement);
        cardElement.appendChild(cardBodyElement);

        outputElement.appendChild(cardElement);
    });
}