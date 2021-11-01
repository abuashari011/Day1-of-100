//========== Operator =============
//===================================
let numberOne = 23;
numberOne += 2;
let numberTwo = 2;
numberTwo = 2**5;
let numberThree = 23;
numberThree %= 5;
console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);

let myNumber = function(a,b){
    return a / b;
}
let division = myNumber(10,3);
console.log(+division.toFixed(2));

//=====  Kilometer per hour to meter per second=============;
//===========================================

let kmPerHourToMeterPerSecond = function(a){
    return (a*1000)/3600;
}
let input = 30;
let getValue = +((kmPerHourToMeterPerSecond(input)).toFixed(2));
console.log(`${input}Km/h = ${getValue}m/s`);

// indetails about me in ONJECT

let details = {
    fname: 'Abu',
    lname: 'Ashari',
    age : 16,
    fullName: function(){
        return `Your full name is ${this.fname} ${this.lname}`
    },
    dateOfBirth: function(){
        let date = new Date();
        return `You born is ${date.getFullYear() - this.age}`;
    },
    study: 'SSC Candidate',
    location: {
        village:'Daulatpur',
        district: 'Kushtia',
        division: 'Khulna',
    },
    fullInDetails: function(){
        return `Hi, ${this.fullName()}, ${this.dateOfBirth()}. Right now I am ${this.study} and My Location is ${this.location.village}, ${this.location.district}, ${this.location.division}. `;
    }
}

console.log(details);
console.log(details.fullName());
console.log(details.dateOfBirth());
console.log(details.fullInDetails());


//================ string ===============
//==========================================

let country = 'I love My country \'Bangladesh\'.\nBangladesh is a beautiful country.\nThere are so many resources in \'Bangladesh\'';



let length = country.length;
let part1 = (country.slice(7,17));
let part2 = country.substr(18,13);
let newCountry = country.replace(/Bangladesh/ig,'Indoneshia');
let upper = country.toUpperCase();
let concatting = country.concat(newCountry);
let split = country.split(' ');



console.log(country);
console.log(length);
console.log(part1);
console.log(part2);
console.log(newCountry);
console.log(upper);
console.log(concatting);
console.log(split);
