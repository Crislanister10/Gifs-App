import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list/card-list.component';
import { GifcardComponent } from './components/gifcard/gifcard.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
   
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifcardComponent
         
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    HomePageComponent
    
  ]
})
export class GifsModule { }
