import { animate, style, transition, trigger } from '@angular/animations';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card.model';

@Component({
  selector: 'rtp-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [
    trigger('cardEnterLeave', [
      transition(':enter', [style({ height: 0 }), animate('100ms', style({ height: '15rem' }))]),
      transition(':leave', [animate('100ms', style({ height: 0 }))]),
    ]),
  ],
})
export class CardComponent {
  card = input.required<Card>();
}
