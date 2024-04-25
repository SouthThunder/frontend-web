import { Component,OnInit,Input } from '@angular/core';
import { Reviews } from '../../models/reviewsmodel';
import { ReviewsService } from '../../services/reviewsService/reviews.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  @Input() solicitudId!: number;
  reviews:Reviews[] = [];
  
  constructor(private reviewService: ReviewsService) { }
  ngOnInit(): void {
    this.loadReviews();
    
  }
  async loadReviews(): Promise<void> {
    console.log(this.solicitudId, "ACA EL ID");
    (await this.reviewService.getSolicitudReviews(this.solicitudId)).subscribe(
      (response) => {
        console.log(response, "ACA LA RESPONSEE");
        this.reviews = response || [];
        console.log(this.reviews, "ACA LOS REVIEWS");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  
}
