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
import { MinquoteComponent } from './minquote/minquote.component';
import { MinquoteFormComponent } from './minquote-form/minquote-form.component';
import { MinquoteDetailComponent } from './minquote/minquote-detail/minquote-detail.component';

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
    MinquoteFormComponent,
    MinquoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
