import { Component, OnInit } from '@angular/core';

import { IrisApiService } from '../../services/iris-api.service';
import { Api } from '../../objects/api.object';

@Component({
    selector: 'iris-apis',
    templateUrl: './iris.component.html'
})

export class IrisComponent implements OnInit {
    public apis: Api[];
    public loading: boolean = false;

    public constructor(
        private apiService: IrisApiService
    )
    {
    }

    ngOnInit(): void {
        this.loading = true;
        this.apiService.getAll()
            .then(rsp => {
                this.apis = rsp;
                this.loading = false;
            })
            .catch(error => {
                console.log(error);
                this.loading = false;
            });
    }
}