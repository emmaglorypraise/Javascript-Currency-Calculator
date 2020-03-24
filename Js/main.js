// connects to the input elements
let dollar_input = document.querySelector(".dollar");
let naira_input = document.querySelector(".naira");

// collects the value put by the user in the input 
const inputValue = () => {  
  const dollarInputValue = dollar_input.value;
  const nairaInputValue = naira_input.value;
}



const calculate_dollar = () => {
  let converted_naira_rate = 366.50 * dollar_input.value;
  // console.log(converted_naira_rate);
  naira_input.value = converted_naira_rate;
}
const calculate_naira = () => {
  let converted_dollar_rate = 0.0027 * naira_input.value;
  // console.log(converted_dollar_rate);
  dollar_input.value = converted_dollar_rate;
}

// listens for any event that happens in the input element
dollar_input.addEventListener("input", calculate_dollar);
naira_input.addEventListener("input", calculate_naira);



