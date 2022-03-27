import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FooterService } from './service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  email: string = "";

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
  }

  onSubscribe(f: NgForm) {
    console.log(f.value)
    this.footerService.onSubscribe(f.value).subscribe(res => console.log(res));
  }
}
