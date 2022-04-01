//-----Exercitiul 1--------------->
class Worker {
    constructor(name, surname, hourRate, hours) {
        this.name = name;
        this.surname = surname;
        this.hourRate = hourRate;
        this.hours = hours;
    }
    getSalary(hourRate, hours){
        return this.hourRate * this.hours;
    }
    increaseHourRate(n){
        return this.hourRate += n;
    };
    setTax(t){
        return this.tax = t
    }
    /*setTax(procent){
        return this.tax = procent;
    }*/
    getSalaryNetto(){
        return this.getSalary() - ((this.getSalary()*this.tax)/100)
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getHourRate() {
        return this.hourRate;
    }
    getHours() {
        return this.hours;
    }
}

let worker = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker.name); //afișează 'Ion'
console.log(worker.surname); //afișează 'Creangă'
console.log(worker.hourRate); //afișează 10
console.log(worker.hours); //afișează 31
console.log(worker.getSalary()); //afișează 1760 = 10*176

//-----Exercitiul 2--------------->
let workerOne = new Worker('Mihai', 'Eminescu', 20, 135);
let workerTwo = new Worker('Miron', 'Costin', 15, 208);

//-----Exercitiul 3--------------->
let workSalOne = workerOne.getSalary();
let workSalTwo = workerTwo.getSalary();
if (workSalOne > workSalTwo) {
    console.log(`Lucratorul cu cel mai mare salariu este ${workerOne.name}, cu ${workSalOne - workSalTwo} mai mult`);
} else console.log((`Lucratorul cu cel mai mare salariu este ${workerTwo.name}, cu ${workSalTwo - workSalOne} mai mult`))

//-----Exercitiul 4--------------->
console.log("---------Exercitiul 4------")
let worker2 = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker2.getName()); // afișează Ion
console.log(worker2.getSurname()); // afișează Creangă
console.log(worker2.getHourRate()); // afișează 10
console.log(worker2.getHours()); // afișează 176
console.log(worker2.getSalary()); //afișează 1760 = 10*176

//-----Exercitiul 5--------------->
console.log("---------Exercitiul 5------")
var worker3 = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker3.getName()); // afișează Ion
console.log(worker3.getSurname()); // afișează Creangă
console.log(worker3.getHourRate()); // afișează 10
console.log(worker3.getHours()); // afișează 176
console.log(worker3.getSalary()); //afișează 1760 = 10*176
worker3.increaseHourRate(2); //mărește hourRate cu 2
console.log(worker3.getSalary()); //afișează 2112 = 12*176

//-----Exercitiul 6--------------->
console.log("---------Exercitiul 6------")
var worker4 = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker4.getSalary()); //afișează 1760 = 10*176
worker4.setTax(18); //setează impozitul pe salariu la 18%
console.log(worker4.getSalaryNetto()); //afișează 2112 – 18% = 1731.84


//-----Exercitiul 7--------------->
const workers = [
    {
        Name: "Vrabii Valentin",
        surname: "Valentin",
        hourRate: 10,
        hours: 176
    },
    {
        Name: "Ion",
        Group: "Ionescu",
        AverageMark: 7,
        Birthdate: 150
    },
    {
        Name: "Andrei",
        Group: "Smeniuc",
        AverageMark: 15,
        Birthdate: 205
    },
];

const workListContainer = document.getElementById("workListContainer");
const showList = () => {
    workListContainer.innerHTML += "";
    for (const item of workers) {
        workListContainer.innerHTML += "<br>";
        for (const key in item) {
            workListContainer.innerHTML += (`${key}: ${item[key]}<br>`);
        }
    }
}
showList();
