import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {
  constructor(
    public titleService: Title,
    public metaService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Lighthouse Test | Angular Static Direct');
    this.metaService.updateTag({ name: 'description', content: 'Lighthouse Test | Angular Static Direct' });
  }
}
