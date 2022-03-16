export class Pizza {
    product_name: string;
    total_price: number;
    image_url: string;
    topping_id: number;
    constructor(product_name: string, total_price: number, image_url: string, topping_id: number) {
        this.product_name = product_name;
        this.total_price = total_price;
        this.image_url = image_url;
        this.topping_id = topping_id;
    }
}