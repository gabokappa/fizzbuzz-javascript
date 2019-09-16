describe('FizzBuzz', function() {
  var fizzbuzz;

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

  describe('multiples of 3 and 5', function() {
    it('fizzbuzzes for 30', function() {
      expect(fizzbuzz.play(30)).toEqual('fizzbuzz');
    });
  });

  describe('multiples of 5', function() {
    it('fizzbuzzes for 10', function() {
      expect(fizzbuzz.play(10)).toEqual('buzz');
    });
  });

  describe('multiples of 3', function() {
    it('fizzbuzzes for 6', function() {
      expect(fizzbuzz.play(6)).toEqual('fizz');
    });
  });

  describe('numbers that are multiples of neither 3 nor 5', function() {
    it("doesn't fizzbuzz", function() {
      expect(fizzbuzz.play(4)).toEqual(4);
    });
  });
});
