import { Component, OnInit } from "@angular/core";
import { FlightService } from "../../services/flight.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FlightDTO } from "../../models/flight.dto";
import { FlightFormComponent } from "../../../../shared/components/flight-form/flight-form.component";

@Component({
    selector: 'app-flight-edit',
    standalone: true,
    imports: [FlightFormComponent],
    template: `<h2>Editar vuelo</h2>
    <app-flight-form *ngIf = "flight" [flight]="flight" (onSubmit) = "update($event)"></app-flight-form>`
})

export class FlightEditComponent implements OnInit {
    flight!: FlightDTO;
    id!: string;

    constructor(
        private route: ActivatedRoute,
        private flightService: FlightService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id')!;

        this.flightService.getFlightById(this.id).subscribe(data => {
            this.flight = {
                pilot: data.pilot,
                airplane: data.airplane,
                destinationCity: data.destinationCity,
                flightDate: data.flightDate,
            }
        });
    }

    update(dto: FlightDTO){
        this.flightService.updateFlight(this.id, dto).subscribe(() => {
            this.router.navigate(['/flights']);
        });
    }
}