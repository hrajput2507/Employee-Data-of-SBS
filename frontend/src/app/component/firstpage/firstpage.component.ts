import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService} from '../../api.service';


@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api : ApiService,
    ) { }


  Form: FormGroup;
  ngOnInit(): void {
    this.Form = this.fb.group({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),    
      phone :  new FormControl(null),
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    });
    //this.api.FormData(this.firstpage_obj);

  }
  sendData(){
    console.log(this.Form.value);
    this.api.FormData(this.Form.value).subscribe(res => {
      console.log(res._id);
      this.nextformdata(res._id);
    })
  }
  nextformdata(id) {
    this.router.navigateByUrl(`/secondpage/${id}`);
  }
}