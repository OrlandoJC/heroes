let app = document.getElementById('app')

async function loadHeroes() {
    const srcLocation  = 'data.json';
    const responseJSON = await fetch(srcLocation);
    const heroes = await responseJSON.json();

    return heroes;
}

async function renderHeroes() {
    const heroes = await loadHeroes()
    const cards  = heroes.map(hero => cardHero(hero)) 

    cards.forEach(card => {
        app.innerHTML += card;
    });
}

function cardHero(hero) {

    const template =  `
        <div id="card" class="hvr-grow" >
            <div class="image_container" style="background-image: url('${hero.img}');">
                <img class=image_logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png" alt="">
                <h1 class="title">${hero.hero}</h1>
                <h2 class="title">${hero.name}</h2>
            </div>
                <div class="description_container">
                
                ${Object.entries(hero.stats).map(([key, value]) => `<span>${key}</span> <span id="poder" class=bar style=" width: ${Math.trunc(value/7*100)}%"></span>`).join("")}

                <span>Poder</span>
                <span id="poder" class=bar></span>

                <span>Vida</span>
                <span id="vida" class=bar></span>

                <span>Debilidad</span>
                <span id="debilidad" class=bar></span>

                <span>Resistencia</span>
                <span id="resistencia" class=bar></span>
            </div>
        </div>    
    `

    return template; 
}


window.addEventListener('load', () => {
    renderHeroes();
})

