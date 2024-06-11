import { Component, signal } from '@angular/core';
import { cardListMock } from '../../pages/home/card-list.mock';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card.model';

@Component({
  selector: 'rtp-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  cardList = signal<Card[]>(cardListMock);

  addCard() {
    this.cardList.update((cardList) => {
      return cardList.concat([{ target: 'New Destination' } as Card]);
    });
  }
}
