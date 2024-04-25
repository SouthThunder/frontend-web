import { Component,OnInit,Input,Output,EventEmitter  } from '@angular/core';
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
  @Output() averageRatingChange = new EventEmitter<number>();
  @Output() reviewsCountChange = new EventEmitter<number>();
  reviews:Reviews[] = [];
  averageRating: number = 0;
  constructor(private reviewService: ReviewsService) { }
  ngOnInit(): void {
    this.loadReviews();
    
  }
  async loadReviews(): Promise<void> {
    
    (await this.reviewService.getPropiedadReviews(this.solicitudId)).subscribe(
      (response) => {
        
        this.reviews = response || [];
        this.calculateAverageRating();
        this.reviewsCountChange.emit(this.reviews.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  calculateAverageRating(): void {
    let sum = 0;
    this.reviews.forEach(review => {
      sum += review.puntuacion;
    });
    this.averageRating = this.reviews.length > 0 ? sum / this.reviews.length : 0;
    this.averageRatingChange.emit(this.averageRating);
  
  }
  
  
}
