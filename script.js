//Get elements from DOM
const inputRUB=document.querySelector("#rub"),
      inputUSD=document.querySelector("#usd");


//Update value every input event
inputRUB.addEventListener("input",()=>{

    //Create new request with AJAX
    const request = new XMLHttpRequest();

    request.open("GET","current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();
    //Send request

    //When request loaded and status equals 200(OK) we change value
    request.addEventListener("load", ()=>{
        if(request.status==200){
            //Create new object with JSON response
            const data = JSON.parse(request.response);
            console.log(typeof(inputRUB.value));

            //Change value with two number after comma
            inputUSD.value=(+inputRUB.value/data.current.usd).toFixed(2);
        }
    });
});