import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

//shows and hides spinner for each request
@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(private spinner: NgxSpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.show();

    return next.handle(req.clone()).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    );
  }
}
