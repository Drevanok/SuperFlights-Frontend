import { Component, OnInit } from "@angular/core";
import { FlightService } from "../../services/flight.service";
import { ActivatedRoute } from "@angular/router";
import { Flight } from "../../models/flight.model";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-flight-detail',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div *ngIf="flight">
        <h2>{{flight.destinationCity}}</h2>
        <p>Piloto: {{flight.pilot}}</p>
        <p>Avion: {{flight.airplane}}</p>
        <p>Fecha: {{flight.flightDate}}</p>
    </div>
    `
})

export class FlightDetailComponent implements OnInit {
    flight!: Flight;

    constructor(
        private route: ActivatedRoute,
        private flightService: FlightService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')!;
        this.flightService.getFlightById(id).subscribe(data => {
            this.flight = data;
        })
    }
}