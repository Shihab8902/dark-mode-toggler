// get elements
const inputEl = document.querySelector("#modeChanger");
const bodyEl = document.querySelector("body");
const togglerCircle = document.querySelector(".circle");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));         //get the value from the local storage and run the code according to the local storage mode selection


const updateMode = ()=>{                //Configure all the styles if the input field is checked
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black";
        togglerCircle.style.backgroundColor = "black";
        bodyEl.style.color = "magenta";
    }else{
        bodyEl.style.backgroundColor = "white";
        togglerCircle.style.backgroundColor = "white";
        bodyEl.style.color = "black";
    }
};
updateMode();

    inputEl.addEventListener("change", ()=>{        //add an event listener to the input field for checking the changes of it
        updateMode();
        updateLocalStorage();
    });

const updateLocalStorage = ()=>{
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));      //push the input element event to the local storage
}

