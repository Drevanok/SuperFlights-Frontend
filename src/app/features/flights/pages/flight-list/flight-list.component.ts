import { Component, OnInit, signal } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../models/flight.model';
import { RouterModule } from '@angular/router';
import { FlightCardComponent } from '../../../../shared/components/flight-card/flight-card.component';

@Component({
    selector: 'app-flight-list',
    standalone: true,
    imports: [RouterModule, FlightCardComponent],
    templateUrl: './flight-list.component.html',
})
export class FlightListComponent implements OnInit {

    flights = signal<Flight[]>([]);
    loading = signal<boolean>(true);
    errorMessage = signal<string>('');

    constructor(private flightService: FlightService) { }

    ngOnInit(): void {

        this.flightService.getFlights().subscribe({
            next: (data) => {

                console.log(data);

                this.flights.set(data);

                this.loading.set(false);
            },

            error: (err) => {
                this.errorMessage.set(err.error?.message || 'Error loading flights');
                this.loading.set(false);
            }
        });

    }

    delete(id: string) {

        this.flightService.deleteFlight(id).subscribe(() => {

            this.flights.update(flights =>
                flights.filter(flight => flight._id !== id)
            );

        });

    }

}