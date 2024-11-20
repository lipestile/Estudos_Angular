import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NewComponent ],
  template:`
    <h1> Curso Angular</h1>
    <div class="theme-red">
      <app-new-component />
    </div>
  `,

})
export class AppComponent {}


