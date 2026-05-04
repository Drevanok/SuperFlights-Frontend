import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlightService } from "../../services/flight.service";
import { Flight } from "../../models/flight.model";
import { RouterModule } from "@angular/router";
import { FlightCardComponent } from "../../../../shared/components/flight-card/flight-card.component";
import { ChangeDetectorRef } from "@angular/core";
@Component({
    selector: 'app-flight-list',
    standalone: true,
    imports: [CommonModule, RouterModule, FlightCardComponent],
    templateUrl: './flight-list.component.html',
})

export class FlightListComponent implements OnInit {
    flights: Flight[] = [];
    loading = true;

    constructor(private flightService: FlightService, private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.flightService.getFlights().subscribe({
            next: (data) => {
                console.log(data)
                this.flights = data;
                this.loading = false;
            },

            error: () => this.loading = false
        });
    }

    delete(id: string) {
        this.flightService.deleteFlight(id).subscribe(() => {
            this.flights = this.flights.filter(f => f._id !== id)
        })
    }
}