import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadoneComponent } from './readone.component';

describe('ReadoneComponent', () => {
  let component: ReadoneComponent;
  let fixture: ComponentFixture<ReadoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
