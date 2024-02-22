import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'share-lazy-image',
  templateUrl: './lazy-image.component.html',
 
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;
 
  @Input()
  public alt: string="";

  public hasAlone: boolean = false;

  ngOnInit(): void {
      if (!this.url) throw new Error('url properety required');
  }

  public onLoaded(){
    setTimeout(() => {
      console.log()
      this.hasAlone = true;
    }, 100);
    
  }
}
