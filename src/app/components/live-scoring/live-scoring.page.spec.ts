import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveScoringPage } from './live-scoring.page';

describe('LiveScoringPage', () => {
  let component: LiveScoringPage;
  let fixture: ComponentFixture<LiveScoringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveScoringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveScoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
