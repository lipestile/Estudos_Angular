import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TampleteBuildingComponent } from './tamplete-building.component';

describe('TampleteBuildingComponent', () => {
  let component: TampleteBuildingComponent;
  let fixture: ComponentFixture<TampleteBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TampleteBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TampleteBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
