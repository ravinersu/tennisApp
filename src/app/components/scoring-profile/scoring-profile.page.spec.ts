import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScoringProfilePage } from './scoring-profile.page';

describe('ScoringProfilePage', () => {
  let component: ScoringProfilePage;
  let fixture: ComponentFixture<ScoringProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoringProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoringProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
