import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.template.html',
})

export class HomeComponent {
  artists: string[] = [];
  data: string = 'dasfa <div>  asdf asdf asdf <script type="javascript">alert(9);</script>';
  constructor (private router: Router) {}

  getArtists(data) {
    this.artists.push(data);
  }

  public test() {
    // this.router.navigate(['/page1?id=1'], {queryParams: {id: [1, 2]}}); // error
    // this.router.navigate(['/page1'], {queryParams: {id: [1, 2]}}); // success /page1?id=1&id=2
    // this.router.navigateByUrl('/page1', {queryParams: {id: [1, 2]}}); // success ignore extra params /page1
    this.router.navigateByUrl('/page1?id=1'); // success without extra params, ignore delta /page1?id=1
    // this.router.navigate(['/page1']); // success /page1
  }
}
