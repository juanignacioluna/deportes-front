import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class PrincipalService {
constructor(private _http: HttpClient) { }


getPrincipal() {

    return this._http.get("https://deportes-back.herokuapp.com/principal");
    
}



}
