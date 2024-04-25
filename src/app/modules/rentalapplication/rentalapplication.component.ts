import { Component, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../services/propiedad.service/properties.service';
import { Propiedad } from '../../models/propiedadmode';
@Component({
  selector: 'app-rentalapplication',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, CommonModule,ReviewsComponent],
  templateUrl: './rentalapplication.component.html',
  styleUrl: './rentalapplication.component.css',
  providers: [DatePipe]
})
export class RentalapplicationComponent {
  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];

  selectedDay: any = null;
  selectedDayExit: any = null; 
  monthSelect: any[] | undefined;
  dateSelect: any;
  dateValue: any;
  monthSelectExit: any[] | undefined;
  dateSelectExit: any;
  dateValueExit: any;

  reviewsCountReceived: number = 0;
  averageRatingReceived: number = 0; 
  constructor(private route: ActivatedRoute,private propiedadService: PropertiesService) { }
  propiedad: Propiedad= {
    nombre: '',
    descripcion: '',
    valor: 0,
    estado: false,
    piscina: false,
    banos: 0,
    habitaciones: 0,
    asador: false,
    mascotas: false,
    arrendador: 0, 
    solicitudes: []
  } ; 
  id:string | null = '';
  idNumber: number=0;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.idNumber = parseInt(this.id, 10);
    this.getDaysFromDate(4, 2024)
    this.getDaysFromDateExit(4, 2024)
    this.getPropiedad(this.id);
  }
  async getPropiedad(id: string): Promise<void> {
    console.log(id, "aca el id");
    this.propiedadService.getPropertiesbyId(id).then( (response: any) => {
      console.log(response);
      this.propiedad=response;
    },(error: any)=>{
      console.log(error);
    })
  }

  onAverageRatingChange(newAverage: number) {
    this.averageRatingReceived = newAverage;
  }
  onReviewsCountChange(newCount: number) {
    this.reviewsCountReceived = newCount;
  }
  getDaysFromDate(month: number, year: number) {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelect = arrayDays;
  }
  getDaysFromDateExit(month: number, year: number) {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelectExit = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelectExit = arrayDays;
  }

  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: any) {
    this.selectedDay = day;
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
  }
  changeMonthExit(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelectExit.clone().subtract(1, "month");
      this.getDaysFromDateExit(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelectExit.clone().add(1, "month");
      this.getDaysFromDateExit(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDayExit(day: any) {
    this.selectedDayExit = day;
    const monthYear = this.dateSelectExit.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValueExit = objectDate;

  }
}
