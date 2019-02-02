import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    emp: Employee;
    qualification_list: string[];
    experience_list: string[];
    language_list: {
        name: string;
        isEnabled: boolean;
    }[];

    constructor() {
        this.emp=new Employee();
    }
    
    ngOnInit() {
        this.qualification_list = ["10th", "12th", "Graduate", "Post Graduate"];
        this.experience_list = ["Fresher", "6 Months", "1 Year", "> 1 Year"];
        this.language_list = [{ name: "C/C++", isEnabled: false }, { name: "Java", isEnabled: true }, { name: "C#", isEnabled: true }, { name: "PHP", isEnabled: false }, { name: "Python", isEnabled: false }];
        this.emp.languages=this.language_list;
    }
    toggleValue(lang: any): void {
        lang.isEnabled = !lang.isEnabled;
        this.emp.languages=this.language_list;
    }
    display(): void {
        console.log("Employee Details : ");
		console.log("First Name : " + this.emp.firstName);
		console.log("Last Name : " + this.emp.lastName);
		console.log("Email : " + this.emp.email);
		console.log("Contact Number : " + this.emp.contact);
		console.log("Address : " + this.emp.address);
		console.log("User Name : " + this.emp.username);
		console.log("Password : " + this.emp.password);
		console.log("Gender : " + this.emp.gender);
		console.log("Qualification : " + this.emp.qualification);
		console.log("Experience : " + this.emp.experience);
        console.log("Coding Languages : ");
        let i: number;
		for(i=0;i<this.emp.languages.length;i++) {
            if(this.emp.languages[i].isEnabled === true){
                console.log("  " + this.emp.languages[i].name);
            }
		}
    }
}
