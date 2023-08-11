import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/Models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  
  faceSnapsTab$! : Observable<FaceSnap[]>
  constructor( private faceSnapsService: FaceSnapsService){

  }

  ngOnInit(){
    // this.faceSnapsTab= this.faceSnapsService.getAllFaceSnaps();
    this.faceSnapsTab$  = this.faceSnapsService.getAllFaceSnaps(); 
  }
}
