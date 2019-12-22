import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMangeComponent } from './item-mange.component';

describe('ItemMangeComponent', () => {
  let component: ItemMangeComponent;
  let fixture: ComponentFixture<ItemMangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
