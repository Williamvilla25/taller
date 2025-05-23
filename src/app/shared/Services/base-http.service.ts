import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  protected http = inject(HttpClient);
  protected apiUrl = environment.apiURL;
}
