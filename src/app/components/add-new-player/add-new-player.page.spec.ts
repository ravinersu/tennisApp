import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewPlayerPage } from './add-new-player.page';

describe('AddNewPlayerPage', () => {
  let component: AddNewPlayerPage;
  let fixture: ComponentFixture<AddNewPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPlayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
