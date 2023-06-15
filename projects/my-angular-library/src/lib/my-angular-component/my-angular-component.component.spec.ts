import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAngularComponentComponent } from './my-angular-component.component';

describe('MyAngularComponentComponent', () => {
  let component: MyAngularComponentComponent;
  let fixture: ComponentFixture<MyAngularComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAngularComponentComponent]
    });
    fixture = TestBed.createComponent(MyAngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
