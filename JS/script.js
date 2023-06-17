let orderButton = document.querySelector("#order-button");

let p1 = document.querySelector("#ex1");
let p2 = document.querySelector("#ex2");
let p3 = document.querySelector("#ex3");

let myArray = [p1,p2,p3]



orderButton.onclick = function(){

    console.log("button cllicked");
    
    myArray[0].textContent = Car.make;
    myArray[1].textContent = Car.model;
    myArray[2].textContent = Car.vroom();

}

const Car = {
    make: "Chevrolet",
    model: "Sonic",
    year: 2015,

    vroom(){

        // console.log("vroom vrooom");
        return "vroom vroom";
    }
}

// Car.vroom();