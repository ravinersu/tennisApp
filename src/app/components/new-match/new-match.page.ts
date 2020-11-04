import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



interface Player {
  name: string;
  
}


@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.page.html',
  styleUrls: ['./new-match.page.scss'],
})
export class NewMatchPage implements OnInit {
  matchForm: FormGroup;
  newMatchForm: FormGroup;
 

// Basic and Advance radio buttons Ends
  selectType: string;
  selectTypeBasicAdvance: string[]= ['Basic', 'Advance'];
// Basic and Advance radio buttons Ends

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  Player: Player[] = [
    
 
  ]
  @ViewChild('mySelect') mySelect;
 
  constructor(private router: Router) { }

  ngOnInit() {
  this.matchForm = new FormGroup ({
    
    title: new FormControl(null,{
      updateOn: 'blur',
      validators: [Validators.required]
    }),
    
    description: new FormControl(null, {
      validators: [Validators.required, Validators.maxLength(180)]
    }),
    
    price: new FormControl (null, {
      updateOn:'blur',
      validators: [Validators.required, Validators.min(1)]
    }) ,
    
    dateForm: new FormControl(null, {
      updateOn:'blur',
      validators:[Validators.required]
    }),
    
    dateTo: new FormControl (null, {
      validators:[Validators.required]
    })
  })
  

  //  new match form starts

  // this.newMatchForm = new FormGroup({
  //   playerOne: new FormControl(null, [Validators.required]),
  //   playerTwo: new FormControl(null, [Validators.required]),
  //   scoringProfile: new FormControl(null, [Validators.required]),
  //   playerOneGender: new FormControl(null, [Validators.required]),
  //   playerTwoGender: new FormControl(null),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   phoneNumber: new FormControl(null),
  //   scoringType: new FormArray([])
  // });

  //  new match form ends

  }


  addNewMatch() {
    console.log('Add new match form', this.newMatchForm);
    console.log('------------- Add new match form value --------------', this.newMatchForm.value);
  }


  redirectToMatch() {
    this.mySelect.close();
    console.log('close', this.mySelect);
    setTimeout( () => {
      console.log('hide');
      this.navigate();
   }, 100)

  }

  redirectToScoringProfile() {
    this.mySelect.close();
    console.log('close', this.mySelect);
    setTimeout( () => {
      console.log('hide');
      this.navigateToScoringProfile();
   }, 100)

  }

  navigateToScoringProfile() {
    this.router.navigate(['/scoring-profile'])
  }

  navigate() {
    this.router.navigate(['/add-new-player']);
  
  }

}
