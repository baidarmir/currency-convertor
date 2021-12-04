import { Component } from '@angular/core';
import { Currency } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public valueAdded: number;
  public conversionValue: number;
  public firstCurrency: string = "USD";
  public secondCurency: string = "EUR";
  public history = [];
  public historyOld = [];
  constructor(private currencyService: Currency) { }

  ngOnInit() {
    this.retrieveHitory();
  }

  runConversion(): void {
    console.log(this.firstCurrency);
    console.log(this.valueAdded);
    this.currencyService.getUSDtoEUR(this.valueAdded, this.firstCurrency, this.secondCurency).subscribe(z => {
      this.conversionValue = this.valueAdded * z.result;
      this.history.push(this.valueAdded + " " + this.firstCurrency + " " + "was" + " " + this.secondCurency);  
      localStorage.setItem("history", JSON.stringify(this.history));

      
    })
 



  }

  retrieveHitory() {
    const a = localStorage.getItem("history");
    this.historyOld = JSON.parse(a);
    console.log(this.historyOld);
  }

}
