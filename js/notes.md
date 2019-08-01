**P Code**

getAPIdata

- get data

_on load_

1. the page gets the API and brings in JSON data
2. parse JSON data
3. build cards with parsed JSON data
4. loop through JSON
5. gin up html code
   `lastName = employee[i].sur_name`
6. gin up closing tags
7. set first card to DOM
8. move on to next card

---

# EXAMPLE FROM TIME AND WEATHER

---

```javascript
const proxy = "https://cors-anywhere.herokuapp.com/";
const api = `${proxy}https://api.darksky.net/forecast/fc6838719bc5539953da7994c98bd6c6/${lat},${long}`;

         fetch(api)
            .then(weather_data => {
               return weather_data.json();
            })
            .then(weather_data => {
               const { temperature } = weather_data.currently;
               const { summary } = weather_data.currently;
               const { apparentTemperature } = weather_data.currently;

               temp.innerHTML =
                  "Temperature: " + parseInt(temperature) + "&#176;";
               heat_index.innerHTML =
                  "Heat index: " + parseInt(apparentTemperature) + "&#176;";
               summ.textContent = "Currently, it's " + summary.toLowerCase();
            });
      });
```

## Here is a random kitten

![Kittens](https://placekitten.com/250/401 "Random kitten")

### Dummy data Storage

// **\*** dummy data for testing **\*\*\*\***
const employeeData = [
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers I",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers II",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers III",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers IV",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers V",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers VI",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers VII",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers VIII",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers IX",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers X",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers XI",
email: "victoria.chambers80@example.com",
city: "springfield"
},
{
image: "images/member-1.jpg",
first_name: "victoria",
last_name: "chambers XII",
email: "victoria.chambers80@example.com",
city: "springfield"
}
];
