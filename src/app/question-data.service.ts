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
}
