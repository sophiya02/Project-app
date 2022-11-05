import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ELEMENT_DATA, EmployeeElement } from 'src/resources/shared.resources';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  loggedIn: boolean = false;
  username_value: string = 'admin';
  password_value: string = 'admin';

  view: string = 'view_module'

 format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  
  dataSource = new MatTableDataSource<EmployeeElement>(ELEMENT_DATA);


  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('',  [Validators.required]),
  });

  employeeFormGroup = new FormGroup({
    id: new FormControl(Guid.create().toString()),
    name: new FormControl('', [Validators.required]),
    position: new FormControl('',  [Validators.required]),
    about: new FormControl('',  [Validators.required]),
    joining_date: new FormControl<Date>(new Date(),  [Validators.required]),
  });


  set employeeData(data : EmployeeElement | null) {
    console.log('data',data);
      this.employeeFormGroup.patchValue({
        id: data?.id,
        name: data?.name,
        position: data?.position,
        about: data?.about,
        joining_date: new Date(data?.joining_date as string)
      });

  }
  
  
  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.loggedIn=false;
   }

  loginFunction(){
    if(this.formGroup.value?.username === this.username_value && this.formGroup.value?.password === this.password_value)
    {
      this.loggedIn=true;
      this.router.navigate(['./employees']);
    }
    else
    {
        alert('incorrect username or password');
    }
    this.formGroup.get('username')?.reset();
    this.formGroup.get('password')?.reset();

  }
  loginLogoutFunction(){
    if(this.loggedIn) {
      this.loggedIn=false;
      this.router.navigate(['./employees']);
    }
    else{
      this.router.navigate(['./login']);
    }
  }

  

  onSave(){
    if(this.employeeFormGroup.valid)
    {
      
      localStorage.setItem(`employee_data_${this.employeeFormGroup.value.id}`, JSON.stringify(this.employeeFormGroup.value));

      let data = JSON.parse(localStorage.getItem(`employee_data_${this.employeeFormGroup.value.id}`) as string );
      data.joining_date = data.joining_date.toLocaleDateString();
      ELEMENT_DATA.unshift(data);

      this.router.navigate(['./employees'])

    }
    else
    alert('Please fill out the required details');
  }

  logAndRegister(){
    this.router.navigate(['/login']);
    return true;
  }
  onUpdate(id: string ){

    console.log('id',id);
      if(this.loggedIn) {
        this.router.navigate(['./register', id]);
        ELEMENT_DATA.forEach((v)=>{if(v.id === id) this.employeeData =  v}) ;
        console.log('employee_data', this.employeeData)
      }
      else{
        this.router.navigate(['./login']);
        this.view = 'view_list';
        
      }
  }

  onDelete(id: string){
    localStorage.removeItem(`employee_data_${id}`);
    for (var i = 0; i < ELEMENT_DATA.length; i++) {
      if (ELEMENT_DATA[i].id === id) {
          ELEMENT_DATA.splice(i, 1);
          break;
      }
  }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    if(this.format.test(filterValue)){
      console.log(true);
      this.router.navigate(['./error']);
    } else {
      console.log(false);
      this.router.navigate(['./employees']);
    }

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUsernameErrorMessage(){
    return this.formGroup.get('username')?.hasError('required') ? "This field is required" : '';  
  }

  getPasswordErrorMessage(){
    return this.formGroup.get('password')?.hasError('required') ? "This field is required" : '';  
  }

  getNameError(){
    return this.employeeFormGroup.get('name')?.hasError('required') ? "This field is required" : ''; 
  }
  getPositionError(){
    return this.employeeFormGroup.get('position')?.hasError('required') ? "This field is required" : ''; 
  }
  getAboutError(){
    return this.employeeFormGroup.get('about')?.hasError('required') ? "This field is required" : ''; 
  }
  getJoiningDateError(){
    return this.employeeFormGroup.get('joining_date')?.hasError('required') ? "This field is required" : ''; 
  }
}
