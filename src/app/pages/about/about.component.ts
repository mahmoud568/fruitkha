import { Component, OnInit } from '@angular/core';

import { farmer } from 'src/app/shared/Interface/farmer.model';
import { fruit } from 'src/app/shared/Interface/fruit.model';
import { team } from 'src/app/shared/Interface/team.model';
import { AboutService } from './service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  saleFruit!: fruit;
  farmers: farmer[] = [];
  team: team[] = [];
  lang: string | null = '';

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.getSaleFruit();
    this.getFarmers();
    this.getTeam();
  }

  ngDoCheck() {
    this.lang = localStorage.getItem('lang');
  }

  getSaleFruit() {
    this.aboutService.getSaleFruit().subscribe((res: any) => {
      this.saleFruit = res.saleFruit;
    });
  }

  getFarmers() {
    this.aboutService.getFarmers().subscribe((res: any) => {
      this.farmers = res.farmers;
    });
  }

  getTeam() {
    this.aboutService.getTeam().subscribe((res: any) => {
      this.team = res.team;
    });
  }
}
