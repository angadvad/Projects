const { json } = require("body-parser");
let jsonObject = `
{
    "data": [
        {
            "name": "Sammy1",
            "age": 60
        },
        {
            "name": "Sammy2",
            "age": 20
        },
        {
            "name": "Sammy3",
            "age": 80
        },
        {
            "name": "Sammy4",
            "age": 40
        }
    ]
}`;

let bodyData = JSON.parse(jsonObject); 
let response = bodyData.data.sort((a, b) => (a.age < b.age) ? 1 : -1);
console.log(response);