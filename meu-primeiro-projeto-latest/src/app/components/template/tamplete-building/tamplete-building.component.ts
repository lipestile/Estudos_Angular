import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tamplete-building',
  standalone: true,
  imports: [CommonModule, NgClass, NgStyle, FormsModule],
  templateUrl: './tamplete-building.component.html',
  styleUrl: './tamplete-building.component.scss'
})
export class TampleteBuildingComponent {
    public name = "Felipe Carvalho";
    public age = 32;

    public condition = this.age < 1 ? "Teste" : "Teste2"

    public isDisable = true;

    public srcValue = 'https://th.bing.com/th/id/R.70b15887926051cbdbc4d2f8a33f568c?rik=0tWnvyCpS0ljhw&pid=ImgRaw&r=0';

    // constructor(){
    //   setTimeout( () => {
    //     this.name = " João e Maria"
    //   }, 1000)
    // }
    
    public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

    public sum(){
      return this.age++;
    }
    public sub(){
      return this.age--;
    }

    public onKeyDown(event: Event){
      return console.log(event);
    }

    public onMouseMove(event: MouseEvent){
      return console.log({
        ClietX: event.clientX,
        ClietY: event.clientY,
      });
    }


}
