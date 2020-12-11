import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MembersService } from 'src/app/services/members.service';

import { Member } from 'src/app/member.interface';
import { PairMemberId } from 'src/app/pair-member-id.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['../members/members.component.css']
})
export class SearchResultsComponent implements OnInit {

  results: PairMemberId[] = [];
  query: string;

  constructor(
    private membersService: MembersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.results = this.membersService.searchMembers(params.query);
      this.query = params.query;
    })
  }
}