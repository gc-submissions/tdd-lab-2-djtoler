const Product = require("../src/js/Product")

describe("Product", () => {
  test("constructor sets 3 properties", () => {
    const product = new Product("apples", 20, true)
    expect(product.name).toBe("apples");
    expect(product.price).toBe(20);
    expect(product.taxable).toBe(true);
  });

  test("constructor sets 3 properties", () => {
    const product = new Product("oranges", 20, true)
    expect(product.name).toBe("oranges");
    expect(product.price).toBe(20);
    expect(product.taxable).toBe(true);
  });

  test("taxable product returns price plus tax", () => {
    const product = new Product("apples", 20, true)
   expect(product.getPriceWithTax()).toBeCloseTo(22)
  });


  test("taxable product returns price plus tax", () => {
    const product = new Product("oranges", 10, true)
   expect(product.getPriceWithTax()).toBeCloseTo(11)

   test("non taxable product ", () => {
    const product = new Product("rawchicken", 4, false)
   expect(product.getPriceWithTax()).toBeCloseTo(4)

   test("non taxable product ", () => {
    const product = new Product("rawbeef", 8, false)
   expect(product.getPriceWithTax()).toBeCloseTo(8)
  });







});