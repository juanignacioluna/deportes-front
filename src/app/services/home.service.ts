import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class HomeService {
constructor(private _http: HttpClient) { }



getNotis() {
 return this._http.get("https://deportes-back.herokuapp.com/home");
}



}
