describe('FizzBuzz', function() {
  var fizzbuzz;

  // beforeEach(funcion() {
  //   fizzbuzz = new FizzBuzz();
  // });

  beforeEach(function() {
   fizzbuzz = new FizzBuzz();
 });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is not', function() {
    it('divisible by 3', function () {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is divisible by 5', function() {
    it('divisible by 5', function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });
});

  describe('knows when a number is not divisible by 5', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('knows when a number is divisible by both 5 & 3', function() {
    it('divisible by 3 and 5', function() {
      expect(fizzbuzz.isDivisisbleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is divisible by both 5 & 3', function() {
    it('divisible by 3 and 5', function() {
      expect(fizzbuzz.isDivisisbleByFifteen(1)).toBe(false);
    });
  });
});
