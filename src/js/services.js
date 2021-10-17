import axios from 'axios'
import Handlebars from 'handlebars/runtime'
Handlebars.registerHelper('tempC', function (value) {
    console.log(value)
    //   return new Handlebars.SafeString(Math.round(value - 273.15))
    //   ||
    return (value - 273.15).toFixed(1)
})
import weatherTemplate from './templates/weatherWidget.hbs'
// console.log(Handlebars.helpers.tempCel(300))
// import { setErrorMsg } from './notif'
// console.log(setErrorMsg);
export function getWeatherData(city, place) {
    // https://openweathermap.org/api
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather`
    const apiKey = `b17a2dddb01d7481fea6373f92c2e546`
    let url = baseUrl + `?q=${city}&appid=${apiKey}`
    if (!city.trim()) alert(`Enter the City`)

    axios
        .get(url)
        .then(result => {
            // console.log(result)
            return result.data
        })
        .then(data => {
            //   console.log(data)
            insertWidget(weatherTemplate, data, place)
        })
        .catch(err => console.log(err))
}

function insertWidget(template, data, place) {
    place.classList.remove('loading')
    place.insertAdjacentHTML('afterbegin', template(data))
}

// export class APIpexel {
//     constructor() {
//         this.API_KEY = `563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2`;
//         this.BASE_URL = `https://api.pexels.com/v1`;
//         this.endPoint = `/search`;
//         // this._page = 1;
//         // this._query = ''
//     }

//     get query() {
//         return this._query;
//     }
//     set query(value) {
//         return (this._query = value)
//     }
//     // get page() {
//     //     return this._page
//     // }
//     // set page() {
//     //     return 
//     // }

//     getFetch(plase) {
//         axiox.defaults.headers.common.Authorization = this.API_KEY;
//         let params = `?query=${this._query}&per_page=5&page=${this._page}`;
//         let url = this.BASE_URL + this.endPoint + params;
//         console.log('то что идет в запрос', this._page, this._query);

//     }
// }