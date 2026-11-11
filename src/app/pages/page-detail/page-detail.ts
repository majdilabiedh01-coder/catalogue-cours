
import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DetailCours } from '../../composants/detail-cours/detail-cours';
import { Cours, COURS } from '../../donnees/cours';

@Component({
  imports: [DetailCours, RouterLink],
  selector: 'app-page-detail',
  styleUrl: './page-detail.css',
  templateUrl: './page-detail.html',
})
export class PageDetail {
  cours: Cours | null = null;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.cours = COURS.find(c => c.id === id) ?? null;
  }
}
