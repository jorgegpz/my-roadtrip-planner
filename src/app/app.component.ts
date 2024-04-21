import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import settings from './app.settings.json';

@Component({
  selector: 'rtp-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  providers: [TranslateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class RtpComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(settings.availableLanguages);
    this.translateService.setDefaultLang(settings.defaultLanguage);
    this.translateService.use(settings.defaultLanguage);
  }
}
