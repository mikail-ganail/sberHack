import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { IGetData } from './models';

const API_URL = 'laalalalaalal';
@Injectable({
  providedIn: 'root',
})
export class DajestService {
  dajestListSign = signal<IGetData[]>([]);

  constructor(private readonly http: HttpClient) {}

  getDajests() {
    return (
      this.http
        //.post<IGetData[]>(`${API_URL}/admin/access`, {})
        .get<IGetData[]>(`assets/data/test.json`)
        .pipe(
          catchError((err) => {
            this.handeError(err);
            throw new Error(err.message);
          })
        )
        .subscribe((dajects: IGetData[]) => {
          this.dajestListSign.set([...this.dajestListSign(), ...dajects]);
        })
    );
  }
  handeError(err: any) {
    throw new Error('Method not implemented.');
  }
}
