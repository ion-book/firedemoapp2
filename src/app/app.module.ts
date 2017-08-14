import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { LoadingComponent } from './loading/loading.component';
import { UploadsListComponent } from './uploads-list/uploads-list.component';

import { UploadService } from "./upload.service";
import { UploadDetailComponent } from './upload-detail/upload-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    UploadsListComponent,
    UploadDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
