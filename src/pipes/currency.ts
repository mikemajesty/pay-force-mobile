import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'currency'
})
@Injectable()
export class Currency {
  transform(value: number, args: any[]) {
    return 'R$ ' + value.toFixed(2).replace(".", ",");
  }
}
