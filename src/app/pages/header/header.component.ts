import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { option } from 'src/app/shared/Interface/option.model';
import { scaleAnimation } from 'src/app/shared/animation/animation';

import * as options from './options';
import { HeaderService } from './service/header.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
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

  routeLinkString: string = '';

  homeOptions: option[] = options.homeOptions;

  pagesOptions: option[] = options.pagesOptions;

  shopOptions: option[] = options.shopOptions;

  paidOptions: option[] = options.paidOptions;

  languageOptions: option[] = options.languageOptions;

  invert_colorsOptions: option[] = options.invert_colorsOptions;

  constructor(
    private translateService: TranslateService,
    private headerService: HeaderService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getCurrencyExchangerate();
    let lang = localStorage.getItem('lang');
    if (lang) this.changeLangage(lang);
    else this.changeLangage('en');
    let theme = localStorage.getItem('theme');
    if (theme) this.changeThemeCssFile(theme);
    else this.changeThemeCssFile('light');
    let currancy = localStorage.getItem('currency');
    setTimeout(() => {
      if (currancy) this.onCurrencyChange(currancy);
      else this.onCurrencyChange('USD');
    }, 500);


    //call currance on changes so the currancy pipe dont break on route changes
    //@ts-ignore
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event: NavigationStart) => {
      setTimeout(() => {
      let currancy = localStorage.getItem('currency');
      if (currancy) this.onCurrencyChange(currancy);
      else this.onCurrencyChange('USD');
      }, 500);
    });

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
    if (eventType === 'mouseover') this.showHoverDropdown = tap;
    else this.showHoverDropdown = '';
  }

  // for expanding options in mobile view
  onToggleDropdown(tap: string) {
    if (this.showToggleDropdown !== tap) this.showToggleDropdown = tap;
    else this.showToggleDropdown = '';
  }

  changeSelectedDesignstyle(value: string, options: option[]) {
    options.forEach((option) => {
      option.selected = false;
    });
    options.find((option) => option.value === value)!.selected = true;
  }

  // change language functions
  changeLangage(lang: string) {
    window.localStorage.setItem('lang', lang);
    let htmlTag = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeLangCssFile(lang);
    this.changeSelectedDesignstyle(lang, this.languageOptions);
  }

  changeLangCssFile(lang: string) {
    let headTag = document.getElementsByTagName('head')[0] as HTMLHeadElement;
    let existingLink = document.getElementById('langCss') as HTMLLinkElement;

    let bundleName = lang === 'ar' ? 'arabicStyle.css' : 'englishStyle.css';

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }

  // theming
  changeThemeCssFile(theme: string) {
    window.localStorage.setItem('theme', theme);
    let headTag = document.getElementsByTagName('head')[0] as HTMLHeadElement;
    let existingLink = document.getElementById('themeCss') as HTMLLinkElement;

    let bundleName =
      theme === 'dark' ? 'darkThemeStyle.css' : 'lightThemeStyle.css';

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'themeCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
    this.changeSelectedDesignstyle(theme, this.invert_colorsOptions);
  }

  // Currency change functions

  getCurrencyExchangerate() {
    this.headerService.getCurrencyExchangerate().subscribe((res: any) => {
      this.baseCurrency = res.base;
      this.currencyExchangerate = res.exchangerate;
    });
  }

  onCurrencyChange(currency: string) {
    window.localStorage.setItem('currency', currency);
    this.baseCurrency = currency;
    let exchangerate = this.currencyExchangerate[currency];
    this.headerService.currencyChanged.emit({ currency, exchangerate });
    this.changeSelectedDesignstyle(currency, this.paidOptions);
  }
}
