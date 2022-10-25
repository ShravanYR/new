import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

   users:User[]=[];

  constructor(private testservice :TestService) { }

  ngOnInit(): void {
  }

  printuesrs(event:any){
     this.testservice.getUsersData().subscribe(users=>{
      this.users=users;
     })
  }

}
