import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';//programación reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover: 'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg',
    album: 'Gioli & Assi',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/tracks.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediService: MultimediaService) { }


  ngOnInit(): void {
    const observer1$: Subscription = this.multimediService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción.......', response);
      })
    const observer2$: Subscription = this.multimediService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción.......', response);
      })
    const observer3$: Subscription = this.multimediService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción.......', response);
      })

      this.listObservers$ = [observer1$, observer2$, observer3$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe())

    console.log('BOOM!');
  }

}
