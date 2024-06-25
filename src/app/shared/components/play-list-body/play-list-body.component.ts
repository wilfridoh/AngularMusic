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
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor() { }
  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.track = data;
  }
  changeSort(property: string) {
    const { order } = this.optionSort;
    this.optionSort = {
      property: property,
      order: order == 'asc' ? 'des' : 'asc'
    }
    console.log(this.optionSort)
  }
}
