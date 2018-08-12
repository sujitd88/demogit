import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { listComponent } from './list.component';

describe('addUserComponent', () => {
  let component: listComponent;
  let fixture: ComponentFixture<listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
