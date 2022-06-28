import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { GoalsComponent } from './components/goals/goals.component';
import { VisionComponent } from './components/vision/vision.component';
import { MessagesComponent } from './components/messages/messages.component';
import { OrganogramComponent } from './components/organogram/organogram.component';
import { QualityComponent } from './components/quality/quality.component';
import { CommitteeComponent } from './components/committee/committee.component';
import { StudComponent } from './components/stud/stud.component';
import { DemodComponent } from './components/demod/demod.component';
import { LibformComponent } from './components/libform/libform.component';
import { WelfareComponent } from './components/welfare/welfare.component';
import { HostelsComponent } from './components/hostels/hostels.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { McaComponent } from './components/mca/mca.component';
import { AdventureComponent } from './adventure/adventure.component';
const routes: Routes = [
  { path: 'chme', component:ChmeComponent},
  { path: 'faculty', component:FacultyComponent},
  { path: 'antirag', component:AntiragComponent},
  { path: 'iqac', component:IQACComponent},
  { path: 'abtiqrc', component:AbtiqrcComponent},
  { path: 'iqac2', component:Iqac2Component},
  { path: 'coacc', component:CoaccComponent},
  { path: 'iqac3', component:Iqac3Component},
  { path: 'iqac4', component:Iqac4Component},
  { path: 'iqac5', component:Iqac5Component},
  { path: 'demo', component:DemoComponent},
  { path: 'goals', component:GoalsComponent},
  { path: 'vision', component:VisionComponent},
  { path: 'quality', component:QualityComponent},
  { path: 'messages', component:MessagesComponent},
  { path: 'organogram', component:OrganogramComponent},
  { path: 'committee', component:CommitteeComponent},
  { path: 'stud', component:StudComponent},
  { path: 'demod', component:DemodComponent},
  { path: 'libform', component:LibformComponent},
  { path: 'welfare', component:WelfareComponent},
  { path: 'hostels', component:HostelsComponent},
  { path: 'contactus', component:ContactusComponent},
  { path: 'studentlogin', component:StudentloginComponent},
  { path: 'mca', component:McaComponent},
  { path: 'adventure', component:AdventureComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
