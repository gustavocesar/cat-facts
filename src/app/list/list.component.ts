import { Component, OnInit } from '@angular/core';
import { Fact } from 'src/models/fact';
import { FactsService } from '../../services/facts-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [FactsService],
})
export class ListComponent implements OnInit {
  constructor(private factsService: FactsService) {}

  facts: Fact[] = [];

  ngOnInit(): void {
    this.getFacts();
  }

  getFacts(): void {
    this.factsService.getFacts().subscribe((facts) => {
      this.facts = facts;
    });
  }
}
