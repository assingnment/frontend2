import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactusdataService } from 'src/app/service/contactusdata.service';
import { Contactus } from 'src/app/contactus';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact:any; 
  contactus=new Contactus();

  constructor(private dataService:ContactusdataService) { }

  ngOnInit(): void {
    this.getAdmissionData();
  }
   getAdmissionData(){
     this.dataService.getData().subscribe(res => {
        this.contact = res;
     });
   }

   insertData(){
     this.dataService.insertData(this.contactus).subscribe(res =>{
       this.getAdmissionData();
     })
   }


  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email ]),
    mobile: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
   
  });


  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }



}
