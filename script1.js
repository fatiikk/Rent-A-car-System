let counteruser = 0;
let countercar = 0;
let counterrent = 0;

class User {
    constructor(name, surname, age, license) {
        this.id = ++counteruser;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.license = license;
    }
  }
  
class Car {
    constructor(brand, model, color) {
        this.id = ++countercar;
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
  }
  
class Rent {
    constructor(user, car) {
        this.id = ++counterrent;
        this.user = user;
        this.car = car;
    }
  }
  
  const users = [];
  const cars = [];
  const rents = [];
  
function addUser() {

    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const ageInput = document.getElementById("age");
    const licenseInput = document.getElementById("license");
    const name = nameInput.value;
    const surname = surnameInput.value;
    const age = ageInput.value;
    const license = licenseInput.value;
    var kul = document.getElementById("kulek");
    if (!name || !surname || !age || !license) {
        alert("Lütfen tüm alanları doldurun.");
        
        kul.classList.remove("btn-primary");
        kul.classList.add("btn-danger");
        return;
    }
    const user = new User(name, surname, age, license);
    users.push(user);
  
    const userSelect = document.getElementById("userSelect");
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(`${user.id} - ${user.name} ${user.surname} (${user.age}) - Belgesi : ${user.license}`));
    userSelect.appendChild(option);
    licenseInput.value = "";
    console.log(user)
    kul.classList.remove("btn-danger");
    kul.classList.add("btn-primary");
    const userList = document.getElementById("userList");
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdname = document.createElement("td");
    const tdsurname = document.createElement("td");
    const tdage = document.createElement("td");
    const tdlisence = document.createElement("td");
    tdId.appendChild(document.createTextNode(user.id));
    tdname.appendChild(document.createTextNode(`${user.name}`));
    tdsurname.appendChild(document.createTextNode(`${user.surname}`));
    tdage.appendChild(document.createTextNode(`${user.age}`));
    tdlisence.appendChild(document.createTextNode(`${user.license}`));
    tr.appendChild(tdId);
    tr.appendChild(tdname);
    tr.appendChild(tdsurname);
    tr.appendChild(tdage);
    tr.appendChild(tdlisence);
    userList.appendChild(tr);
  }
  
function addCar() {
    const brandInput = document.getElementById("brand");
    const modelInput = document.getElementById("model");
    const colorInput = document.getElementById("color");
    const brand = brandInput.value;
    const model = modelInput.value;
    const color = colorInput.value;
    var car1 = document.getElementById("carek");
    if (!brand || !model || !color) {
        alert("Lütfen tüm alanları doldurun.");
       
        car1.classList.remove("btn-primary");
        car1.classList.add("btn-danger");
        return;
    }
    const car = new Car(brand, model, color);
    cars.push(car);
    const carSelect = document.getElementById("carSelect");
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(`${car.id} - ${car.brand} ${car.model} (${car.color})`));
    carSelect.appendChild(option);
    brandInput.value = "";
    modelInput.value = "";
    colorInput.value = "";
    console.log(car)
    car1.classList.remove("btn-danger");
    car1.classList.add("btn-primary");
    const carList = document.getElementById("carList");
      const tr = document.createElement("tr");
      const tdId = document.createElement("td");
      const tdbrand = document.createElement("td");
      const tdmodel = document.createElement("td");
      const tdcolor = document.createElement("td");
      tdId.appendChild(document.createTextNode(car.id));
      tdbrand.appendChild(document.createTextNode(`${car.brand}`));
      tdmodel.appendChild(document.createTextNode(`${car.model}`));
      tdcolor.appendChild(document.createTextNode(`${car.color}`));
      tr.appendChild(tdId);
      tr.appendChild(tdbrand);
      tr.appendChild(tdmodel);
      tr.appendChild(tdcolor);
      carList.appendChild(tr);
  }

function rentCar() {
      const userIndex = document.getElementById("userSelect").selectedIndex;
      const carIndex = document.getElementById("carSelect").selectedIndex;
      var rent1 = document.getElementById("rentek");
      if (userIndex === 0 || carIndex === 0) {
          alert("Lütfen bir kullanıcı ve bir araç seçin.");
          
            rent1.classList.remove("btn-success");
          rent1.classList.add("btn-danger");
          return;
      }
      const user = users[userIndex - 1];
      const car = cars[carIndex - 1];
      const rent = new Rent(user, car);
      rents.push(rent);
      const rentList = document.getElementById("rentList");
      const tr = document.createElement("tr");
      const tdId = document.createElement("td");
      const tdUser = document.createElement("td");
      const tdCar = document.createElement("td");
      tdId.appendChild(document.createTextNode(rent.id));
      tdUser.appendChild(document.createTextNode(`${rent.user.id} - ${rent.user.name} ${rent.user.surname} - ${rent.user.license}`));
      tdCar.appendChild(document.createTextNode(`${car.id} - ${rent.car.brand} ${rent.car.model} (${rent.car.color})`));
      tr.appendChild(tdId);
      tr.appendChild(tdUser);
      tr.appendChild(tdCar);
      rentList.appendChild(tr);
      document.getElementById("userSelect").selectedIndex = 0;
      document.getElementById("carSelect").selectedIndex = 0;
      
    rent1.classList.remove("btn-danger");
    rent1.classList.add("btn-success");
  }