import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, viewChild } from '@angular/core';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';

import '@maptiler/sdk/dist/maptiler-sdk.css';

@Component({
    selector: 'rtp-map',
    imports: [],
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

  private mapContainer = viewChild<ElementRef>('map');

  ngOnInit(): void {
    config.apiKey = 'WK9Lm5fDxz2LctUOcrzi';
  }

  ngAfterViewInit() {
    const initialState = {
      lat: 36.72288146320298,
      lng: -4.481973402261764,
      zoom: 14,
    };

    this.map = new Map({
      container: this.mapContainer().nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    this.addMarker(initialState.lng, initialState.lat);
  }

  ngOnDestroy() {
    this.map?.remove();
  }

  addMarker(longitude: number, latitude: number) {
    new Marker({ color: '#FF0000' }).setLngLat([longitude, latitude]).addTo(this.map);
  }
}
