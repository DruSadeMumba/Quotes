import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LandingComponent } from './landing/landing.component';
import { MaxquoteComponent } from './maxquote/maxquote.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './highlight.directive';
import { TimelapsePipe } from './timelapse.pipe';
import { MinquoteComponent } from './maxquote/minquote/minquote.component';
import { MinquoteFormComponent } from './minquote-form/minquote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LandingComponent,
    MaxquoteComponent,
    FooterComponent,
    HighlightDirective,
    TimelapsePipe,
    MinquoteComponent,
    MinquoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
