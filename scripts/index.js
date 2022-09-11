import { FuncTCarousel } from "./Dom/carousel.js";
import { UpdateData } from "./Dom/UpdateIndex.js";
import { getPlace, weatherPlace } from "./services/apis.js";



console.log("hellow wordl");

const date = new Date(),
      elemenDate = document.getElementById('date')
        console.log(date.getDay(), date.getMonth(), date.getHours());
      elemenDate.innerHTML=`
      ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}, 
      <i> ${date.getHours()}:${date.getMinutes()}</i>
      `;



const sentData = document.getElementById('sentData')
const input = document.getElementById('input')

const showList=(value)=>{
  const list = document.getElementById('list')
  list.style.display='block'
  list.innerHTML=value.map(element =>`
      <li id=${element.lat+','+element.lng}>${element.name.toString()}</li>
  `).join('')
  list.addEventListener('click', async(e)=>{
    console.log(e.target.id);
    const location =e.target.id.split(",")
    console.log(location);
    const data = await weatherPlace(location[0],location[1])
    UpdateData(data)
    FuncTCarousel()
    input.value=''
    list.style.display='none'
  })
}
  

input.addEventListener('input', async (e)=>{
    console.log(e.srcElement.value);
     const resp = await getPlace(e.srcElement.value)
     console.log(resp);
     showList(resp)
  })

