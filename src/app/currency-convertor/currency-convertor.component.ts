import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Currency } from '../currency.service';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.sass']
})
export class CurrencyConvertorComponent implements OnInit {
  public currencyForm: FormGroup;

  constructor(private currencyService: Currency,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  

}
