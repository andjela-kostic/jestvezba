const {addCalculator,substract, multiplication, dividing,sumFewNumbers, array} = require("./calculator");

test("addition of 2 and 3 to equal 5", () => {
  expect(addCalculator(2, 3)).toBe(5);
});

test("Subtracting two numbers 32 and 2 to equal 30", ()=>{
    expect(substract(32,2)).toBe(30)
});

test("Multiplication two numbers 3 and 4 to equal 12", ()=>{
    expect(multiplication(3,4)).toBe(12)
})

test("Dividing two numbers 15 and 5 to equal 3", ()=>{
    expect(dividing(15,5)).toBe(3)
})

test("Sum few numbers 15 and 5 and 3 to equal 23", ()=>{
    expect(sumFewNumbers(15,5,3)).toBe(23)
})

test("Sum few numbers 15 and 5 and -3 and 4 to equal 21", ()=>{
    expect(sumFewNumbers(15,5,-3, 4)).toBe(21)
})


describe("String or one argument error", ()=>{

    test("It should throw error if called with non number or 1 argument", ()=>{

        expect(() =>(addCalculator(9)).toThrowError("Morate uneti 2 broja"))

    });

})
  

describe("Second argm must be diferent of 0", ()=>{

    test("It should throw error if called with non number or 1 argument", ()=>{

        expect(() =>(multiplication(9,0)).toThrowError("Ne mozete mnoziti sa 0"))

    });

})


describe("Argments must be diferent of string", ()=>{

    test("It should throw error if called with non number or 1 argument", ()=>{

        expect(() =>(sumFewNumbers(9,0,"lala")).toThrowError("Ne sme se prosledjivati string"))

    });

})

describe("Array must have numbers", ()=>{

    test("It should throw error if called with string", ()=>{

        expect(() =>(array(9,0,"error")).toThrowError("Ne sme se prosledjivati string"))

    });

})

describe("Array must have numbers", ()=>{

    test("It should be correct", ()=>{

        expect(() =>(array(9,0,4,6,35)).toThrowError("Ne sme se prosledjivati string"))

    });

})

describe("Array must have numbers", ()=>{

    test("It should return error because empty array", ()=>{

        expect(() =>(array()).toThrowError("Ne sme se proslediti prazan niz"))

    });

})