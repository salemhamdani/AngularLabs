import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvTech/cv/cv.component";
import {EditorComponent} from "./editor/editor.component";
import {ColorSimulatorComponent} from "./color-simulator/color-simulator.component";
import {HomeComponent} from "./home/home.component";

const APP_ROUTING: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cv', component: CvComponent
  },
  {
    path: 'color', component: ColorSimulatorComponent
  },
  {
    path: 'editor', component: EditorComponent
  },
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);

