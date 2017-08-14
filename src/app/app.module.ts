import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { LoadingComponent } from './loading/loading.component';
import { UploadsListComponent } from './uploads-list/uploads-list.component';

import { UploadService } from "./upload.service";

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    UploadsListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
