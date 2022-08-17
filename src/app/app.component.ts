import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})

export class AppComponent {
  title = 'wellwlds';
  myDate = new Date();
  month: string | null;
  year: string | null;
  day: string | null;
  hour: string | null;
  min: string | null;
  currentMonth: string | null;
  currentYear: string | null;
  currentDay: string | null;
  currentHour: string | null;
  currentMin: string | null;
  
  dates = [
    {
      "day": "04",
      "month": "JUN",
      "year": "2011",
      "hour": "14",
      "min": "22"
    },
    {
      "day": "21",
      "month": "DEC",
      "year": "2014",
      "hour": "21",
      "min": "00"
    },
    {
      "day": "12",
      "month": "FEV",
      "year": "2020",
      "hour": "09",
      "min": "43"
    },
    {
      "day": "7",
      "month": "JUL",
      "year": "2020",
      "hour": "23",
      "min": "51"
    }
  ]
  constructor(private datePipe: DatePipe){
    this.currentMonth = this.datePipe.transform(this.myDate, 'MMM');
    this.currentYear = this.datePipe.transform(this.myDate, 'yyyy');
    this.currentDay = this.datePipe.transform(this.myDate, 'dd');
    this.currentHour = this.datePipe.transform(this.myDate, 'hh');
    this.currentMin = this.datePipe.transform(this.myDate, 'mm');
    this.month = this.dates[0]["month"];
    this.year = this.dates[0]["year"];
    this.day = this.dates[0]["day"];
    this.hour = this.dates[0]["hour"];
    this.min = this.dates[0]["min"];
    
  }

  changeDate(index: number){
    this.month = this.dates[index]["month"];
    this.year = this.dates[index]["year"];
    this.day = this.dates[index]["day"];
    this.hour = this.dates[index]["hour"];
    this.min = this.dates[index]["min"];
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 9
      }
    },
  }
}
