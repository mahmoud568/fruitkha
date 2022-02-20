import { Component, OnInit } from '@angular/core';
import { TranslateService } from  '@ngx-translate/core';
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";

import { option } from 'src/app/shared/Interface/option.model';
import { scaleAnimation } from 'src/app/shared/animation/animation';

import * as options from './options';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from './service/header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [scaleAnimation],
})
export class HeaderComponent implements OnInit {
  isMenuBarOpen!: boolean;
  showHoverDropdown: string = '';
  showToggleDropdown: string = '';
  baseCurrency!: string;
  currencyExchangerate!: any;
  homeOptions: option[] = options.homeOptions;

  pagesOptions: option[] = options.pagesOptions;

  shopOptions: option[] = options.shopOptions;

  paidOptions: option[] = options.paidOptions;

  languageOptions: option[] = options.languageOptions;

  invert_colorsOptions: option[] = options.invert_colorsOptions;

  constructor(private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.changeLangage('en');
    this.changeThemeCssFile('light');
    this.getCurrencyExchangerate();

  }

  // @ViewChild('navbar') navbar!: ElementRef;
  // @HostListener("window:scroll", []) onWindowScroll() {
  //   // do some stuff here when the window is scrolled
  //   const verticalOffset = window.pageYOffset
  //         || document.documentElement.scrollTop
  //         || document.body.scrollTop || 0;
  //   if(verticalOffset != 0) this.navbar.nativeElement.classList.add('scrolled');
  //   else this.navbar.nativeElement.classList.remove('scrolled');
  // }

  openMenuBar() {
    this.isMenuBarOpen = !this.isMenuBarOpen;
  }

  onHoverDropdown(tap: string, eventType: string) {
    if(eventType === 'mouseover') this.showHoverDropdown = tap;
    else this.showHoverDropdown = '';
  }

  onToggleDropdown(tap: string, eventType: string) {
    if(this.showToggleDropdown !== tap) this.showToggleDropdown = tap;
    else this.showToggleDropdown = '';
  }

  onOptionSelect(event: any) {
    console.log(event)
  }

  changeSelectedDesignstyle(option: option, options: option[]) {
      options.forEach((option) => {
        option.selected = false;
      });
      option.selected= true;
  }

  // change language functions
  changeLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName(
      "html"
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeLangCssFile(lang);
  }

  changeLangCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName(
      "head"
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      "langCss"
    ) as HTMLLinkElement;

    let bundleName = lang === "ar" ? "arabicStyle.css" : "englishStyle.css";

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = this.document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.type = "text/css";
      newLink.id = "langCss";
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }

  // theming
  changeThemeCssFile(theme: string) {
    let headTag = this.document.getElementsByTagName(
      "head"
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      "themeCss"
    ) as HTMLLinkElement;

    let bundleName = theme === "dark" ? "darkThemeStyle.css" : "lightThemeStyle.css";

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = this.document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.type = "text/css";
      newLink.id = "themeCss";
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }

  // Currency change functions

  getCurrencyExchangerate() {
    this.headerService.getCurrencyExchangerate().subscribe(
      (res: any)=> {
        this.baseCurrency = res.base;
        this.currencyExchangerate = res.exchangerate;
        // initialize currancy
        this.onCurrencyChange('USD');
      }
      );
  }

  onCurrencyChange(currency: string) {
    this.baseCurrency = currency;
    let exchangerate = this.currencyExchangerate[currency];
    this.headerService.currencyChanged.emit({currency, exchangerate});
  }
}
