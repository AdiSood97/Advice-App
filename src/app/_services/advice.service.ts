import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AdviceService {
  public readonly adviceUrl = 'https://api.adviceslip.com/advice';

  constructor(public http: HttpClient, public sanitizer: DomSanitizer) {
    // set token if saved in local storage
  }

  // Get Coins List

  getRandomAdvice() {
    return this.http.get(`${this.adviceUrl}`).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }

  getSearchAdvice(term: any) {
    return this.http
      .get(`${this.adviceUrl}/search/${term}`)
      .pipe(
        map((response: Response) => {
          return response;
        })
      );
  }

}