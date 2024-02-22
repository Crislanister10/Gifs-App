import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { GifsService } from '../../../services/gifsservice.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifts.."
    (keyup.enter)="searchTag()" 
    #txtTagInput
    >
    
  `
   
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')

  public tagInput! : ElementRef<HTMLInputElement>

  constructor(private  _gifsService: GifsService){

  }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value
    this._gifsService.searchTag(newTag)
    this.tagInput.nativeElement.value=""
    
  }
}
