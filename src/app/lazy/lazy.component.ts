import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(
    public titleService: Title,
    public metaService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Lighthouse Test | Angular Static Lazy');
    this.metaService.updateTag({ name: 'description', content: 'Lighthouse Test | Angular Static Lazy' });
  }

}
