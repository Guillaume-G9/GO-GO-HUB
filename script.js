const searchBar = document.getElementById('searchBar');
const chTitle = document.querySelector('.container')


async function chaptTitle(){
    let rep = await fetch('https://strapi-gogokodo.herokuapp.com/api/sources', { method: 'GET' });
    let response = await rep.json();


    // console.log(response.data)
    // for (let i=0; i<response.data.length; i++) {
    //     chTitle.innerHTML += `
    //     <div class="text-box">
    //         <h4 class="title">${response.data[i].attributes.title}</h4>
    //         <button class="link"><a href="${response.data[i].attributes.url}">Visiter</button>
    //     </div>
    //     `;


    response.data.map(video => {
            chTitle.innerHTML += `
            <div class="text-box">
                <h4 class="title">${video.attributes.title}</h4>
                <button class="link"><a href="${video.attributes.url}">Visiter</button>
            </div>`
        })
    }

    /* console.log(response.data[2].attributes.title);
    chTitle.innerHTML = txt; */


chaptTitle()

