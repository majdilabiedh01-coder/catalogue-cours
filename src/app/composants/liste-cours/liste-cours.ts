
import { Cours, COURS } from '../../donnees/cours';
import { UpperCasePipe } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-cours',
  imports: [
    FormsModule,
    FiltreCoursPipe,
    TriCoursPipe,
    UpperCasePipe,
    RouterLink
  ],
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCoursComponent {

  cours: Cours[] = COURS;

  recherche = '';
  tri: 'asc' | 'desc' = 'asc';

  @Output() coursSelectionne = new EventEmitter();

  coursActif: Cours | null = null;

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }
}
