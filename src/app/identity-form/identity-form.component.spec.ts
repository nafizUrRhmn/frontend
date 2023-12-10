import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityFormComponent } from './identity-form.component';

describe('IdentityFormComponent', () => {
  let component: IdentityFormComponent;
  let fixture: ComponentFixture<IdentityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityFormComponent]
    });
    fixture = TestBed.createComponent(IdentityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
