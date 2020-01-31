
function dive() {
    const list = document.getElementsByClassName("diverComponent");
    [...list].forEach((element) => {
        console.log(element);
        element.style.boxShadow = "0px 0px 0px #00077e";
        element.style.background = "#0438B6";
        element.style.color = "#0438B6";
        element.style.transitionDuration = "2s";
    })
    const imglist = document.getElementsByClassName("diveIMG");
    [...imglist].forEach((element) => {
        console.log(element);
        element.style.opacity = "0";
        element.style.transitionDuration = "2s";
    })
        const inputs = document.getElementsByClassName("input");
    [...inputs].forEach((element) => {
        console.log(element);
        element.style.borderBottomColor = "#0438B6";
        element.style.background = "#0438B6";
        element.classList.add("hidden");
        element.style.transitionDuration = "2s";
    })  
    //     const bringBack = document.getElementsByClassName("bringBack");
    // [...bringBack].forEach((element) => {
    //     console.log(element);
    //     element.style.transition = "2s";
    //     element.style.opacity = "0";
    //     element.style.transition = "2s";
    // })   
}



const audio = new Audio('./chookedi.mp3');

function chookedi() {    
    audio.play();    
}