import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Flight } from '../../../features/flights/models/flight.model'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-flight-card',
    standalone: true,
    imports: [RouterModule],
    templateUrl: 'flight-card.component.html'
})

export class FlightCardComponent {
    @Input() flight!: Flight;
    @Output() onDelete = new EventEmitter<string>()

    delete() {
        this.onDelete.emit(this.flight._id)
    }
}