import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lazy-load-button',
  templateUrl: './lazy-load-button.component.html',
  styleUrls: ['./lazy-load-button.component.scss']
})
export class LazyLoadButtonComponent {

  @Input() isLoading: boolean = false;  
  @Input() hasMoreData: boolean = true; 
  @Output() loadMore = new EventEmitter<void>(); 

  onLoadMore(): void {
    this.loadMore.emit();
  }


}
