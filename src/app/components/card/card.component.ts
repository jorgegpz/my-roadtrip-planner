import { animate, style, transition, trigger } from '@angular/animations';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Card } from './card.model';

@Component({
  selector: 'rtp-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [
    trigger('cardEnterLeave', [
      transition(':enter', [style({ height: 0 }), animate('100ms', style({ height: '15rem' }))]),
      transition(':leave', [animate('5000ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CardComponent {
  card = input.required<Card>();

  remove = output<void>();
}
