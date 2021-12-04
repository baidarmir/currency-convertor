import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class Currency {
    constructor(private http: HttpClient) {

    }

    public serviceURI = 'https://api.exchangerate.host/latest';

    public getUSDtoEUR(amount, first, second): Observable<any> {
        const a = `https://api.exchangerate.host/convert?from=${first}&to=${second}&${amount}`;
        return this.http.get<any>(a);
    }

}