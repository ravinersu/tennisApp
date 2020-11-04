import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-player',
  templateUrl: './add-new-player.page.html',
  styleUrls: ['./add-new-player.page.scss'],
})
export class AddNewPlayerPage implements OnInit {
form:FormGroup;


  constructor() { }

  ngOnInit() { 
    this.form = new FormGroup({
      nameOfthePlayer: new FormControl(null, { updateOn:'blur', validators: [Validators.required] }),

      email: new FormControl(null,{ updateOn: 'blur'})
})
  }


reset() {
  console.log('IN reset!')
  this.form.reset();
}
  }

