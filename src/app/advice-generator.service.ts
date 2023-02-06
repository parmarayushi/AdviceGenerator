import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AdviceGeneratorService {

  constructor(private _http: HttpClient) { }

  /**
   * @name getAdvice
   * @returns Observable.
   */
  public getAdvice(): Observable<any> {
    return this._http.get<any>("https://api.adviceslip.com/advice");
  }
}
