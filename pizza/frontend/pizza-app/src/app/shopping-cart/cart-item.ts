export class CartItem {
    customer_id: number;
    product_id: number;
    quantity: number;
    order_date: Date;

constructor(customer_id: number, product_id: number, quantity: number) {
    this.customer_id = customer_id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.order_date = this.getDate();
    console.log(this.order_date);
  }
  getQuantity(): number {
      return this.quantity;
  }
  getDate(): Date{
    return this.order_date = new Date();
  }
}