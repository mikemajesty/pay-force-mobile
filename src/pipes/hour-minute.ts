import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'hourminute'
})
@Injectable()
export class HourMinute {

  transform(value: any, args: any[]) {
    if (value < 0) {
      value = value * -1;
    }

    const hours = Math.floor(value / 60);
    value = value % 60;

    return this.padZero(hours, 2) + ":" + this.padZero(value, 2);
  }

  padZero(n, nr) {
    if (nr > String(n).length) {
      return Array(nr - String(n).length + 1).join('0') + n;
    }

    return String(n);
  }
}
