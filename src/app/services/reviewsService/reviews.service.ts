import { Injectable } from '@angular/core';
import { Reviews } from '../../models/reviewsmodel';
import axios from 'axios';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';


@Injectable({
  providedIn: 'root'
})


export class ReviewsService {
  //  private urlApi= 'http://localhost:8080/grupo26/api/calificacion';
  private urlApi = 'https://gruposjaveriana.dynaco.co/grupo26/api/calificacion';
  async getReviews(): Promise<Observable<Reviews[]>> {
    return new Observable((observer) => {
      axios.get<Reviews[]>(this.urlApi)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          console.error(error);
          observer.next([]);
          observer.complete();
        });
    });
  }

  
  async getPropiedadReviews(id: number): Promise<Observable<Reviews[] | null>> {
    return new Observable((observer) => {
      axios.get<Reviews[]>(`${this.urlApi}/propiedad/${id}`)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          console.error(error);
          observer.next(null);
          observer.complete();
        });
    });
  }

  async createReview(review: Reviews): Promise<Reviews | null> {
    try {
      const response = await axios.post<Reviews>(this.urlApi, review, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
