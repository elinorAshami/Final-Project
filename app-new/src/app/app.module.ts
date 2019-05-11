import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// @ts-ignore
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BandComponent } from './band/band.component';
import { MenuComponent } from './menu/menu.component';
import { StudioComponent } from './studio/studio.component';
import { FavorietsComponent } from './favoriets/favoriets.component';
import { NewBandComponent } from './new-band/new-band.component';
import { ProfileComponent } from './profile/profile.component';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { BoardComponent } from './board/board.component';
import { BandsService} from "./bands.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BandComponent,
    MenuComponent,
    StudioComponent,
    FavorietsComponent,
    NewBandComponent,
    ProfileComponent,
    InviteFriendComponent,
    BoardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
