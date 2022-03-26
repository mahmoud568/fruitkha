import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({ name: "dateFormat" })
export class MomentPipe implements PipeTransform {
  // send lang as an argument so its update with every time language change
  transform(value: Date | moment.Moment, dateFormat: string, lang: string | null): any {
    if (lang === "en") {
      moment.updateLocale("en", {
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      });
    } else if (lang === "ar") {
      moment.updateLocale("ar", {
        months: [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ],
      });
    }
    return moment(value).format(dateFormat);
  }
}
