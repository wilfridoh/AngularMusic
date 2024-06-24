import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SileBarComponent } from './components/sile-bar/sile-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';

@NgModule({
  declarations: [
    SileBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SileBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
