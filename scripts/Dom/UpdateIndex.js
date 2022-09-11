import { showDetails } from "./DetailsDaily.js";

export const UpdateData=(dato)=>{
        const data = document.getElementById('data'),
        imgNoData = document.getElementById('imgNoData');
        imgNoData.style.display='none'
        data.innerHTML=`
        <h4 class='place'>${dato.timezone}</h4>
        <h5 class='h5' >Clima Actual</h5>
        <div class='currentCard'>
            <div class='currentCard_Card'>
                <div>
                    <img src='./assets/humedity.png' alt='Humedity'/>
                    <p> ${dato.current.humidity}% </p>
                </div>
                <p>Humedad</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/temperature.png' alt='temperature'/>
                <p> ${dato.current.temp}% </p>
                </div>
                <p>Temperatura</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/feeling.png' alt='sensación'/>
                <p> ${dato.current.feels_like}°c </p>
                </div>
                <p>Sensación</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/clouds.png' alt='clouds'/>
                <p> ${dato.current.clouds}% </p>
                </div>
                <p>Nubes</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/eyeglasses.png' alt='visibility'/>
                <p> ${dato.current.visibility} </p>
                </div>
                <p>Visibilidad</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/wind.png' alt='wind'/>
                <p> ${dato.current.wind_speed}% </p>
                </div>
                <p>Viento</p>
            </div> 
        </div>
        <h5 class='h5' >Por hora</h5>
        <div  class="Mcarousel" data-bs-touch="true">

                <button class="controlPrev" id="prev" type="button">
                    <i class="bi bi-arrow-left-circle"></i>
                </button>
                <button class="controlNext" id="next" type="button" >
                    <i class="bi bi-arrow-right-circle"></i>
                </button>
                <div class="carousel-content" id="item">
                    ${(dato.hourly.map(e=>
                        `<div class="item " >
                            
                            <img class="" src="http://openweathermap.org/img/w/${e.weather[0].icon}.png" alt="${e.weather[0].icon}">
                            <p class="text"> ${e.temp}°C </p>
                            <p class="text">${new Date(Number(e.dt)* 1000).getHours().toString()}:00</p>
                        </div>`)).join('')}
                </div>
                
            </div>
        <h5 class='h5' >Proximos días</h5>                
        <div class="CardsDaily ">
                    ${dato.daily.map(e=>`
                        <div class="CardsDaily_Card cardsItems" id=${e.dt} >
                            <div>
                                <img  src='http://openweathermap.org/img/w/${e.weather[0].icon}.png' alt="${e.weather[0].icon}">
                                <p> ${e.temp.day}°C </p>
                            </div>
                            <p class="CardsDaily_Card_p">${new Date(e.dt * 1000).toLocaleDateString()}</p>
                        </div>
                    `).join('')
                        
                }
                </div>

        `;
               clickCards(dato)
};

const clickCards=(dato)=>{
    const CardSelection = Object.values(document.getElementsByClassName('cardsItems'));
    const showModal = document.getElementById('containerModal');
        CardSelection.forEach(card => {
                card.addEventListener("click",(e) => {
                    console.log(e);
                    const filter =dato.daily.find(i=>i.dt==e.currentTarget.id)
                    console.log(filter);
                    window.screenTop=0;
                    showDetails(filter)
                    showModal.style.display='block'
                });
        }); 
}