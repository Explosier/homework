// 1. Sukurkite funkciją kuri priimtų parametrą "name". Jos tikslas atspausdinti naršyklėje tekstą "Labas," ir šalia jo perduotą vardą. Pvz "Labas, Elena".

function helloWorld(name) {
    document.querySelector('.a1').innerHTML = "Labas, " + name;
}

helloWorld("Elena");

// 2. Sukurkite funkciją kuri priimtų vieną parametrą (tekstą) ir grąžintų atsakymą kiek simbolių yra tame tekste. Iš funkcijos gautą rezultatą atvaizduokite naršyklėje.

function textLength(text) {
    if(typeof text === 'string' || text instanceof String) {
        return text.length;
    } else {
        return false;
    }
}

const text = "The brown fox is on the rocks";

if(textLength(text) === false){
    document.querySelector('.a2').innerHTML = `Input: "${text}" is not a string!`;
} else {
    document.querySelector('.a2').innerHTML = `Text: "${text}" has ${textLength(text)} symbols..`;
}

// 3. Sukurkite funkciją kuri priimtų du parametrus "name" ir "last_name". Funkcija turi grąžinti vieną stringą, kuriame būtų vardas ir pavardė prasidedantys didžiosiomis raidėmis.

function fullName(name, lastName) {
    name = name[0].toUpperCase() + name.slice(1);
    lastName = lastName[0].toUpperCase() + lastName.slice(1);
    return name + " " + lastName;
}

const name = "tadas";
const lastName = "valantonis";

document.querySelector('.a3').innerHTML = `Given Name: ${name} and Last Name: ${lastName} - Generated full name: ${fullName(name, lastName)}`;

// 4. Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.

function randomNumbers() {
    let numbers = "";
    for(let i = 0; i < 3; i++) {
        numbers += ",";
        numbers += Math.floor(Math.random() * 6);

    }
    return numbers.slice(1);
}

document.querySelector('.a4').innerHTML = "3 random numbers from 0 to 5: " + randomNumbers();
console.log("3 random numbers from 0 to 5: " + randomNumbers())

// 5. Parašykite funkciją kuri priimtų tris parametrus "from" ir "to" ir "limit".
// Patikrinkite ar šie perduodami parametrai yra skaičiai ir pagal juos sugeneruokite masyvą, kurio ilgį nusako "limit" parametras, o reikšmės from ir to nurodo atsitiktinį skaičių šiuose rėžiuose.

function randomNumberArray(from, to, limit) {
    if(typeof from === 'number' && typeof to === 'number' && typeof limit === 'number') {
        let numbers = [];
        for(let i = 0; i < limit; i++) {
            numbers.push(Math.floor(Math.random() * (to - from + 1)) + from);
        }
        return numbers;
    } else {
        return false;
    }
}

const from = 10;
const to = 20;
const limit = 5;

if(randomNumberArray(from, to, limit) === false){
    document.querySelector('.a5').innerHTML = `Input: "${from}" ,"${to}" or "${limit}" is probably not a number!`;
    console.log(`Input: "${from}" , ${to} or ${limit} is probably not a number!`);
} else {
    document.querySelector('.a5').innerHTML = `${limit} random numbers from ${from} to ${to} makes array: ${randomNumberArray(from, to, limit)}`;
    console.log(`${limit} random numbers from ${from} to ${to} makes array: ${randomNumberArray(from, to, limit)}`); 
}

// 6. Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir grąžintų reikšmę (perduodami du parametrai: skaičius ir laipsnis)

function powerOf(number, n) {
    return number ** n;
}

const number = 5;
const n = 3;

document.querySelector('.a6').innerHTML = `Number "${number}" raised by power "${n}" gives result equal to "${powerOf(number, n)}"`;

console.log(`Number "${number}" raised by power "${n}" gives result equal to "${powerOf(number, n)}"`);

// 7. Parašykite funkciją, kurios parametras būtų tekstas, kuris yra įterpiamas į h1 tagą. Rezultatą atvaizduokite naršyklėje.

function makeH1(text) {
    return "<h1>" + text + "</h1>";
}

const h1Text = "Super random text";

document.querySelector('.a7').innerHTML = `Text "${h1Text}" inserted into H1 tag: ${makeH1(h1Text)}`;

// 8. Parašykite funkciją su dviem parametrais. Pirmasis yra tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės antrame uždavinyje parašyta funkcija.

function makeHn(text, tag) {
    if(typeof text === 'string' || text instanceof String && typeof tag === 'number' && tag >= 1 && tag <= 6) {
        return `<h${tag}>${text}</h${tag}>`;
    } else {
        return false;
    }
}

const hnText = "What does the sheep say?";
const tag = 3;

if(makeHn(hnText, tag) === false){
    document.querySelector('.a8').innerHTML = `Error: "${hnText}" must be a string, ${tag} must be a NUMBER strictly 1 to 6...`;
} else {
    document.querySelector('.a8').innerHTML = `Text "${hnText}" inserted into "H${tag}" tag: ${makeHn(hnText, tag)}`;
}

// 9. Aprašykite funkciją kuri priimtų vieną parametrą "number" bei patikrintų ar duotas skaičius yra pirminis. Atgal grąžinkite teigiamą arba neigiamą (boolean) atsakymą.

function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for(let i = 3; i * i <= number; i += 2) {
        if(number % i === 0) return false;
    }
    return true;
}

const checkPrime = 8;

document.querySelector('.a9').innerHTML = `Number "${checkPrime}" is ${isPrime(checkPrime) ? "Prime" : "Not Prime"}`;

console.log(`Number "${checkPrime}" is ${isPrime(checkPrime) ? "Prime" : "Not Prime"}`);

// 10. Sugeneruokite 100 elementų masyvą kurio reikšmės atsitiktiniai skaičiai nuo 997 iki 15991.

const makeArray = randomNumberArray(997, 15991, 100);

document.querySelector('.a10').innerHTML = makeArray;

console.log(makeArray);

// 11. Pasinaudodami devintoje užduotyje aprašyta funkcija masyve palikite tik pirminius skaičius, kurie yra didesni nei 5000;

function filterArray(array) {
    return array.filter(num => num > 5000 && isPrime(num));
}

document.querySelector('.a11').innerHTML = filterArray(makeArray);

console.log(filterArray(makeArray));