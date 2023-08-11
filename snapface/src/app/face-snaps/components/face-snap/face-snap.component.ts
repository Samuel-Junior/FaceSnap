import { Component,OnInit,Input } from '@angular/core';
import { FaceSnap } from '../../../core/Models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;
  
  button! : string;

  constructor(private faceSnapsService : FaceSnapsService,
              private routes : Router){}
  
  ngOnInit(){
    this.button = "Snap!"
}
  onSnaps(){
   if(this.button === "Snap!"){
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
    this.button = "unSnap"
   }else{
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unSnap");
    this.button = "Snap!"
   }
  }

  onWiewFaceSnap(){
    this.routes.navigateByUrl( `facesnaps/${this.faceSnap.id}`);
  }
}