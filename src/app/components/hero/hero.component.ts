import { Component, inject } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  lang = inject(LangService);
  cfg = inject(ConfigService);
}
