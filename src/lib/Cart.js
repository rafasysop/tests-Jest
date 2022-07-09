import { remove } from "lodash";
import find from "lodash/find";

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
    return this.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }
  remove(product) {
    remove(this.items, { product });
  }
}
