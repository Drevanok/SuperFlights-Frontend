import { Component } from "@angular/core";
import { FlightService } from "../../services/flight.service";
import { Router } from "@angular/router"
import { FlightDTO } from "../../models/flight.dto";
import { FlightFormComponent } from "../../../../shared/components/flight-form/flight-form.component";

@Component({
    selector: 'app-flight-create',
    standalone: true,
    imports: [FlightFormComponent],
    template: `<h2>Crear vuelo</h2>
    <app-flight-form (onSubmit)="create($event)"></app-flight-form>`,
})

export class FlightCreateComponent {
    constructor(
        private flightService: FlightService,
        private router: Router
    ) { }

    create(dto: FlightDTO) {
        this.flightService.createFlight(dto).subscribe(() => {
            this.router.navigate(['/flights'])
        });
    }
}