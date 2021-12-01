import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'admin', component: AdminComponent},
    {path: 'user', component: UserComponent},
    {path: '', redirectTo: '/admin', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}]
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
