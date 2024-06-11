import { Component, input } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'rtp-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card = input.required<Card>();
}
