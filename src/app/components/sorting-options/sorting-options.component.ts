import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting-options',
  templateUrl: './sorting-options.component.html',
  styleUrls: ['./sorting-options.component.scss']
})
export class SortingOptionsComponent {
  @Output() sortChange = new EventEmitter<string>();

  onSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const sortOption = selectElement.value || ''; 
    this.sortChange.emit(sortOption);
  }
}
