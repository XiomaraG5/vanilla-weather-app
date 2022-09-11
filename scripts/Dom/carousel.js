

let data=0;
let counter=0
const dimensions = window.innerWidth

export const FuncTCarousel=()=>{
    console.log(dimensions);
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const movilTranslateLeft=()=>{
        if(counter>=0&& counter<16||counter==-1){
            data= data-6;
            document.getElementById('item').style.transform= `translateX(${data}%)`
            console.log("algo esta pasando");
            counter++
            console.log(data);
            console.log(counter);
        }
    }
    const movilTranslateRight=()=>{
        if(counter<=16&& counter>=0){
            data= data+6;
            document.getElementById('item').style.transform= `translateX(${data}%)`
            console.log("algo esta pasando");
            counter--
            console.log(counter);
            console.log(data);
        }
    }
    prev.addEventListener('click',()=>{
    //    if(dimensions<500){
            movilTranslateLeft()
    //    }
    })
    next.addEventListener('click',()=>{
             movilTranslateRight()
    })
}
