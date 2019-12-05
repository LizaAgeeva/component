import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksExampleComponent } from './hooks-example.component';

describe('HooksExampleComponent', () => {
  let component: HooksExampleComponent;
  let fixture: ComponentFixture<HooksExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooksExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
