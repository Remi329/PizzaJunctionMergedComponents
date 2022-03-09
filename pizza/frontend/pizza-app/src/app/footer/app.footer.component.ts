import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    styleUrls: ['./app.footer.component.css']
})
export class FooterComponent{
    footertitle: string='Footer component';
    constructor(){
        console.log("Footer Component Loaded...");
    }
}