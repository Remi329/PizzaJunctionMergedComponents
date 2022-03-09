export class Pizza {
    name: string;
    total_price: number;
    image_url: string;
    topping_id: number;
    constructor(name: string, total_price: number, image_url: string, topping_id: number) {
        this.name = name;
        this.total_price = total_price;
        this.image_url = image_url;
        this.topping_id = topping_id;
    }
}