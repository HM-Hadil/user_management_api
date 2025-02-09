import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

  // Méthode pour éditer un élément
  editItem(item: any): void {
    alert(`Éditer : ${item.name}`);
  }

  // Méthode pour supprimer un élément
  deleteItem(item: any): void {
    this.data = this.data.filter((i) => i.id !== item.id);
    alert(`Supprimer : ${item.name}`);
  }
}
