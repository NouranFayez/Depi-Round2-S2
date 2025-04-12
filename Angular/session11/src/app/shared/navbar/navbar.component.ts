import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private translateService: TranslateService) {

  }


  handleLang(lang: any) {
    this.translateService.use(lang)

    let link: any = document.getElementById('bootstrapCss')
    let htmlTag = document.documentElement
    if (lang == 'ar') {
      link.href = './styles/bootstrap.rtl.min.css'
      htmlTag.dir = 'rtl'
      htmlTag.lang = 'ar'

    }
    else {
      link.href = './styles/bootstrap.min.css'
      htmlTag.dir = 'ltr'
      htmlTag.lang = 'en'
    }
  }

}
