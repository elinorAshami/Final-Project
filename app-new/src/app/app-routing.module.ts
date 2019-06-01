import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from "./index/index.component";
import { BandComponent } from "./band/band.component";
import { StudioComponent } from './studio/studio.component';
import { FavorietsComponent } from './favoriets/favoriets.component';
import { BoardComponent } from './board/board.component';
import { NewBandComponent } from './new-band/new-band.component';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent} from "./login/login.component";
import { RegisterComponent} from "./register/register.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'index' , component: IndexComponent },
  { path: 'band/:id' , component: BandComponent },
  { path: 'studio' , component: StudioComponent},
  { path: 'favoriets' , component: FavorietsComponent},
  { path: 'board' , component: BoardComponent},
  { path: 'new-band' , component: NewBandComponent},
  { path: 'invite-friend' , component: InviteFriendComponent},
  { path: 'profile' , component: ProfileComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'test' , component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
