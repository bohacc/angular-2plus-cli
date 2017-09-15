import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { User } from '../../services/user/user.interface';
import { TestService } from '../../services/test/test.service';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-child',
  templateUrl: 'child.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnInit {
  public user: User;
  public str: string;
  constructor(
    private testService: TestService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    setTimeout(() => {
      console.log('ngOnInit setTimeout');
      console.log(this.testService.getObs());
      this.testService.getObs()
        .delay(1000)
        .subscribe((user: User) => {
          console.log('subscribe User');
          this.user = user;
          this.str = 'XXXXXXXXXXX';
          this.cd.markForCheck();
        },
        (e) => {
          console.log(e);
        });
    }, 1000);
    // this.str = 'AAAAAAAAAAAAAAAAAA';
    /*setTimeout(() => {
      console.log('timer 5000');
      // this.str = 'XXXXXXXXXXXXXXX';
      // this.user.name = 'TEST';
      // this.cd.markForCheck();
      this.user = {name: 'Nová'};
      // this.cd.markForCheck();
    }, 5000);*/
  }

  test() {
    //this.str = 'XXXXXXXXXXXXXXXAAAA';
    console.log(this.user);
    console.log(this.str);
  }
}
