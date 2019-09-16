var FizzBuzz = function(){};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

FizzBuzz.prototype.isDivisisbleByFifteen = function(number) {
  return (number % 15 === 0);
};

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisisbleByFifteen(number)) {
    return 'fizzbuzz'
  } else if (this.isDivisibleByFive(number)) {
    return 'buzz'
  } else if (this.isDivisibleByThree(number)){
    return 'fizz'
  } else {
    return number
  };
};
