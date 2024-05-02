let img_containers = document.getElementsByClassName('img-container')

let i=0;
let direction = true
function translate(){
    let translate;
    if(direction){
        translate= 'translatex(-100%)';
        direction = false;
    }else{
        translate = 'translatex(0%)';
        direction = true;
    }
    for(elem of img_containers){
        elem.style.transform = translate;
    }
};

setInterval(translate,5000);
