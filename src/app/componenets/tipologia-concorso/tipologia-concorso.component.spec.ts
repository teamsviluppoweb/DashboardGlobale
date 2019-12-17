import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipologiaConcorsoComponent } from './tipologia-concorso.component';

describe('TipologiaConcorsoComponent', () => {
  let component: TipologiaConcorsoComponent;
  let fixture: ComponentFixture<TipologiaConcorsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipologiaConcorsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipologiaConcorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
