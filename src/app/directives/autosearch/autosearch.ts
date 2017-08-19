import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeAll';

@Directive({
  selector: '[autosearch]',
})

export class AutosearchDirective implements OnInit {
  @Output() results: EventEmitter<Object[]> = new EventEmitter();
  // service: Echonest; //Our service that queries the Echonest API and returns Observables

  constructor(private elementRef: ElementRef
              // , service: Echonest
  ) {
    // this.service = service;
  }

  ngOnInit() {
    console.log('Observable.fromEvent 00');
    this.onInit();
  }

  onInit() {
    console.log('Observable.fromEvent 0');
    Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
      .map(e => {
        // console.log(e);
        return e['target'].value;
      })
      .filter(text => {
        console.log(text);
        return text.length > 2;
      })
      // .map(name => this.service.artistSearch(name))
      // .mergeAll()
      .subscribe(data => {
        console.log('Observable.fromEvent');
        console.log(data);
        this.results.next(data);
        // this.results.next(data['response']['artists']);
      });
  }
}
