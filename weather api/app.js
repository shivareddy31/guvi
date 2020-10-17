function elemCreate(a, b) {
    var x = document.createElement(a);
    for (let i = 0; i < b.length; i++) { x.classList.add(b[i]); }
    return x;
}

function textCreate(txt) {
    var t = document.createTextNode(txt);
    return t;
}

const getData = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await fetch("https://restcountries.eu/rest/v2/all")
            const data = await response.json();
            resolve(data);
        } catch (e) {
            reject(e);
        }

    });
}

const getWeather = (lat, lon) => {
    return new Promise(async(resolve, reject) => {
        try {

            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=f1e34f3af6ed32aa75b30c0448ae574b')
            const data = await response.json();
            resolve(data);
        } catch (e) {
            reject(e);
        }

    });
}

async function country() {
    try {
        const data = await getData();
        for (let i = 0; i < data.length; i++) {
            createCountryCard(data[i], i)
        }
    } catch (e) {
        console.error(e);
    }
};

async function weather(name, lat, lng, flag, id, card) {
    try {
        const data = await getWeather(lat, lng);
        createWeatherCard(name, data, flag, id, card)
    } catch (e) {
        console.error(e);
    }
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


document.body.style.backgroundColor = "#22404B";

let $container = elemCreate('DIV', ['container']);

let $row = elemCreate('DIV', ['row'])

let $col1 = elemCreate('DIV', ['col-12'])



let $head = document.createElement('P')
$head.innerText = "Weather Report";
$head.style.fontSize = "3rem"
$head.style.textAlign = 'center'
$head.style.color = '#FFFAFA'

$col1.append($head)
$row.appendChild($col1)

country();

function createCountryCard(data, i) {
    let flag = data.flag;
    let name = data.name;
    let capital = data.capital;
    let region = data.region;
    let latitude = data.latlng[0];
    let longitude = data.latlng[1];
    let countryCode = data.alpha3Code;


    let div1 = elemCreate("DIV", ['col-lg-4', 'col-sm-12'])
    div1.setAttribute("id", i + 250)
    let card = elemCreate("DIV", ['card', 'border', 'mt-3', 'mb-3'])
    card.style.textAlign = 'center';
    card.style.borderRadius = "4px";

    let head = elemCreate("DIV", ['card-header'])
    head.style.backgroundColor = 'black';
    head.style.color = 'white';
    head.innerText = name;

    let cardBody = elemCreate("DIV", ['card-body'])
    cardBody.style.backgroundImage = 'linear-gradient(90deg, rgba(227,215,215,0.9164040616246498) 0%, rgba(136,124,124,0.7343312324929971) 100%)';

    let imag = elemCreate('IMG', ['img'])
    imag.src = flag;
    imag.style.height = "200px";
    imag.style.maxWidth = "100%";

    let content = elemCreate('DIV', ['mt-3'])
    content.style.color = 'white';
    content.innerHTML = `Capital : ${capital}<br>Region : ${region}<br>Country Code : ${countryCode}<br>`

    let btn = elemCreate('BUTTON', ['btn', 'btn-outline-light', 'mt-3'])
    btn.innerText = 'Click For Weather'
    btn.setAttribute("id", i);
    btn.onclick = function() {
        weather(name, latitude, longitude, flag, div1.id, card);
    }

    content.appendChild(btn)
    cardBody.append(imag, content)
    card.append(head, cardBody)
    div1.appendChild(card);
    $row.append(div1)
}


function createWeatherCard(name, wData, flag, id, card) {
    console.log(wData)
    let main = wData.weather[0].main
    let status = wData.weather[0].description
    let iconcode = wData.weather[0].icon
    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    let temp = wData.main.temp
    let pressure = wData.main.pressure
    let humidity = wData.main.humidity
    let wspeed = wData.wind.speed

    let wdiv = document.getElementById(id)
    let wcard = elemCreate("DIV", ['card', 'border', 'mt-3', 'mb-3'])
    wcard.style.textAlign = 'center';
    wcard.style.borderRadius = "4px";

    let whead = elemCreate("DIV", ['card-header'])
    whead.style.backgroundColor = 'black';
    whead.style.color = 'white';
    whead.innerText = name;

    let br = document.createElement('BR')

    let whead2 = elemCreate("H3", ['mt-0'])
    whead2.innerText = "Weather Details";
    whead2.color = "red"

    let fimag = elemCreate('IMG', ['img', 'mt-2'])
    fimag.src = flag;
    fimag.style.height = "100px";
    fimag.style.maxWidth = "100%";

    let wimg = elemCreate("IMG", ['img'])
    wimg.src = iconurl;

    let wcardBody = elemCreate("DIV", ['card-body'])
    wcardBody.style.backgroundColor = 'beige';

    let wcontent = elemCreate('DIV', '')
    wcontent.style.marginTop = '-2%';
    wcontent.style.color = 'green';
    wcontent.innerHTML = `${main}<br>Status : ${status}<br>Temperature : ${temp}<br>Pressure : ${pressure}<br>Humidity : ${humidity}<br> Wind Speed : ${wspeed}<br>`

    let wbtn = elemCreate('BUTTON', ['btn', 'btn-primary', 'mt-2'])
    wbtn.innerText = 'Back'
    wbtn.onclick = function() {
        removeAllChildNodes(wdiv)
        wdiv.appendChild(card);
    }


    wcontent.appendChild(wbtn)
    wcardBody.append(whead2, fimag, br, wimg, wcontent)
    wcard.append(whead, wcardBody)
    removeAllChildNodes(wdiv)
    wdiv.appendChild(wcard)
}

$container.appendChild($row)
document.body.append($container)