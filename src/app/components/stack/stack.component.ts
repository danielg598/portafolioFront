import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { LangService } from '../../services/lang.service';

interface TechItem {
  name: string; levelEs: string; levelEn: string;
  category: string; color: string;
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  lang = inject(LangService);

  techStack: TechItem[] = [
    { name: 'Angular', levelEs: 'Experto · 5 años', levelEn: 'Expert · 5 yrs', category: 'FRONTEND', color: '#DD0031' },
    { name: 'Java Spring Boot', levelEs: 'Avanzado · 3 años', levelEn: 'Advanced · 3 yrs', category: 'BACKEND', color: '#6DB33F' },
    { name: 'TypeScript', levelEs: 'Avanzado · 5 años', levelEn: 'Advanced · 5 yrs', category: 'FRONTEND', color: '#3178C6' },
    { name: 'Docker', levelEs: 'Intermedio · 1 año', levelEn: 'Intermediate · 1 yr', category: 'DEVOPS', color: '#2496ED' },
    { name: 'Kubernetes', levelEs: 'En formación', levelEn: 'In Training', category: 'DEVOPS', color: '#326CE5' },
    { name: 'AWS', levelEs: 'En formación', levelEn: 'In Training', category: 'CLOUD', color: '#FF9900' },
    { name: 'Machine Learning', levelEs: 'En formación', levelEn: 'In Training', category: 'AI / ML', color: '#8B5CF6' },
    { name: 'Python', levelEs: 'En formación', levelEn: 'In Training', category: 'AI / ML', color: '#3776AB' },
    { name: 'Flutter', levelEs: 'En formación', levelEn: 'In Training', category: 'MOBILE', color: '#02569B' },
    { name: 'Dart', levelEs: 'En formación', levelEn: 'In Training', category: 'MOBILE', color: '#0175C2' },
  ];

  level(item: TechItem): string {
    return this.lang.lang() === 'es' ? item.levelEs : item.levelEn;
  }
}
