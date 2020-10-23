import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService} from '../../api.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.scss']
})
export class SecondpageComponent implements OnInit {

  id;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private api : ApiService,
    private route :Router,
    

  ) {
    this.router.params.subscribe(params => {
      console.log(params['id']) ;
      this.id = params['id'];
    });
   }
//    $(function () {
//     $('#datetimepicker1').datetimepicker();
// });

  Form: FormGroup;

  ngOnInit(): void {
    this.Form = this.fb.group({
      intrests: new FormControl(null, [Validators.required]),
      Date: new FormControl(null, [Validators.required]),    
    
    });
    //this.api.FormData(this.firstpage_obj);

  }

  sendData(){
   let  formdata = this.Form.value;
    let data = {
      id: this.id,
      intrests: formdata.intrests,
      Date: formdata.Date,
    }
    console.log(data)
    this.api.SecondForm(data).subscribe(res => {
      console.log(res);
    })
    this.route.navigateByUrl('/thankyou');

  }

}
