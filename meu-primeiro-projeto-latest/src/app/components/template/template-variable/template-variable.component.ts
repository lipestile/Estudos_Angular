import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variable',
  imports: [CommonModule, NewComponent],
  templateUrl: './template-variable.component.html',
  styleUrl: './template-variable.component.scss'
})
export class TemplateVariableComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;
  @ViewChild(NewComponent) public newComponent!: ElementRef;

  ngAfterViewInit(){
    console.log(this.nameInput.nativeElement.value)
    console.log(this.nameH2.nativeElement.innerHTML)
  }

  
}
