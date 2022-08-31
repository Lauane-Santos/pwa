window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculaIMC);
  };
  
  function calculaIMC() {
  
    /* Getting input from user into altura variable.
    Input is string so typecasting is necessary. */
    let altura = parseInt(document
            .querySelector("#altura").value);
  
    /* Getting input from user into peso variable. 
    Input is string so typecasting is necessary.*/
    let peso = parseInt(document
            .querySelector("#peso").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (altura === "" || isNaN(altura)) 
        result.innerHTML = "Provide a valid altura!";
  
    else if (peso === "" || isNaN(peso)) 
        result.innerHTML = "Provide a valid peso!";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        let bmi = (peso / ((altura * altura) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Under peso : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Over peso : <span>${bmi}</span>`;
    }
  }