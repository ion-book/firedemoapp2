import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from "../upload.service";
import { Upload } from "../upload";

@Component({
  selector: 'app-upload-detail',
  templateUrl: './upload-detail.component.html',
  styleUrls: ['./upload-detail.component.css']
})
export class UploadDetailComponent implements OnInit {

  @Input() upload: Upload;
  
    constructor(private upSvc: UploadService) { }
  
    ngOnInit() {
    }
  
    deleteUpload(upload) {
      this.upSvc.deleteUpload(this.upload)
    }

}
