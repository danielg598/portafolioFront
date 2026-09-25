import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LangService } from '../../services/lang.service';
import { ConfigService } from '../../services/config.service';
import { ContactApiService } from '../../services/contact-api.service';

type SendStatus = 'idle' | 'sending' | 'success' | 'error' | 'rate-limited';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  lang = inject(LangService);
  cfg = inject(ConfigService);
  private contactApi = inject(ContactApiService);

  isFormOpen = signal(false);
  status = signal<SendStatus>('idle');

  name = '';
  email = '';
  message = '';

  openForm() {
    this.status.set('idle');
    this.isFormOpen.set(true);
  }

  closeForm() {
    this.isFormOpen.set(false);
  }

  async submit() {
    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      return;
    }

    this.status.set('sending');
    try {
      await this.contactApi.send({
        name: this.name.trim(),
        email: this.email.trim(),
        message: this.message.trim()
      });
      this.status.set('success');
      this.name = '';
      this.email = '';
      this.message = '';
    } catch (err: any) {
      if (err?.status === 429) {
        this.status.set('rate-limited');
      } else {
        this.status.set('error');
      }
    }
  }
}
