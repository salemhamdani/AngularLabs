import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvTech/cv/cv.component";
import {EditorComponent} from "./editor/editor.component";
import {ColorSimulatorComponent} from "./color-simulator/color-simulator.component";
import {HomeComponent} from "./home/home.component";
import {MoreDetailsComponent} from "./cvTech/more-details/more-details.component";
import {AddCvComponent} from "./cvTech/add-cv/add-cv.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {ObservableComponent} from "./observable/observable.component";


const APP_ROUTING: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cv', children: [
      {
        path: '', component: CvComponent
      },
      {
        path: 'add', component: AddCvComponent
      },
      {
        path: ':id', component: MoreDetailsComponent
      },
      {
        path: '**', component: NotFoundComponent
      },
    ]
  },
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'color', component: ColorSimulatorComponent
  },
  {
    path: 'editor', component: EditorComponent
  },
  {
    path: 'image', component: ObservableComponent
  },
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);

