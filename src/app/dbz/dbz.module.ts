import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormHeroesComponent } from './components/form-heroes/form-heroes.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, FormHeroesComponent],
  exports: [MainPageComponent],
  imports: [CommonModule],
})
export class DbzModule {}
