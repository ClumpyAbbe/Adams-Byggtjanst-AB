import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { BackgroundVideoComponent } from './Components/background-video/background-video.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HemComponent } from './Pages/Hem/hem.component';
import { ProjektComponent } from './Pages/Projekt/projekt.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HemComponent },
  { path: 'projekt', component: ProjektComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundVideoComponent,
    FooterComponent,
    HemComponent,
    ProjektComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
