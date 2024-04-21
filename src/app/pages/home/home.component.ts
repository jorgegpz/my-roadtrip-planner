import { Component } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'rtp-home',
  standalone: true,
  imports: [MapComponent, CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
