import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TestService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  private obs: BehaviorSubject<User> = BehaviorSubject.create();

  // Observable string streams
  public missionAnnounced$: Observable<string> = this.missionAnnouncedSource.asObservable();
  public missionConfirmed$: Observable<string> = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    console.log('announceMission');
    console.log(mission);
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

  public getObs(): BehaviorSubject<User> {
    return this.obs;
  }

  public setObs(user: User) {
    this.obs.next(user);
  }
}
