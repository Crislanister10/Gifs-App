import { Component } from '@angular/core';
import { GifsService  } from '../../services/gifsservice.service';
import { Gif } from '../../interfaces/gifs.interfaces';
@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {


  constructor(private _gitsService : GifsService){

  }

  get gifs (): Gif []{
     return this._gitsService.gifList
  }
}
