import { Injectable, Inject } from '@angular/core';

import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Api } from '../objects/api.object';

@Injectable()
export class IrisApiService {
    private url: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(
        private http: Http)
    {
        this.url = 'http://localhost:57772/api/mgmnt/';
    }

    // GET
    public getAll(): Promise<Api[]> {
        let options = new RequestOptions({
            headers: new Headers({
                'Authorization': 'Basic c3VwZXJ1c2VyOlNZUw=='
            })
        });
        return this.http.get(this.url, options)
            .toPromise()
            .then(response => response.json() as Api[]);
    }
}
