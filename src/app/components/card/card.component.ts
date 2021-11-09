import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardTitle = '-';
  @Input() count = 0;
  @Input() change = 0;
  @Input() iconBgClass = 'bg-red-500';
  @Input() iconClass = 'fa-procedures';

  constructor() {}

  ngOnInit(): void {}
}
