import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExercisePlayerModule } from "../../projects/exercisePlayer/src/lib/exercise-player.module";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ExercisePlayerModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
