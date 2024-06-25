import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.models';
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  track: TrackModel[] = []

  constructor() { }
  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.track = data;
  }

}
