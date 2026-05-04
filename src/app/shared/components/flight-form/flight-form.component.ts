import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FlightDTO } from "../../../features/flights/models/flight.dto";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-flight-form',
    standalone: true, 
    imports: [FormsModule, CommonModule],
    templateUrl: './flight-form.component.html' 
})

export class FlightFormComponent {

    @Input() flight: FlightDTO = {
        pilot: '',
        airplane: '',
        destinationCity: '',
        flightDate: ''
    };

    @Output() onSubmit = new EventEmitter<FlightDTO>();

    submit(){
        this.onSubmit.emit(this.flight);
    }
}