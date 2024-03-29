import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import settings from './app.settings.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  providers: [TranslateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(settings.availableLanguages);
    this.translateService.setDefaultLang(settings.defaultLanguage);
    this.translateService.use(settings.defaultLanguage);
  }
}
