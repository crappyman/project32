import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPageEmailComponent } from './reset-page-email.component';

describe('ResetPageEmailComponent', () => {
  let component: ResetPageEmailComponent;
  let fixture: ComponentFixture<ResetPageEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPageEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPageEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
