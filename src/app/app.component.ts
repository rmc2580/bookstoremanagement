import { Component, OnInit } from '@angular/core';
import { BookdataService } from './services/bookdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Book-Storemanagement';
  users: any;
  userdatas: any = [];
  constructor(private userData: BookdataService) { }

  getUserdata() {
    this.userData.users().subscribe((data) => {
      console.warn("data", data);
      this.users = data
    });
  }
  getUserFormData(data: any) {
    this.userData.saveUsers(data).subscribe((result) => {
      console.warn(result);
      this.userdatas = result;
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getUserdata()
  }
  deletebook(Users: any) {
    this.userData.deleteuser(Users).subscribe((result) => {
      console.warn("result", result)
    });
    this.getUserdata()
  }
}




