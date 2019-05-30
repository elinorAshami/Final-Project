import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
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
import {FormsModule , ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';



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
    LoginComponent,
    RegisterComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
