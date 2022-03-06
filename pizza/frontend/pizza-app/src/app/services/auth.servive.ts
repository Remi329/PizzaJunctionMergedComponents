import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    http: HttpClient;
    //const url = http://localhost:3000/api/v1/auth/login
    constructor(http: HttpClient) {
        console.log("AutoService");
        this.http = http;
    }
    public validateUser(name:string, total_price:number, image_url:string) {
        let x: Observable<any>;
        let user = {name:name, total_price:total_price, image_url:image_url};
        x = this.http.post("http://localhost:3000/api/v1/auth/pizza", user);
        return x;
    }
}
