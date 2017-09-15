import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { User } from '../../services/user/user.interface';

@Component({
  selector: 'app-child-node',
  templateUrl: 'child-node.template.html',
  /*changeDetection: ChangeDetectionStrategy.OnPush*/
})

export class ChildNodeComponent implements OnInit, OnChanges {
  @Input() public user: User;
  @Input() public str: string;

  constructor(private cd: ChangeDetectorRef) {
    console.log('NodeChild - constructor');
    console.log(this.user);
  }

  ngOnChanges(changes) {
    console.log('NodeChild - onChnages');
    console.log(changes);
  }

  ngOnInit() {
    console.log('NodeChild - onInit');
    console.log(this.user);
    // this.refresh();
  }

  private refresh() {
    /*setTimeout(() => {
      console.log('refresh - 5000');
      this.cd.detectChanges();
    }, 10000);*/
  }
}
