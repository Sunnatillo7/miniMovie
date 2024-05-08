import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, StarRatingComponent, NgbModalModule, NgbModule
  ],
  exports:[StarRatingComponent]
})
export class FeatureModule { }
