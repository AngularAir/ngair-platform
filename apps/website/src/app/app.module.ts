import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeComponent, PageHomeModule } from '@ngair-platform/website/page-home';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'page-episode', loadChildren: '@ngair-platform/website/page-episode#PageEpisodeModule' }
      ],
      { initialNavigation: 'enabled' }
    ),
    PageHomeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
