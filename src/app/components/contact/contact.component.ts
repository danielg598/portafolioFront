import { Component, inject } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  lang = inject(LangService);
  cfg = inject(ConfigService);
}
