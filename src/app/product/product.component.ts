import { Component } from "@angular/core";

@Component({
    selector:"app-product",
    templateUrl:"./product.component.html",
    styleUrls:['./product.component.scss']

})
export class productComponent{
    pName:string="Smsung 31";
    pId:number=123;
    pStatus:string="Dispatched"

}