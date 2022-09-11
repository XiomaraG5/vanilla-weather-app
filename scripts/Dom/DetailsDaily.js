
const closeModal =()=>{
    const
    close = document.getElementById('close')
    close.addEventListener('click',()=>{
        const showModal = document.getElementById('containerModal');
        showModal.style.display='none'
    })
}
export const showDetails  = (filter)=>{
    const showModal = document.getElementById('containerModal_body');
    showModal.innerHTML=`
         <i class="bi bi-x-octagon" id="close"></i>
        <h5> Day: ${new Date(filter.dt * 1000).toLocaleDateString()}</h5>
        <div class='currentCard'>
            <div class='currentCard_Card'>
                <div>
                    <img src='./assets/humedity.png' alt='Humedity'/>
                    <p> ${filter.humidity}% </p>
                </div>
                <p>Humedad</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/temperature.png' alt='temperature'/>
                <p> ${filter.temp.day}% </p>
                </div>
                <p>Temperatura</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/feeling.png' alt='sensación'/>
                <p> ${filter.feels_like.day}°c </p>
                </div>
                <p>Sensación</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/clouds.png' alt='clouds'/>
                <p> ${filter.clouds}% </p>
                </div>
                <p>Nubes</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/eyeglasses.png' alt='uvi'/>
                <p> ${filter.uvi} </p>
                </div>
                <p>Uvi</p>
            </div> 
            <div class='currentCard_Card'>
                <div>
                <img src='./assets/wind.png' alt='wind'/>
                <p> ${filter.wind_speed}% </p>
                </div>
                <p>Viento</p>
            </div> 
        </div>
    `;
    closeModal()
}