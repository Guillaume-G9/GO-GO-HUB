const searchBar = document.getElementById('searchBar');
const chTitle = document.querySelector('.container')
let arrayAPI = [];


async function chaptTitle(){
    let rep = await fetch('https://strapi-gogokodo.herokuapp.com/api/sources', { method: 'GET' });
    let response = await rep.json();
    arrayAPI = response.data 
    display(arrayAPI) 
}

chaptTitle();

function display(array) {
    chTitle.innerHTML = ""
    array.map(video => {
            chTitle.innerHTML += `
            <div class="text-box">
                <h4 class="title">${video.attributes.title}</h4>
                <button class="link"><a href="${video.attributes.url}">Visiter</button>
            </div>`
        })
}


searchBar.addEventListener('keyup', (event) => {
    let input = event.target.value.toLowerCase();
    const filter = arrayAPI.filter(liens => {
        return (liens.attributes.category.toLowerCase().includes(input) || liens.attributes.title.toLowerCase().includes(input)
        )
    })
    display(filter)
})
