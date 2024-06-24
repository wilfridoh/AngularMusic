import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SileBarComponent } from './components/sile-bar/sile-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';

@NgModule({
  declarations: [
    SileBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SileBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent
  ]
})
export class SharedModule { }
