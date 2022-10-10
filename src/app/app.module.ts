import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HemComponent } from './Pages/Hem/hem.component';
import { ProjektComponent } from './Pages/Projekt/projekt.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjektModalComponent } from './Components/projekt-modal/projekt-modal.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SelectedProjectsComponent } from './Components/SelectedProjects/selected-projects/selected-projects.component';
const routes: Routes = [
  { path: '', component: HemComponent },
  { path: 'projekt', component: ProjektComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HemComponent,
    ProjektComponent,
    ProjektModalComponent,
    SelectedProjectsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  exports: [RouterModule],
  providers: [ProjektModalComponent, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

