import { Component, Input, OnInit } from '@angular/core';
import { TestService } from '../../services/test/test.service';

@Component({
  selector: 'app-child2',
  templateUrl: 'child2.template.html'
})

export class Child2Component implements OnInit {
  constructor(private testService: TestService) {}

  ngOnInit() {
    console.log('child2 onInit');
    this.testService.setObs({name: 'Martin Boháč'});
  }
}
