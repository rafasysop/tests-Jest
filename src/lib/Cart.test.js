import { Cart } from "./Cart";

describe("Cart", () => {
  let cart;
  let product = {
    title: "Echo Dot",
    price: 35388, //353.88
  };

  let product2 = {
    title: "Echo Show",
    price: 41872, //418.72
  };
  beforeEach(() => {
    cart = new Cart();
  });

  describe("getTotal()", () => {
    it("should return 0 when getTotal() is executed in a newly created instance", () => {
      const cart = new Cart();
      expect(cart.getTotal()).toEqual(0);
    });

    it("should multiply quantity and price the total amount", () => {
      cart.add({
        product,
        quantity: 2, //70776
      });
      expect(cart.getTotal()).toEqual(70776);
    });

    it("should ensure no more than on product exists at a time", () => {
      cart.add({
        product,
        quantity: 2, //70776
      });
      cart.add({
        product,
        quantity: 1, //70776
      });
      expect(cart.getTotal()).toEqual(35388);
    });

    it("should update total when a product gets included and then removed", () => {
      cart.add({
        product,
        quantity: 2, //70776
      });
      cart.add({
        product: product2,
        quantity: 1, //41872
      });

      cart.remove(product);
      expect(cart.getTotal()).toEqual(41872);
    });
  });

  describe("Checkout Cart", () => {
    it("should ", () => {
      cart.add({
        product,
        quantity: 2, //70776
      });
      cart.add({
        product: product2,
        quantity: 1, //41872
      });
      expect(cart.checkout()).toMatchSnapshot();
    });

    it("should return object with the total and list items when sumary is called", () => {
      cart.add({
        product,
        quantity: 2, //70776
      });

      expect(cart.sumary()).toMatchSnapshot();
      expect(cart.getTotal()).toBeGreaterThan(0);
    });

    it("should reset the cart when checkout() is called", () => {
      cart.add({
        product,
        quantity: 2, //70776
      });

      cart.checkout();
      expect(cart.getTotal()).toEqual(0);
    });
  });
  describe("special conditions", () => {
    it("should apply percentage discount quantity above minimum is passed", () => {
      const condition = {
        percentage: 30,
        minimum: 2,
      };

      cart.add({
        product,
        condition,
        quantity: 3,
      });

      expect(cart.getTotal()).toEqual(74315);
    });
  });
});
