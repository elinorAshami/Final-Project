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

const routes: Routes = [
  { path: '' , component: IndexComponent },
  { path: 'band/:id' , component: BandComponent },
  { path: 'studio' , component: StudioComponent},
  { path: 'favoriets' , component: FavorietsComponent},
  { path: 'board' , component: BoardComponent},
  { path: 'new-band' , component: NewBandComponent},
  { path: 'invite-friend' , component: InviteFriendComponent},
  { path: 'profile' , component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
