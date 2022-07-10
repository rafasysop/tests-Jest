import { remove } from "lodash";
import find from "lodash/find";
import Currency from "dinero.js";

Currency.defaultCurrency = "BRL";
Currency.defaultPrecision = 2;

export class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };
    const hasProduct = find(this.items, itemToFind);

    if (hasProduct) {
      remove(this.items, itemToFind);
    }

    this.items.push(item);
  }

  getTotal() {
    return this.items
      .reduce(
        (acc, item) =>
          acc.add(Currency({ amount: item.product.price * item.quantity })),
        Currency({ amount: 0 })
      )
      .getAmount();
  }

  remove(product) {
    remove(this.items, { product });
  }

  sumary() {
    return {
      total: this.getTotal(),
      items: this.items,
    };
  }

  checkout() {
    const { total, items } = this.sumary();

    this.items = [];

    return {
      total,
      items,
    };
  }
}
