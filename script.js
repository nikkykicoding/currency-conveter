document.addEventListener('DOMContentLoaded', function() {
    fetchData();
  });

async function fetchData() {
    const url = 'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8952bf43d2msh07c8a6e8907a796p1019c8jsn4193a0840ed5',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const currencies = await response.json(); // Parse response as JSON
  
      // Get the select element
      const dropdown1 = document.getElementById('currencyDropdown1');
      const dropdown2 = document.getElementById('currencyDropdown2');
        
      // Populate the dropdown with currency symbols
      currencies.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency.symbol;
        option1.text = `${currency.symbol} - ${currency.name}`;
        dropdown1.appendChild(option1);

        
      });

      currencies.forEach(currency => {
        const option2 = document.createElement('option');
        option2.value = currency.symbol;
        option2.text = `${currency.symbol} - ${currency.name}`;
        dropdown2.appendChild(option2);

        
      });
    
    } catch (error) {
      console.error(error);
    }
    
  }
  async function getSelectedCurrency() {
    // Get the selected values from the dropdowns
    const selectedCurrency1 = document.getElementById('currencyDropdown1').value;
    const selectedCurrency2 = document.getElementById('currencyDropdown2').value;
  
    // Get the amount you want to convert (assuming it's entered in an input field)
    const amountToConvert = parseFloat(document.getElementById('amountInput').value);
  
    // Display the selected currencies and amount in the console
    console.log('Selected Currency 1:', selectedCurrency1);
    console.log('Selected Currency 2:', selectedCurrency2);
    console.log('Amount to Convert:', amountToConvert);
  
    // Construct the API URL with selected currencies and amount
    const url = `https://exchange-rate-api1.p.rapidapi.com/convert?base=${selectedCurrency1}&target=${selectedCurrency2}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8952bf43d2msh07c8a6e8907a796p1019c8jsn4193a0840ed5',
        'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
  
      // Log the entire result object
      console.log(result);
      let r=result.convert_result.rate;
       convertedValue.innerHTML=r*amountToConvert;

      // Access the converted amount from the result
      console.log('Converted Amount:', r*amountToConvert);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the async function to populate the dropdown
  fetchData();

  







  