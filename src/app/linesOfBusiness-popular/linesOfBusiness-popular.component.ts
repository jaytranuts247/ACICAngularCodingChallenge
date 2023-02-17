import { Component, OnInit } from '@angular/core';
import { LineOfBusinessService } from '../lineOfBusiness.service';
import { LineOfBusinessWithQuote } from '../LineOfBusiness';

@Component({
  selector: 'app-linesOfBusiness-popular',
  templateUrl: './linesOfBusiness-popular.html',
  styleUrls: ['./linesOfBusiness-popular.css'],
})
export class PopularLineOfBusinessComponent implements OnInit {
  popularLineOfBusiness: LineOfBusinessWithQuote[] = [];

  constructor(private lineOfBusinessService: LineOfBusinessService) {}

  ngOnInit(): void {
    this.getPopularLineOfBusiness();
  }

  getPopularLineOfBusiness() {
    this.lineOfBusinessService
      .getPopularLineOfBusiness()
      .subscribe((pLobs) => (this.popularLineOfBusiness = pLobs.slice(0, 2)));
  }
}
