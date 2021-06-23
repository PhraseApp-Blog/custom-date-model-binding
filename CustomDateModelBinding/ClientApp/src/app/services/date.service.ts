import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DateService {
  constructor(private http: HttpClient) {}

  getDate(date: any) {
    const url = `/api/date/${date}`;
    return this.http.get<string>(url);
  }
}
