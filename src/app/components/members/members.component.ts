import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/member.interface';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = new Array<Member>();

  constructor(
    private membersService: MembersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }

  goToMember(id: number): void {
    this.router.navigate(['member', id]);
  }
}
