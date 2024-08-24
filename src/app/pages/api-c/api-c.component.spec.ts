import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCComponent } from './api-c.component';

describe('ApiCComponent', () => {
  let component: ApiCComponent;
  let fixture: ComponentFixture<ApiCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
