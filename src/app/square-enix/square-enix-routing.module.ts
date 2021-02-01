import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'HomePage' }
  },
  {
    path: 'world',
    component: WorldComponent,
    data: { animation: 'WorldPage' }
  },
  {
    path: 'characters',
    component: CharactersComponent,
    data: { animation: 'CharactersPage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SquareEnixRoutingModule { }
