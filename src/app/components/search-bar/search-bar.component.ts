import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchTerm: string = '';
  @Output() searchChange = new EventEmitter<string>();

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement | null; 
    
    if (target) {
      const searchTerm = target.value; 
      this.searchChange.emit(searchTerm);  
    }
  }
 }
