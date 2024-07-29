
// https://goweather.herokuapp.com/weather/delhi


let api = fetch("https://goweather.herokuapp.com/weather/delhi");
api.then((resolv)=>{
    return resolv.json();
}).then((value2)=>{  
    console.log(value2);
});    