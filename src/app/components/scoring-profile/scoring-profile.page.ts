import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
} 

interface setsMatch {
  value: string;
  viewValue: string;
}

interface gamesMatch {
  value: string;
  viewValue: string;
}

interface standardTieBreak {
  value: string;
  viewValue: string;
}

interface tieBreakPoints {
  value: string;
  viewValue: string;
}

interface tieBreakPoints {value: string; viewValue: string; }

interface finalSetRule {value: string; viewValue: string; }



@Component({
  selector: 'app-scoring-profile',
  templateUrl: './scoring-profile.page.html',
  styleUrls: ['./scoring-profile.page.scss'],
})
export class ScoringProfilePage implements OnInit {
form: FormGroup;
foods: Food[] = [
  {value: '0', viewValue: '1'},
  {value: '1', viewValue: '2'},
  {value: '2', viewValue: '3'}

];

setPerMatch: setsMatch[] = [
  {value: '0', viewValue: '1'},
  {value: '1', viewValue: '2'},
  {value: '2', viewValue: '3'}
];

gamesMatch: gamesMatch[] = [
  {value: '0', viewValue: '1'},
  {value: '1', viewValue: '2'},
  {value: '2', viewValue: '3'},
  {value: '3', viewValue: '4'},
  {value: '4', viewValue: '5'},
  {value: '5', viewValue: '6'},
  {value: '6', viewValue: '7'},
  {value: '7', viewValue: '8'},
  {value: '8', viewValue: '9'},
  {value: '9', viewValue: '10'},
  {value: '10', viewValue: '11'},
  {value: '11', viewValue: '12'},
  {value: '12', viewValue: '13'},
  {value: '13', viewValue: '14'},
  {value: '14', viewValue: '15'},
  {value: '15', viewValue: '16'},
  {value: '16', viewValue: '17'},
  {value: '17', viewValue: '18'},
  {value: '18', viewValue: '19'},
];

standardTieBreakRule: standardTieBreak[] = [
  {value: '0', viewValue: 'Tie Break at 6-6'},
  {value: '1', viewValue: 'Tie Break at 5-5'},
  {value: '2', viewValue: 'Sudden Death(no Tie Break)'}
];

TieBreakPoints: tieBreakPoints[] =[
  {value: '0', viewValue: '2'},
  {value: '1', viewValue: '3'},
  {value: '2', viewValue: '4'},
  {value: '3', viewValue: '5'},
  {value: '4', viewValue: '6'},
  {value: '5', viewValue: '7'},
  {value: '6', viewValue: '8'},
  {value: '7', viewValue: '9'},
  {value: '8', viewValue: '10'},
  {value: '9', viewValue: '11'},
  {value: '10', viewValue: '12'},
  {value: '11', viewValue: '13'},
  {value: '12', viewValue: '14'},
  {value: '13', viewValue: '15'},
  {value: '14', viewValue: '16'},
  {value: '15', viewValue: '17'},
  {value: '16', viewValue: '18'},
  {value: '17', viewValue: '19'},
  {value: '18', viewValue: '20'},
  {value: '19', viewValue: '21'},
  
];

FinalSetRule: finalSetRule[] =[
  {value: '0', viewValue: 'Standard Tie-break'},
  {value: '1', viewValue: 'No Tie-break'},
  {value: '2', viewValue: 'N-Point Tie-break'}
];
constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      profileName: new FormControl(null, { updateOn:'blur', validators:[Validators.required] })
    })
  }


  reset() {
    console.log('IN reset!')
    this.form.reset();
  }

}

