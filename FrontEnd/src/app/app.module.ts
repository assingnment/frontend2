import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChmeComponent } from './components/chme/chme.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { AntiragComponent } from './components/antirag/antirag.component';
import { IQACComponent } from './components/iqac/iqac.component';
import { AbtiqrcComponent } from './components/abtiqrc/abtiqrc.component';
import { Iqac2Component } from './components/iqac2/iqac2.component';
import { CoaccComponent } from './components/coacc/coacc.component';
import { Iqac3Component } from './components/iqac3/iqac3.component';
import { Iqac4Component } from './components/iqac4/iqac4.component';
import { Iqac5Component } from './components/iqac5/iqac5.component';
import { DemoComponent } from './components/demo/demo.component';
import { MessagesComponent } from './components/messages/messages.component';
import { QualityComponent } from './components/quality/quality.component';
import { VisionComponent } from './components/vision/vision.component';
import { OrganogramComponent } from './components/organogram/organogram.component';
import { GoalsComponent } from './components/goals/goals.component';
import { CommitteeComponent } from './components/committee/committee.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { StudComponent } from './components/stud/stud.component';
import { DemodComponent } from './components/demod/demod.component';
import { HostelsComponent } from './components/hostels/hostels.component';
import { WelfareComponent } from './components/welfare/welfare.component';
import { LibformComponent } from './components/libform/libform.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { McaComponent } from './components/mca/mca.component';
import { AdventureComponent } from './adventure/adventure.component';
const appRoutes: Routes = [
  { path: '', component:HomepageComponent},
  

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ChmeComponent,
    FooterComponent,
    FacultyComponent,
    AntiragComponent,
    IQACComponent,
    AbtiqrcComponent,
    Iqac2Component,
    CoaccComponent,
    Iqac3Component,
    Iqac4Component,
    Iqac5Component,
    DemoComponent,
    MessagesComponent,
    QualityComponent,
    VisionComponent,
    OrganogramComponent,
    GoalsComponent,
    CommitteeComponent,
    ContactusComponent,
    LoginComponent,
    StudComponent,
    DemodComponent,
    HostelsComponent,
    WelfareComponent,
    LibformComponent,
    StudentloginComponent,
    McaComponent,
    AdventureComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

