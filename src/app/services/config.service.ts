import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface ContactConfig {
  whatsappLink: string;
  emailLink: string;
  emailDisplay: string;
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly apiUrl = environment.apiUrl;

  whatsappLink = signal('');
  emailLink = signal('');
  emailDisplay = signal('');

  constructor(private http: HttpClient) {}

  load(): Promise<void> {
    return new Promise(resolve => {
      this.http.get<ContactConfig>(`${this.apiUrl}/api/config`).subscribe({
        next: cfg => {
          this.whatsappLink.set(cfg.whatsappLink);
          this.emailLink.set(cfg.emailLink);
          this.emailDisplay.set(cfg.emailDisplay);
          resolve();
        },
        error: () => resolve()
      });
    });
  }
}
