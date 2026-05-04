import { Injectable } from "@angular/core";
import { ApiService } from "../../../core/services/api.service";
import { Observable } from "rxjs";
import { Flight } from "../models/flight.model";
import { FlightDTO } from "../models/flight.dto";

@Injectable({
    providedIn: 'root',
})

export class FlightService {
    constructor (private api: ApiService){}

    getFlights(): Observable<Flight[]>{
        return this.api.get<Flight[]>('/flight/find-all');
    }

    getFlightById(id: string): Observable<Flight>{
        return this.api.get<Flight>(`/flight/find-one/${id}`);
    }

    createFlight(dto: FlightDTO): Observable<Flight>{
        return this.api.post<Flight>('/flight/create', dto);
    }

    updateFlight(id: string, dto: FlightDTO): Observable<Flight>{
        return this.api.put<Flight>(`/flight/update/${id}`, dto);
    }

    deleteFlight(id: string): Observable<void>{
        return this.api.delete<void>(`/flight/delete/${id}`);
    }
}