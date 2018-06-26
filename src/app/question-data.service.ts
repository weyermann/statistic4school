import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {

  private data_zh_pop_year = [
    { cat: '2000', val: 300450 },
    { cat: '2001', val: 305450 },
    { cat: '2002', val: 300450 },
    { cat: '2003', val: 400450 },
    { cat: '2004', val: 200450 },
    { cat: '2005', val: 390450 },
    { cat: '2006', val: 305450 },
    { cat: '2007', val: 480450 }
  ];

  private data_zh_pop_year_reverse = [
    { cat: '0.08167', val: 2000 },
    { cat: '0.01492', val: 2001 },
    { cat: '0.02782', val: 2002 },
    { cat: '0.04253', val: 2004 },
    { cat: '0.12702', val: 2005 },
    { cat: '0.02288', val: 2006 },
    { cat: '0.02015', val: 2007 },
    { cat: '0.06094', val: 2008 }
  ];

  private data_zh_pop_2017_by_quarter = [
    { cat: 'Hirzenbach', val: 12627 },
    { cat: 'Schwamendingen-Mitte', val: 11012 },
    { cat: 'Saatlen', val: 8388 },
    { cat: 'Seebach', val: 25817 },
    { cat: 'Oerlikon', val: 22815 },
    { cat: 'Affoltern', val: 26177 },
    { cat: 'Wipkingen', val: 16544 },
    { cat: 'Hoengg', val: 23797 },
    { cat: 'Altstetten', val: 32603 },
    { cat: 'Albisrieden', val: 22113 },
    { cat: 'Weinegg', val: 5248 },
    { cat: 'Muehlebach', val: 6164 },
    { cat: 'Seefeld', val: 5129 },
    { cat: 'Witikon', val: 10600 },
    { cat: 'Hirslanden', val: 7465 },
    { cat: 'Hottingen', val: 11172 },
    { cat: 'Fluntern', val: 8221 },
    { cat: 'Oberstrass', val: 10846 },
    { cat: 'Unterstrass', val: 22768 },
    { cat: 'Escher Wyss', val: 6088 },
    { cat: 'Gewerbeschule', val: 9578 },
    { cat: 'Hard', val: 13057 },
    { cat: 'Langstrasse', val: 11144 },
    { cat: 'Werd', val: 4574 },
    { cat: 'Sihlfeld', val: 21660 },
    { cat: 'Friesenberg', val: 10860 },
    { cat: 'Alt-Wiedikon', val: 17522 },
    { cat: 'Enge', val: 9489 },
    { cat: 'Leimbach', val: 6212 },
    { cat: 'Wollishofen', val: 17892 },
    { cat: 'City', val: 830 },
    { cat: 'Lindenhof', val: 955 },
    { cat: 'Hochschulen', val: 677 },
    { cat: 'Rathaus', val: 3266 }
  ];



  constructor() { }

  public getPopulationZurichPerYear() {
    return Observable.create((observer) => {
      const data = this.data_zh_pop_year;
      observer.next(data);
    });
  }

  public getPopulationZurichPerYearReverse() {
    return Observable.create((observer) => {
      const data = this.data_zh_pop_year_reverse;
      observer.next(data);
    });
  }

  public getPopulationZurich2017PerQuarter() {
    return Observable.create((observer) => {
      const data = this.data_zh_pop_2017_by_quarter;
      observer.next(data);
    });
  }
}
