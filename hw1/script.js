const UAH = 1,
USD = 26.30, 
EUR = 30.46,
BTC = 1660990.89, 
PLN = 6.61;
let flag = true,
    fValue,
    sValue,
    resultValue;



while(flag){
    let firstCurrency = prompt('Please, enter the currency to convert from: "UAH", "USD", "EUR", "BTC","PLN"', 'UAH').toUpperCase();

    if(firstCurrency !== "UAH" && firstCurrency !== "USD" && firstCurrency !== "EUR" && firstCurrency !== "BTC" && firstCurrency !== "PLN" ){
        alert('Please, enter a valid first currency')
    }else{
        fValue = firstCurrency === "UAH" ? UAH : firstCurrency === "USD" ? USD : firstCurrency === "EUR" ? EUR : firstCurrency === "BTC" ? BTC : PLN;
        quantity = +prompt('Please, enter the amount of currency', 1),
        secondCurrency = prompt('Please, enter one of the following currencies to convert in: "UAH", "USD", "EUR", "BTC","PLN"', 'USD').toUpperCase();
        if(secondCurrency !== "UAH" && secondCurrency !== "USD" && secondCurrency !== "EUR" && secondCurrency !== "BTC" && secondCurrency !== "PLN" ){
            alert('Please, enter a valid second currency')
        }else{
            sValue = secondCurrency === "UAH" ? UAH : secondCurrency === "USD" ? USD : secondCurrency === "EUR" ? EUR : secondCurrency === "BTC" ? BTC : PLN;

            resultValue = ((quantity/sValue)*fValue).toFixed(3);
            alert(`${firstCurrency} to ${secondCurrency} : ${resultValue }`)
            flag = confirm(`You want to continue?`);
        }

    }
   
}


