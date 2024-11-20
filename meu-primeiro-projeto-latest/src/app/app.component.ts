import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet ],
  template:  `
  <h1> Curso Angular</h1>
  <h2>Componenetes</h2>

  
  `,

})
export class AppComponent {}


