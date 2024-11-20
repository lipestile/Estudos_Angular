import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tamplete-building',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tamplete-building.component.html',
  styleUrl: './tamplete-building.component.scss'
})
export class TampleteBuildingComponent {
    public name = "Felipe Carvalho";
    public age = 22;

    public condition = this.age < 1 ? "Teste" : "Teste2"
    
    public sum( val1: number, val2: number){
      return val1 + val2;
    }
}
