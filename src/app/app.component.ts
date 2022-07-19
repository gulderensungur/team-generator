import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.memberName);
  }

  memberName: string = '';
  memberList: string[] = [];
  numberOfTeams: number | '' = '';
  teams: any[][] = [];

  errorMessage: string = '';

  addMember() {
    if (!this.memberName) {
      this.errorMessage = "Name can't be empty!";
      return;
    }
    this.errorMessage = '';
    this.memberList.push(this.memberName);
    this.memberName = '';
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      return;
    }

    const allMembers = [...this.memberList];

    for (let i = 0; i < this.numberOfTeams; i++) {
      const randomIndex = Math.floor(Math.random() * allMembers.length);
      const member = allMembers.splice(randomIndex, 1)[0];

      if (this.teams[i]) {
        this.teams[i].push(member);
      } else {
        this.teams[i] = [member];
      }
    }
    console.log(this.teams);
  }
}
