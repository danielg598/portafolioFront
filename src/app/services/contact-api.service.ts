import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  website: string;
  elapsedMs: number;
}

@Injectable({ providedIn: 'root' })
export class ContactApiService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  send(payload: ContactPayload): Promise<void> {
    return firstValueFrom(
      this.http.post<void>(`${this.apiUrl}/api/contact`, payload)
    );
  }
}
