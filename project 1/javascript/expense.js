document.getElementById("date").valueAsDate = new Date();

document.addEventListener("DOMContentLoaded", function () {
  // asscecing the form
  document
    .getElementById("transactionForm")
    .addEventListener("submit", addTransaction);

  // localstorage in Item geting system
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  // for value geting function
  const getValue = (id) => {
    return document.getElementById(id).value;
  };

  // function for genrating a Id
  const randomId = () => {
    return Math.floor(Math.random() * 100000);
  };

  // handling the form
  const addTransaction = (e) => {
    e.preventDefault();

    // create object
    let transaction = {
      id: randomId(),
      description: getValue("description"),
      amount: getValue("amount"),
      cetegory: getValue("cetegory"),
      date: getValue("date"),
      timestamp: new Date().getDate(),
    };

    // object is push the array
    transactions.push(transaction);

    // seting Item the Local Storage
    localStorage.setItem("transactions", JSON.stringify(transactions));

    // reseting the form
    document.getElementById("transactionForm").reset();
  };
});