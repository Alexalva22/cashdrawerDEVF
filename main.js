// ---------------LOGIN---------------

const users = [
    {
      email: "alejandro@gmail.com",
      pass: "1234",
      user: "Alex",
      name: "Alejandro Alvarado Vargas",
      cash: 100,
      card: "6542-4782-4679-0946",
      defeat: "11/26",
    },
    {
      email: "eduardo@gmail.com",
      pass: "3456",
      user: "Lalin",
      name: "Eduardo Islas Fuentes",
      cash: 300,
      card: "6882-4891-9096-8653",
      defeat: "09/26",
    },
    {
      email: "carlos@gmail.com",
      pass: "1234",
      user: "Carlangas",
      name: "Carlos Hernandez Medina",
      cash: 40,
      card: "6867-4901-6596-2356",
      defeat: "06/25",
    },
  ];
  
  function login() {
    const pass = document.querySelector("#password").value;
    const email = document.querySelector("#user").value;
  
    const lookEmail = users.find((el) => el.email === email && el.pass === pass);
    console.log(lookEmail);
  
    if (lookEmail) {
      let addNone = document.querySelector("#none");
      addNone.classList.add("none");
      let addCash = document.querySelector("#cash");
      addCash.innerHTML = lookEmail.cash;
      let addName = document.querySelector("#name");
      addName.innerHTML = `Bienvenido ${lookEmail.name}`;
      let addUser = document.querySelector("#printUser");
      addUser.innerHTML = `Tu usuario es ${lookEmail.user}`;
      let addDefeat = document.querySelector("#defeat");
      addDefeat.innerHTML = `Tu tarjeta vence en ${lookEmail.defeat}`;
      let addCard = document.querySelector("#cardNumber");
      addCard.innerHTML = `Tu numero de tarjeta es ${lookEmail.card}`;
      let toggleNone = document.querySelector("#outNone");
      toggleNone.classList.toggle("none");
  
      // CREANDO LA FUNCION DE DEPOSITO Y RETIRO
  
      // function deposit() {
      //   let saldo = parseFloat(document.querySelector('#cash').value);
  
      //   console.log(saldo);
      // }
    } else {
      let showError = document.querySelector("#error");
      showError.innerHTML = "Revisa tus credenciales";
    }
  }
  
  document
    .querySelector("#loginButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      login();
    });
  
  function deposit() {
    let saldo = Number(document.getElementById("cash").textContent);
    let depositQuant = Number(document.querySelector("#deposit").value);
    console.log(depositQuant);
  
    if (depositQuant > 0) {
      let saldoDeposit = saldo + depositQuant;
      let addCash = document.querySelector("#cash");
      addCash.innerHTML = saldoDeposit;
    } else {
        let dwError = document.querySelector('#dwError')
        dwError.innerHTML = 'Ingresa una cantidad valida'
    }
    console.log(saldo);
    console.log(typeof saldo);
  }
  
  function withdraw() {
    let saldo = Number(document.getElementById("cash").textContent);
    let withdrawQuant = Number(document.querySelector("#withdraw").value);
  
    if (withdrawQuant <= saldo) {
      let saldoWithdraw = saldo - withdrawQuant;
      let addCash = document.querySelector("#cash");
      addCash.innerHTML = saldoWithdraw;
    } else {
      let dwError1 = document.querySelector('#dwError');
      dwError1.innerHTML = 'Ingresa una cantidad menor a tu saldo'
    }
    //   console.log(depositQuant);
    //   console.log(saldo);
  }
  
  function logout(){
    let toggleNone = document.querySelector("#none");
      toggleNone.classList.toggle("none");
      let addNone = document.querySelector("#outNone");
      addNone.classList.add("none");
  


  }