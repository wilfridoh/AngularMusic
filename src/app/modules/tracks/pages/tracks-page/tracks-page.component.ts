import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []
  constructor(private trackService: TrackService) { }


  ngOnInit(): void {
    this.trackService.getAllTrack$()
    .subscribe(response =>{
      console.log('llego la información.....', response);
    })
    //const observable1$ = this.trackService.dataTracksTrending$
    //   .subscribe(response => {
    //     this.tracksTrending = response
    //     this.tracksRandom = response
    //     console.log('Canciones trending--------->', response);
    //   })
    // const observable2$ = this.trackService.dataTracksRandom$
    //   .subscribe(response => {
    //     this.tracksRandom = [ ...this.tracksRandom, ... response]
    //     console.log('Canciones Random entrando--------->', response);
    //   })
    // const { data }: any = (dataRaw as any).default;
    // this.mockTracksList = data;
    //console.log(data);
    //this.listObservers$ = [observable1$, observable2$] 
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}
