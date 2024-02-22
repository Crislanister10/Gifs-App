import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifsservice.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private _gitServices : GifsService){

  }

  get tags(){
    return this._gitServices.tagsHistory
  }
  searchTag(tag :string){
    return this._gitServices.searchTag(tag)
  }
}
