/**
 * Created by riley on 5/30/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_service_1 = require("../../providers/event-service");
var EventsListComponent = (function () {
    function EventsListComponent(eventSrvc) {
        this.eventSrvc = eventSrvc;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('heyooo');
        this.eventSrvc.load().subscribe(function (events) {
            _this.events = events;
            console.log(_this.events);
        });
    };
    return EventsListComponent;
}());
EventsListComponent = __decorate([
    core_1.Component({
        selector: "events-list",
        moduleId: module.id,
        templateUrl: "./events-list.component.html",
        providers: [event_service_1.EventService]
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventsListComponent);
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7QUFFSCxzQ0FBa0Q7QUFFbEQsK0RBQTJEO0FBUTNELElBQWEsbUJBQW1CO0lBSTVCLDZCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQztJQUVoRCxzQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFURyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUMzQixVQUFDLE1BQU07WUFDSCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQ0osQ0FBQztJQUVOLENBQUM7SUFFTCwwQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksbUJBQW1CO0lBTi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzVCLENBQUM7cUNBS2lDLDRCQUFZO0dBSmxDLG1CQUFtQixDQW1CL0I7QUFuQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpbGV5IG9uIDUvMzAvMjAxNy5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7RXZlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2V2ZW50LXNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZXZlbnRzLWxpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZXZlbnRzLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtFdmVudFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZXZlbnRzOiBBcnJheTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudFNydmM6IEV2ZW50U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnaGV5b29vJyk7XG5cbiAgICAgICAgdGhpcy5ldmVudFNydmMubG9hZCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChldmVudHMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV2ZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cbiJdfQ==