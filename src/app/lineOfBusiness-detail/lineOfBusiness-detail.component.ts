import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LineOfBusinessWithQuote } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';

@Component({
  selector: 'app-lineOfBusiness-detail',
  templateUrl: './lineOfBusiness-detail.component.html',
  styleUrls: ['./lineOfBusiness-detail.component.css'],
})
export class LineOfBusinessDetailComponent implements OnInit {
  lineOfBusiness: LineOfBusinessWithQuote | undefined;

  constructor(
    private route: ActivatedRoute,
    private lineOfBusinessService: LineOfBusinessService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getLineOfBusiness(routeParams.id);
    })
  }

  getLineOfBusiness(id: number): void {
    this.lineOfBusinessService
      .getLineOfBusinessWithQuote(id)
      .subscribe((lineOfBusiness) => (this.lineOfBusiness = lineOfBusiness));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.lineOfBusiness) {
      this.lineOfBusinessService
        .updateLineOfBusiness(this.lineOfBusiness)
        .subscribe(() => this.goBack());
    }
  }
}
