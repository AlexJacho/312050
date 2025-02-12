import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-despre-proiect',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HeaderComponent, RouterLinkWithHref, CommonModule,],
  templateUrl: './despre-proiect.component.html'
})
export class DespreProiectComponent {

}

