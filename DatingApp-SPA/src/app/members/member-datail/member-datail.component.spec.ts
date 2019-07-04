/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemberDatailComponent } from './member-datail.component';

describe('MemberDatailComponent', () => {
  let component: MemberDatailComponent;
  let fixture: ComponentFixture<MemberDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
