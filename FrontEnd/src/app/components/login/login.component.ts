import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admission } from 'src/app/admission';
import { AdmissiondataService } from 'src/app/service/admissiondata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admissions:any; 
  admission=new Admission();
  

  constructor (private dataService:AdmissiondataService){ }

  ngOnInit(): void {
    this.getAdmissionData();
  }
   getAdmissionData(){
     this.dataService.getData().subscribe(res => {
        this.admissions = res;
     });
   }

   insertData(){
     this.dataService.insertData(this.admission).subscribe(res =>{
       this.getAdmissionData();
     })
   }

  registerForm = new FormGroup({
    fullname: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email ]),
    mobile: new FormControl("", [Validators.required]),
  });

  get FullName(): FormControl{
    return this.registerForm.get("fullname") as FormControl;
  }

  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }


}
