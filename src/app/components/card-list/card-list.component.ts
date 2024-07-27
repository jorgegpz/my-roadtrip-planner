import { animate, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card.model';

@Component({
  selector: 'rtp-card-list',
  standalone: true,
  imports: [CardComponent, MatButtonModule, MatIconModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  animations: [
    trigger('cardEnterLeave', [
      transition(':enter', [style({ height: 0 }), animate('100ms', style({ height: '15rem' }))]),
      transition(':leave', [style({ height: '15rem' }), animate('100ms', style({ height: '0' }))]),
    ]),
  ],
})
export class CardListComponent {
  cardList = signal<Map<number, Card>>(new Map());

  addCard() {
    this.cardList.update(cardList => cardList.set(Date.now(), { target: 'New Destination' } as Card));
  }

  removeCard(id: number) {
    this.cardList.update(cardList => {
      cardList.delete(id);
      return cardList;
    });
  }
}
