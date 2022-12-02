import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './ColorManipulation/color/color.component';
import { FilsComponent } from './ColorManipulation/fils/fils.component';
import { PereComponent } from './ColorManipulation/pere/pere.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { CarteVisiteComponent } from './VisitCard/carte-visite/carte-visite.component';
import { CarteInputComponent } from './VisitCard/carte-input/carte-input.component';
import { CarteViewComponent } from './VisitCard/carte-view/carte-view.component';
import { WordEditeurComponent } from './word-editeur/word-editeur.component';
import { HighlightDirective } from './directive/highlight.directive';
import { InputSimulatorComponent } from './ColorManipulation/input-simulator/input-simulator.component';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { HiredListComponent } from './cvTech/hired-list/hired-list.component';
import { ToastrModule } from 'ngx-toastr';
import {ROUTING} from "./app.routing";
import {EditorComponent} from "./editor/editor.component";
import {HeaderComponent} from "./header/header.component";
import {ColorSimulatorComponent} from "./color-simulator/color-simulator.component";
import { HomeComponent } from './home/home.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    CarteVisiteComponent,
    CarteInputComponent,
    CarteViewComponent,
    WordEditeurComponent,
    HighlightDirective,
    InputSimulatorComponent,
    DefaultImagePipe,
    HiredListComponent,
    CarteVisiteComponent,
    EditorComponent,
    HeaderComponent,
    ColorSimulatorComponent,
    HomeComponent,
    RouterSimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
