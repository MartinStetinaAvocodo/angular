import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';
import { CharactersComponent } from './characters/characters.component';
import { SquareEnixRoutingModule } from './square-enix-routing.module';

@NgModule({
  declarations: [HomeComponent, WorldComponent, CharactersComponent],
  imports: [
    CommonModule, SquareEnixRoutingModule
  ]
})
export class SquareEnixModule { }
