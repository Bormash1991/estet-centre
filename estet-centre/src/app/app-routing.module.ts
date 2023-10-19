import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';

export enum MainRouterEnum {
  MainPage = '',
  About = 'about'
}

const routes: Routes = [
  {
    path: MainRouterEnum.MainPage,
    component: MainPageComponent
  },
  {
    path: MainRouterEnum.About,
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
