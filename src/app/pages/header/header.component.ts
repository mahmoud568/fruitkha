import { Component, OnInit } from '@angular/core';

import { option } from 'src/app/shared/Interface/option.model';
import { scaleAnimation } from 'src/app/shared/animation/animation';

import { TranslateService } from  '@ngx-translate/core';
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";
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

  homeOptions: option[] = [
    {
      id: 1,
      title: 'Static Home',
      value: 'static'
    },
    {
      id: 2,
      title: 'Slider Home',
      value: 'slider'
    }
  ]

  pagesOptions: option[] = [
    {
      id: 1,
      title: '404 page',
      value: '404'
    },
    {
      id: 2,
      title: 'About',
      value: 'about'
    },
    {
      id: 3,
      title: 'Cart',
      value: 'cart'
    },
    {
      id: 4,
      title: 'Check Out',
      value: 'checkOut'
    },
    {
      id: 5,
      title: 'Contact',
      value: 'contact'
    },
    {
      id: 6,
      title: 'News',
      value: 'news'
    },
    {
      id: 7,
      title: 'Shop',
      value: 'shop'
    },

  ]


  shopOptions: option[] = [
    {
      id: 1,
      title: 'Shop',
      value: 'shop'
    },
    {
      id: 2,
      title: 'Check Out',
      value: 'checkOut'
    },
    {
      id: 3,
      title: 'Cart',
      value: 'cart'
    }
  ]

  paidOptions: option[] = [
    {
      id: 1,
      title: 'Egyptian Pound',
      value: 'Egyptian',
      selected: false
    },
    {
      id: 2,
      title: 'Dollar',
      value: 'Dollar',
      selected: true
    }
  ]

  languageOptions: option[] = [
    {
      id: 1,
      title: 'arabic',
      value: 'ar',
      selected: false
    },
    {
      id: 2,
      title: 'english',
      value: 'en',
      selected: true
    }
  ]

  invert_colorsOptions: option[] = [
    {
      id: 1,
      title: 'light',
      value: 'light',
      selected: true
    },
    {
      id: 2,
      title: 'dark',
      value: 'dark',
      selected: false
    }
  ]



  constructor(private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.changeLangage('en');
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

  changeLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName(
      "html"
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeCssFile(lang);
  }

  changeCssFile(lang: string) {
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
  // end of change language

}
