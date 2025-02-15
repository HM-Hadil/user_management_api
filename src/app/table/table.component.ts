import { Component, Pipe } from '@angular/core';
import { DataService } from '../data.service';
import { pipe } from 'rxjs/internal/util/pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  constructor(private dataService: DataService) {}
 // Utilisez la méthode du service pour récupérer les données

 get data() {
  return this.dataService.getData();
}


   // Méthode pour éditer un élément
   editItem(item: any): void {
    this.dataService.editItem(item);
  }
//.filter() : Méthode JavaScript qui crée un nouveau tableau en ne conservant que les éléments qui satisfont une condition donnée.
  // Méthode pour supprimer un élément
  deleteItem(item: any): void {
    this.dataService.deleteItem(item);
  }

}
