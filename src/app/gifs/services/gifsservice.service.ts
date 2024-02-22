import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList : Gif []=[];
  private _tagsHistory: string []=[];
  private api_key ="FTzQJjLWCag7cvmjxWi1J38IGb21VF9h"
  private urlServer ='https://api.giphy.com/v1/gifs'

  constructor(private _http : HttpClient) { 

    this.loadLocalStorage()
  }

  

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  
  private organizeHistory(tag : string){
    //conviereto a minisculas
    tag = tag.toLowerCase();

    //capturo el tag y si ya existe, lo elimino
    if(this._tagsHistory.includes(tag)){
       this._tagsHistory =this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    //lo inserto de primero
    this._tagsHistory.unshift(tag);
    //limito a que solo aparenca 12 medidas
    this._tagsHistory=this._tagsHistory.splice(0,12);
    this.saveLocalStorage()

  }

  private saveLocalStorage(): void{
    localStorage.setItem('history',  JSON.stringify(this._tagsHistory) )
  }
  
  private loadLocalStorage(): void{
    if (!localStorage.getItem('history')) return;  

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)
    if (this._tagsHistory.length === 0) return;  
    this.searchTag(this._tagsHistory[0])
    
  }



   searchTag(tag : string): void{

    if(tag.length ==0 ) return ;
    this.organizeHistory(tag);

    const  params = new HttpParams().
    set('api_key',this.api_key).
    set('limit','10').
    set('q',tag)

    this._http.get<SearchResponse>(`${this.urlServer}/search`,{params}).subscribe(
      resp=>{
        this.gifList= resp.data
        console.log(this.gifList)
      }, err=>{
        console.log(err) 
      }
    )
    
   }

}
