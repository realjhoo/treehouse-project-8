function showUsers() {
   // ***** dummy data for testing ********
   const employeeData = [
      {
         image: "images/member-1.jpg",
         first_name: "Victoria",
         last_name: "Chambers",
         email: "victoria.chambers80@example.com",
         city: "Springfield"
      }
   ];
   // TODO
   // bring JSON data into this function
   // Loop thru data, creating one card for each employee
   // STYLE so info aligns with image
   // shorten card
   // make grid

   // +_+_+_+_+_+_+_+_+_+  CREATE CARDS +_+_+_+_+_+_+_+_+_+_+_+_+_+_+
   //create card
   let cards_wrapper = document.getElementById("cards-wrapper");
   let card = document.createElement("div");
   card.setAttribute("class", "card");
   cards_wrapper.appendChild(card);

   // create image
   let employee_image = document.createElement("img");
   employee_image.setAttribute("src", employeeData[0].image);
   employee_image.setAttribute("class", "employee-image");
   card.appendChild(employee_image);

   //create name
   let employee_name = document.createElement("p");
   employee_name.setAttribute("class", "employee-name");
   employee_name.innerHTML =
      employeeData[0].first_name + " " + employeeData[0].last_name;
   card.appendChild(employee_name);

   // create email
   let employee_email = document.createElement("p");
   employee_email.setAttribute("class", "employee-email");
   employee_email.innerHTML = employeeData[0].email;
   card.appendChild(employee_email);

   //create city
   let employee_city = document.createElement("p");
   employee_city.setAttribute("class", "employee-city");
   employee_city.innerHTML = employeeData[0].city;
   card.appendChild(employee_city);
   // +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
}

function main() {
   // This comment serves no purpose
   let disclaimer = "This is the JavaScript for Treehouse Project 8";
   console.log(disclaimer);
   showUsers();
}

main();
