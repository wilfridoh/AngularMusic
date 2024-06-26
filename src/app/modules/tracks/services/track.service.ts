import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) {

  }
  private skiById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  /**
   * @returns Revolver todas las canciones ! 
   */
  getAllTrack$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )

  }

  /**
 * @returns Revolver todas las random ! 
 */
  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        tap(data => console.log('Antes filtro ', data)),
        mergeMap(({ data }: any) => this.skiById(data, 1)),
        // map(({ data }: any) => {//Se devuelve lista revertida
        //   return data.reverse()
        // }),
        // map(({ dataRevertida }: any) => {//Aplicar filter
        //   return dataRevertida.filter((track: TrackModel) => track._id !=)
        // })
        tap(data => console.log('Despues del filtro', data)),
        catchError((err) => {
          const { status, statusText } = err
          console.log('Algo pasó revisame!!!!', [status, statusText]);
          return of([])
        })
      )

  }
}
