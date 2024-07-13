import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card.model';

@Component({
  selector: 'rtp-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  card = input.required<Card>();
}
