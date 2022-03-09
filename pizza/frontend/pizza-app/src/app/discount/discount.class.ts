import { Timestamp } from "rxjs";

export class Discount {
    discount_category: string;
    start_date: Date;
    start_time: number;
    end_date: Date;
    end_time : number ;
    discount_percent: number;
    status: string;
    
    constructor(discount_category: string, start_date: Date, start_time: number, end_date: Date, end_time:number, discount_percent:number,status:string) {
        this.discount_category = discount_category;
        this.start_date = start_date;
        this.start_time = start_time;
        this.end_date = end_date;
        this.end_time = end_time;
        this.discount_percent = discount_percent;
        this.status = status;
    }
}