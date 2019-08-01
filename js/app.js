// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getAPIdata() {
  const api =
    "https://randomuser.me/api/?results=12&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,us";

  fetch(api)
    .then(employee_data => {
      return employee_data.json();
    })
    .then(employee_data => {
      // extract data, store in object, then send to cards for display
      for (let i = 0; i < 12; i++) {
        let employee_image = employee_data.results[i].picture.large;
        let t_employee_firstName = employee_data.results[i].name.first;
        let t_employee_lastName = employee_data.results[i].name.last;
        let employee_email = employee_data.results[i].email;
        let employee_city = employee_data.results[i].location.city;
        let employee_cell = employee_data.results[i].cell;
        let t_employee_address = employee_data.results[i].location.street;
        let t_employee_state = employee_data.results[i].location.state;
        let t_employee_postcode = employee_data.results[i].location.postcode;
        let employee_birthday = employee_data.results[i].dob.date;
        // format birthday, addresss and name - t_ is for temp
        employee_birthday = parseBirthday(employee_birthday);
        employee_address = parseAddress(
          t_employee_address,
          t_employee_state,
          t_employee_postcode
        );
        employee_name = parseName(t_employee_firstName, t_employee_lastName);
        // store the data for display on cards
        let employeeData = [
          {
            image: employee_image,
            name: employee_name,
            email: employee_email,
            city: employee_city,
            cell: employee_cell,
            address: employee_address,
            birthday: employee_birthday
          }
        ];
        // send the data to the cards
        showCards(employeeData);
      } // END FOR LOOP
    });
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function showCards(employeeData) {
  let employee_image = employeeData[0].image;
  let employee_name = employeeData[0].name;
  let employee_email = employeeData[0].email;
  let employee_city = employeeData[0].city;

  let employee_cell = employeeData[0].cell;
  let employee_address = employeeData[0].address;
  let employee_birthday = employeeData[0].birthday;

  // create blank card
  let card = createCard("cards-wrapper", "div", "card");
  // set card data
  populateCard("img", "employee-image", employee_image, card);
  populateCard("span", "employee-name", employee_name, card);
  populateCard("span", "employee-email", employee_email, card);
  populateCard("span", "employee-city", employee_city, card);
  // modal card data
  populateCard("span", "employee-cell", employee_cell, card);
  populateCard("span", "employee-address", employee_address, card);
  populateCard("span", "employee-birthday", employee_birthday, card);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function createCard(id, tag, classname) {
  // create blank card
  let parent = document.getElementById(id);
  let card = document.createElement(tag);
  card.setAttribute("class", classname);
  parent.appendChild(card);
  return card;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function populateCard(tag, className, string, parent) {
  //   populalate the card
  let element = document.createElement(tag); // create the element tag
  if (tag == "img") {
    element.setAttribute("src", string); // set the source for the image
  } else {
    element.innerHTML = string; // set the text
  }
  element.setAttribute("class", className); // assign class name
  parent.appendChild(element); // append the element
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function capitalizeFirstLetter(string) {
  // this should be done in CSS `text-transform: capitalize;` instead
  // if unused when done, this function will be deleted
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function openModalCard() {
  document.querySelector(".modal-mask").style.display = "flex";
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function closeModalCard() {
  // hide the modal card
  document.querySelector(".modal-mask").style.display = "none";
  destroyModalCard(); // destroy modal card and all its data
  createModalCard(); // recreate the modal card for future data
  createCloseButton(); // recreate the close X button
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function extractDataFromCard(target) {
  let employee_image = target.querySelector(".employee-image").src;
  let employee_name = target.querySelector(".employee-name").textContent;
  let employee_email = target.querySelector(".employee-email").textContent;
  let employee_city = target.querySelector(".employee-city").textContent;
  let employee_cell = target.querySelector(".employee-cell").textContent;
  let employee_address =
    target.querySelector(".employee-address").textContent + " ";
  let employee_birthday =
    "Birthday: " + target.querySelector(".employee-birthday").textContent;

  let parent = document.getElementById("modal-card");
  populateModalCard(parent, "img", employee_image, "modal-employee-image");
  populateModalCard(parent, "span", employee_name, "modal-employee-name");
  populateModalCard(parent, "span", employee_email, "modal-employee-email");
  populateModalCard(parent, "span", employee_city, "modal-employee-city");
  populateModalCard(parent, "hr", "", "modal-ruler"); // divider line
  populateModalCard(parent, "span", employee_cell, "modal-employee-cell");
  populateModalCard(parent, "span", employee_address, "modal-employee-address");
  populateModalCard(
    parent,
    "span",
    employee_birthday,
    "modal-employee-birthday"
  );
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function populateModalCard(parent, tag, string, classname) {
  let element = document.createElement(tag);

  if (tag === "img") {
    element.setAttribute("src", string);
  } else {
    element.innerHTML = string;
  }
  element.setAttribute("class", classname);
  parent.appendChild(element);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function destroyModalCard() {
  // destroy the modal card, and all its data
  let element = document.getElementById("modal-card");
  element.parentNode.removeChild(element);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function createModalCard() {
  let parent = document.getElementById("modal-mask");
  let modal_div = document.createElement("div");
  modal_div.setAttribute("class", "modal-card");
  modal_div.setAttribute("id", "modal-card");
  parent.appendChild(modal_div);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function createCloseButton() {
  // when the modal box is recreated, the X must be recreated, too
  let parent = document.getElementById("modal-card");
  let close_btn = document.createElement("div");
  close_btn.setAttribute("class", "close-btn");
  close_btn.setAttribute("id", "close-btn");
  parent.appendChild(close_btn);
  close_btn.innerHTML = "+";
  activateCloseButton();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function activateCloseButton() {
  // event listener for the modal card close button X
  document
    .getElementById("close-btn")
    .addEventListener("click", closeModalCard);
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function activateModalCard() {
  //event listener for opening modal card
  document.addEventListener("click", function(event) {
    if (event.target.className === "card") {
      extractDataFromCard(event.target);
      openModalCard();
    } else if (
      event.target.className === "employee-image" ||
      event.target.className === "employee-name" ||
      event.target.className === "employee-email" ||
      event.target.className === "employee-city"
    ) {
      extractDataFromCard(event.target.parentNode);
      openModalCard();
    }
  });
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function parseBirthday(birthday) {
  // Changes date format from 1982-10-26T13:55:02Z to 01/01/91
  let fix = new Date(birthday);
  let date = fix.getDate();
  let month = fix.getMonth();
  let year = fix.getYear();
  let fixed_birthday = month + "/" + date + "/" + year;
  return fixed_birthday;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function parseAddress(address, state, zip) {
  // join the address, state and postcode into one string
  let fullAddress = address + ", " + state + " " + zip;
  return fullAddress;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function parseName(first, last) {
  let fullName = first + " " + last;
  return fullName;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function main() {
  getAPIdata();
  activateCloseButton();
  activateModalCard();
}

main();
