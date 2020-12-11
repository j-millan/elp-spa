import { Injectable } from '@angular/core';
import { Member } from '../member.interface';
import { PairMemberId } from '../pair-member-id.interface';

@Injectable()
export class MembersService {
  private members: Member[] = [
    {
      name: {
        first: 'Keith',
        last: 'Emerson',
      },
      bio:
        'Keith Noel Emerson was an English keyboardist, songwriter, and composer. He played keyboards in a number of bands before finding his first commercial success with the Nice in the late 1960s. He became internationally famous for his work with the Nice, which included writing rock arrangements of classical music. After leaving the Nice in 1970, he was a founding member of Emerson, Lake & Palmer (ELP), one of the early progressive rock supergroups.',
      birth: '1944-11-02',
      img: 'assets/img/keith-emerson.png',
    },
    {
      name: {
        first: 'Greg',
        last: 'Lake',
      },
      bio:
        'Gregory Stuart Lake was an English singer, songwriter, bassist, guitarist and record producer. He gained prominence as a founding member of the progressive rock bands King Crimson and Emerson, Lake & Palmer (ELP).',
      birth: '1947-11-10',
      img: 'assets/img/greg-lake.png',
    },
    {
      name: {
        first: 'Carl',
        last: 'Palmer',
      },
      bio:
        'Carl Frederick Kendall Palmer is an English drummer and percussionist, credited as one of the most respected rock drummers to emerge from the 1960s. He is a veteran of a number of famous English bands: the Crazy World of Arthur Brown, Atomic Rooster, Emerson, Lake & Palmer, and Asia.',
      birth: '1950-03-20',
      img: 'assets/img/carl-palmer.png',
    },
  ];

  constructor() {}

  getMembers(): Member[] {
    return this.members;
  }

  getMember(id: number): Member {
    if (id >= 0 && id < this.members.length) {
      return this.members[id];
    }
  }

  searchMembers(query: string): PairMemberId[] {
    const membersArray: PairMemberId[] = [];
    query = query.toLowerCase();

    for (let i=0; i<this.members.length; i++) {
      const member = this.members[i];
      if (member.name.first.toLowerCase().indexOf(query) > -1 ||
          member.name.last.toLowerCase().indexOf(query) > -1) {
          membersArray.push({ id: i, member: member });
      }
    }

    return membersArray;
  }
}
