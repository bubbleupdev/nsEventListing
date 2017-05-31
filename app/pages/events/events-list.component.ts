/**
 * Created by riley on 5/30/2017.
 */

import { Component, OnInit } from "@angular/core";

import {EventService} from "../../providers/event-service";

@Component({
    selector: "events-list",
    moduleId: module.id,
    templateUrl: "./events-list.component.html",
    providers: [EventService]
})
export class EventsListComponent implements OnInit {

    events: Array<any>;

    constructor(private eventSrvc: EventService) { }

    ngOnInit(): void {

        console.log('heyooo');

        this.eventSrvc.load().subscribe(
            (events) => {
                this.events = events;
                console.log(this.events);
            }
        );

    }

}
