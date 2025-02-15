import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

  // Méthode pour récupérer les données
  getData() {
    return this.data;
  }
// Méthode pour éditer un élément
editItem(item: any): void {
  alert(`Éditer : ${item.name}`);
}

// Méthode pour supprimer un élément
deleteItem(item: any): void {
  this.data = this.data.filter((i) => i.id !== item.id);
  //des backticks `
  alert(`Supprimer : ${item.name}`);
}
}
