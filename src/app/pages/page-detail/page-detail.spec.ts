import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COURS, Cours } from '../../donnees/cours';
import { DetailCoursComponent } from '../../composants/detail-cours/detail-cours';

@Component({
  selector: 'app-page-detail',
  imports: [DetailCoursComponent, RouterLink],
  templateUrl: './page-detail.html',
  styleUrl: './page-detail.css',
})
export class PageDetail {

  @Input() id = '';

  get cours(): Cours | undefined {
    return COURS.find(c => c.id === Number(this.id));
  }
}
