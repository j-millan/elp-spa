import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Member } from 'src/app/member.interface';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member: Member;

  constructor(
    private membersService: MembersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      const id = +params.id;
      this.member = this.membersService.getMember(id);
    })
  }

  goBack(): void {
    this.router.navigate(['/members']);
  }
}
