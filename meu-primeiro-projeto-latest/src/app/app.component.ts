import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TampleteBuildingComponent } from './components/template/tamplete-building/tamplete-building.component';
import { TemplateVariableComponent } from './components/template/template-variable/template-variable.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

//componentes
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NewComponent, TampleteBuildingComponent, TemplateVariableComponent, TemplateControlFlowComponent],
  template:`
    <h1> Curso Angular</h1>
    <app-template-control-flow/>
   
  `,

})
export class AppComponent {}


