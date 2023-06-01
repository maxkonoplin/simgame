import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  BusinessComponent,
  CityComponent,
  ComputerComponent,
  DeadComponent,
  FoodComponent,
  GameComponent,
  HouseComponent,
  InfoComponent,
  StartComponent,
  WorkComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StartComponent,
  },
  {
    path: 'game',
    component: GameComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info',
      },
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'food',
        component: FoodComponent,
      },
      {
        path: 'work',
        component: WorkComponent,
      },
      {
        path: 'house',
        component: HouseComponent,
      },
      {
        path: 'city',
        component: CityComponent,
      },
      {
        path: 'business',
        component: BusinessComponent,
      },
      {
        path: 'computer',
        component: ComputerComponent
      },
    ],
  },
  {
    path: 'dead',
    component: DeadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
