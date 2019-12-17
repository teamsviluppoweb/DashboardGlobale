import { Component, OnInit } from '@angular/core';
import {faqData} from '../../static-data/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq;

  constructor() {
    this.faq = faqData;
  }

  ngOnInit() {
  }

}
