import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TampleteBuildingComponent } from './components/templates/tamplete-building/tamplete-building.component';

//componentes
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NewComponent, TampleteBuildingComponent],
  template:`
    <h1> Curso Angular</h1>
    <app-tamplete-building/>
   
  `,

})
export class AppComponent {}


