import {Directive, ElementRef, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeAll';

@Directive({
  selector: '[appAutosearch]'
})

export class AutosearchDirective {
  results: EventEmitter<Object[]> = new EventEmitter();
  // service: Echonest; //Our service that queries the Echonest API and returns Observables

  constructor(private elementRef: ElementRef
              // , service: Echonest
  ) {
    // this.service = service;
  }

  onInit() {
    Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
      .map(e => e['target'].value)
      .filter(text => text.length > 2)
      // .map(name => this.service.artistSearch(name))
      .mergeAll()
      .subscribe(data => this.results.next(data['response']['artists']));
  }
}
