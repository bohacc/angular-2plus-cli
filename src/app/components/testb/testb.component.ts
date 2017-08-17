import {Component, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {TestService} from '../../services/test/test.service';

@Component({
  selector: 'app-testb',
  templateUrl: 'testb.template.html'
})

export class TestbComponent implements OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: TestService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        console.log('mission');
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    console.log('ngOnDestroy');
    this.subscription.unsubscribe();
  }
}
