import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]> = of([])
  dataTracksRandom$: Observable<any> = of([])

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data);

    this.dataTracksRandom$ = new Observable((observer) => {

      const trackExample: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover: 'https://www.google.com/imgres?q=angular&imgurl=https%3A%2F%2Fwww.searchenginejournal.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fthe-seo-guide-to-angular.png&imgrefurl=https%3A%2F%2Fandygeek.com%2Fposts%2FPrimeros-pasos-con-angular%2F&docid=pnn0nN8GtoE6YM&tbnid=G48fTm7qth7dNM&vet=12ahUKEwiI97LX3feGAxVEfTABHephBfAQM3oECBoQAA..i&w=1600&h=840&hcb=2&ved=2ahUKEwiI97LX3feGAxVEfTABHephBfAQM3oECBoQAA'

      }

      setTimeout(() => {
        observer.next([trackExample])
      }, 3500)

    })
  }
}
