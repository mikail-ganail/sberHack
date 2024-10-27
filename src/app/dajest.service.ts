import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { IGetData } from './models';

const API_URL = 'http://10.178.196.31:5000';
@Injectable({
  providedIn: 'root',
})
export class DajestService {
  dajestListSign = signal<IGetData[]>([]);
  oldPos: string = '';

  constructor(private readonly http: HttpClient) {}

  getDajests(position: string) {
    if (position !== this.oldPos) {
      this.dajestListSign.set([])
    }
    this.oldPos = position
    //let url;
    // if (position === 'neft') {
    //   url = 'data_neft'
    // } else if (position === 'backend') {
    //   url = 'backend'
    // }
    return (
      this.http
        .post<IGetData[]>(`${API_URL}/news`, {role: position})
        //.get<IGetData[]>(`assets/data/test.json`)
        .pipe(
          catchError((err) => {
            this.handeError(err);
            throw new Error(err.message);
          })
        )
      .subscribe((dajects: IGetData[]) => {
        console.log(dajects)
        this.dajestListSign.set([...this.dajestListSign(), ...dajects]);
        console.log(this.dajestListSign())
      })
    );
  }
  handeError(err: any) {
    throw new Error('Method not implemented.');
  }
}
