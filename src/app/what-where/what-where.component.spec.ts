import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWhereComponent } from './what-where.component';

describe('WhatWhereComponent', () => {
  let component: WhatWhereComponent;
  let fixture: ComponentFixture<WhatWhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
