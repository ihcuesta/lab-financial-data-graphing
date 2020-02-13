const restCoinDeskApi = axios.create({
    baseURL: "http://api.coindesk.com/v1/bpi/historical/close.json"
  });
  
  function getCoinDeskInfo() {
    restCoinDeskApi
      .get()
      .then(responseFromAPI => console.log("Response from API is: ", responseFromAPI.data))
      .catch(err => console.log("Error is: ", err));
  }
  
  document.getElementById("theButton").onclick = function() {
    // const country = document.getElementById("theInput").value;
    getCoinDeskInfo();
  };