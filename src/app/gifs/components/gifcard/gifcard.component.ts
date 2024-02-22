import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-gifcard',
  templateUrl: './gifcard.component.html',
  
})
export class GifcardComponent implements OnInit{

  @Input()
  public gif! : Gif

  ngOnInit(): void {
      if (!this.gif) throw new Error('property  it required')
        
       
  }

}
