import { Component } from "@angular/core";
import { DateService } from "../services/date.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-custom-date",
  templateUrl: "./custom-date.component.html",
  styleUrls: ["./custom-date.component.css"],
  providers: [DatePipe],
})
export class CustomDateComponent {
  constructor(private dateService: DateService, private datePipe: DatePipe) {}

  date: string;
  formattedDate;

  fetchDate() {
    this.formattedDate = this.datePipe.transform(
      Date.now().toString(),
      "ddMMyyyy"
    );
    this.dateService
      .getDate(this.formattedDate)
      .subscribe((date) => (this.date = date));
  }
}
