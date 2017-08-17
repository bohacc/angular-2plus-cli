import {Component} from '@angular/core';
import {TestService} from '../../services/test/test.service';

@Component({
  selector: 'app-testa',
  templateUrl: 'testa.template.html',
  providers: [TestService]
})

export class TestaComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = [
    'Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'
  ];
  nextMission = 0;

  constructor(private missionService: TestService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}
