import { Component } from '@angular/core';
import { LineOfBusiness } from './LineOfBusiness';
import { LineOfBusinessService } from './lineOfBusiness.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Agency Authority - Insurance Coverages Allowed to be Rated';
  linesOfBusiness: LineOfBusiness[] = [];

  constructor(private lineOfBusinessService: LineOfBusinessService) {}

  ngOnInit(): void {
    this.getPopularLineOfBusiness();
  }
  // getLinesOfBusiness(): void {
  //   this.lineOfBusinessService
  //     .getLinesOfBusiness()
  //     .subscribe(
  //       (linesOfBusiness) =>
  //         (this.linesOfBusiness = linesOfBusiness.slice(1, 3))
  //     );
  // }
  // getMostPopularLineOfBusiness(): void {
  //   this.lineOfBusinessService
  //     .getMostPopularLineOfBusiness()
  //     .subscribe((quotes) => (this.quotes = quotes));
  //   console.log(this.quotes);
  // }

  // async getPopularLineOfBusiness() {
  //   this.linesOfBusiness = await (
  //     await this.lineOfBusinessService.getMostPopularLineOfBusiness()
  //   ).slice(0, 2);
  // }

  getPopularLineOfBusiness() {
    this.lineOfBusinessService
      .getPopularLineOfBusiness()
      .subscribe((pLobs) => (this.linesOfBusiness = pLobs.slice(0, 2)));
  }
}
