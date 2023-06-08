let car = {
  color: 'Black',
  model: '2023',
  company: 'Honda',
};
console.log(car.color);

// delete properties of  object

const obj = {
  props1: 'value1',
  props2: 'value2',
};
let objectValue = delete obj['props1'];
console.log(objectValue);

// This keyword

let person = {
  fristname: 'John',
  lastname: 'Smith',
  city: 'San Francisco',
  birthyear: '20010',
  Education: 'Softwaren Engineer',
  gerSummery: function () {
    return `${this.lastname} ${this.firstname} ${this.lastname} ${this.city} ${this.birthyear} ${this.Education}`;
  },
};
console.log(person.gerSummery());

// foreach loop

const dishes = ['biryani', 'Channy', 'KArahai'];

dishes.forEach((dish) => {
  console.log(dish);
});

// Math object

let number = 9.5;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

// call apply
