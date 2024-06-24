import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: any ={
    cover:'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg',
    album:'Gioli & Assi',
    name:'BEBE (Oficial)'
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
