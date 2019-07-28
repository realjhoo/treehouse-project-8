**P Code**

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
