function showUsers() {
  // ***** dummy data for testing ********
  const employeeData = [
    {
      image: "images/member-1.jpg",
      first_name: "Victoria",
      last_name: "Chambers",
      email: "victoria.chambers80@example.com",
      city: "Springfield"
    },
    {
      image: "images/member-1.jpg",
      first_name: "Victoria",
      last_name: "Chambers",
      email: "victoria.chambers80@example.com",
      city: "Springfield"
    },
    {
      image: "images/member-1.jpg",
      first_name: "Victoria",
      last_name: "Chambers",
      email: "victoria.chambers80@example.com",
      city: "Springfield"
    }
  ];
  // TODO this is important
  // bring JSON data into this function (pass JSON object to func)
  // Loop thru data, creating one card for each employee

  // +_+_+_+_+_+_+_+_+_+  CREATE CARDS +_+_+_+_+_+_+_+_+_+_+_+_+_+_+
  //create card
  // =-=-=-=-== TESTING FOR LOOP =-=-=-=-=-=-=
  for (let i = 0; i < 3; i++) {
    let cards_wrapper = document.getElementById("cards-wrapper");
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cards_wrapper.appendChild(card);

    // create image
    let employee_image = document.createElement("img");
    employee_image.setAttribute("src", employeeData[i].image);
    employee_image.setAttribute("class", "employee-image");
    card.appendChild(employee_image);

    //create name
    let employee_name = document.createElement("span");
    employee_name.setAttribute("class", "employee-name");
    employee_name.innerHTML =
      employeeData[i].first_name + " " + employeeData[i].last_name;
    card.appendChild(employee_name);

    // create email
    let employee_email = document.createElement("span");
    employee_email.setAttribute("class", "employee-email");
    employee_email.innerHTML = employeeData[i].email;
    card.appendChild(employee_email);

    //create city
    let employee_city = document.createElement("span");
    employee_city.setAttribute("class", "employee-city");
    employee_city.innerHTML = employeeData[i].city;
    card.appendChild(employee_city);
  }
  // +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
}

function getAPIdata() {
  // TODO here is where we will get the JSON stuff
}

function main() {
  let disclaimer = "This is the JavaScript for Treehouse Project 8";
  console.log(disclaimer);
  // FIXME This will be
  // TODO const api = getAPIdata();
  getAPIdata();
  // TODO and this will be
  // FIXME showUsers(api);
  showUsers();
}

main();
