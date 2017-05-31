/**
 * Created by riley on 5/30/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.apiHeaders = new http_1.Headers;
        this.apiUrl = 'https://woodlandscenter.dev.busites.com/app-api/events?_format=json';
        this.apiHeaders.set('Content-type', 'application/json');
        this.opts = new http_1.RequestOptions({
            headers: this.apiHeaders
        });
    }
    EventService.prototype.load = function () {
        return this.http.get(this.apiUrl)
            .map(function (events) { return events.json(); })
            .map(function (event) {
            var flatEvent = {};
            //todo: figure out how to do this w/ rxjs filter/map
            for (var attr in event) {
                if (attr !== 'page' && event.hasOwnProperty(attr)) {
                    flatEvent[attr] = event[attr];
                }
            }
            //todo: figure out how to do this w/ rxjs filter/map
            for (var attr in event.page) {
                if (attr !== 'id' && event.page.hasOwnProperty(attr)) {
                    flatEvent[attr] = event.page[attr];
                }
            }
            return flatEvent;
        }) /**/
            .catch(this.handleErrors);
    };
    EventService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return EventService;
}());
EventService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7OztBQUVILHNDQUEyQztBQUUzQyxzQ0FBc0U7QUFFdEUsOEJBQW1DO0FBQ25DLGlDQUErQjtBQUcvQixJQUFhLFlBQVk7SUFPeEIsc0JBQW1CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnJCLGVBQVUsR0FBWSxJQUFJLGNBQU8sQ0FBQztRQUVsQyxXQUFNLEdBQUcscUVBQXFFLENBQUM7UUFJdEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHFCQUFjLENBQUM7WUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ3hCLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDL0IsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFiLENBQWEsQ0FBQzthQUMxQixHQUFHLENBQUMsVUFBQyxLQUFLO1lBRWQsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBRW5CLG9EQUFvRDtZQUNwRCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDO1lBQ0YsQ0FBQztZQUVELG9EQUFvRDtZQUNwRCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RELFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0YsQ0FBQztZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFbEIsQ0FBQyxDQUFDLENBQUEsSUFBSTthQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxLQUFlO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRixtQkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUFqRFksWUFBWTtJQUR4QixpQkFBVSxFQUFFO3FDQVFhLFdBQUk7R0FQakIsWUFBWSxDQWlEeEI7QUFqRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcmlsZXkgb24gNS8zMC8yMDE3LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge0h0dHAsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG5cblx0cHJpdmF0ZSBvcHRzO1xuXHRwcml2YXRlIGFwaUhlYWRlcnM6IEhlYWRlcnMgPSBuZXcgSGVhZGVycztcblxuXHRwcml2YXRlIGFwaVVybCA9ICdodHRwczovL3dvb2RsYW5kc2NlbnRlci5kZXYuYnVzaXRlcy5jb20vYXBwLWFwaS9ldmVudHM/X2Zvcm1hdD1qc29uJztcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuXG5cdFx0dGhpcy5hcGlIZWFkZXJzLnNldCgnQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuXHRcdHRoaXMub3B0cyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG5cdFx0XHRoZWFkZXJzOiB0aGlzLmFwaUhlYWRlcnNcblx0XHR9KTtcblxuXHR9XG5cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVVybClcblx0XHRcdC5tYXAoKGV2ZW50cykgPT4gZXZlbnRzLmpzb24oKSlcblx0XHRcdC8qKi8ubWFwKChldmVudCkgPT4ge1xuXG5cdFx0XHRcdGxldCBmbGF0RXZlbnQgPSB7fTtcblxuXHRcdFx0XHQvL3RvZG86IGZpZ3VyZSBvdXQgaG93IHRvIGRvIHRoaXMgdy8gcnhqcyBmaWx0ZXIvbWFwXG5cdFx0XHRcdGZvciAobGV0IGF0dHIgaW4gZXZlbnQpIHtcblx0XHRcdFx0XHRpZiAoYXR0ciAhPT0gJ3BhZ2UnICYmIGV2ZW50Lmhhc093blByb3BlcnR5KGF0dHIpKSB7XG5cdFx0XHRcdFx0XHRmbGF0RXZlbnRbYXR0cl0gPSBldmVudFthdHRyXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL3RvZG86IGZpZ3VyZSBvdXQgaG93IHRvIGRvIHRoaXMgdy8gcnhqcyBmaWx0ZXIvbWFwXG5cdFx0XHRcdGZvciAobGV0IGF0dHIgaW4gZXZlbnQucGFnZSkge1xuXHRcdFx0XHRcdGlmIChhdHRyICE9PSAnaWQnICYmIGV2ZW50LnBhZ2UuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcblx0XHRcdFx0XHRcdGZsYXRFdmVudFthdHRyXSA9IGV2ZW50LnBhZ2VbYXR0cl07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZsYXRFdmVudDtcblxuXHRcdFx0fSkvKiovXG5cdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuXHR9XG5cblx0aGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuXHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcblx0fVxuXG59XG4iXX0=