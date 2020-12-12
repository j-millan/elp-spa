import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Member } from 'src/app/member.interface';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Output() selectedMember: EventEmitter<number>;

  @Input() member: Member;
  @Input() id: number;

  constructor(
    private router: Router
  ) { 
    this.selectedMember = new EventEmitter();
  }

  ngOnInit(): void {
  }

  goToMember(): void {
    this.router.navigate(['member', this.id]);
    // this.selectedMember.emit(this.id);
  }
}
