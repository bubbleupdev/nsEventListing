/**
 * Created by riley on 5/30/2017.
 */

import { Injectable } from "@angular/core";

import {Http, RequestOptions, Headers, Response} from '@angular/http';

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

	private opts;
	private apiHeaders: Headers = new Headers;

	private apiUrl = 'https://woodlandscenter.dev.busites.com/app-api/events?_format=json';

	constructor(public http: Http) {

		this.apiHeaders.set('Content-type', 'application/json');

		this.opts = new RequestOptions({
			headers: this.apiHeaders
		});

	}

	load() {
		return this.http.get(this.apiUrl)
			.map((events) => events.json())
			/**/.map((event) => {

				let flatEvent = {};

				//todo: figure out how to do this w/ rxjs filter/map
				for (let attr in event) {
					if (attr !== 'page' && event.hasOwnProperty(attr)) {
						flatEvent[attr] = event[attr];
					}
				}

				//todo: figure out how to do this w/ rxjs filter/map
				for (let attr in event.page) {
					if (attr !== 'id' && event.page.hasOwnProperty(attr)) {
						flatEvent[attr] = event.page[attr];
					}
				}

				return flatEvent;

			})/**/
			.catch(this.handleErrors);
	}

	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}

}
