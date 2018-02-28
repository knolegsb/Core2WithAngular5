import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchEmployeeComponent } from './components/fetchemployee/fetchemployee.component';
import { CounterComponent } from './components/counter/counter.component';
import { EmployeeService } from './_services/employee.service';
import { AddEmployeeComponent } from './components/addemployee/addemployee.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchEmployeeComponent,
        HomeComponent,
        AddEmployeeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            //{ path: 'counter', component: CounterComponent },
            { path: 'fetch-employee', component: FetchEmployeeComponent },
            { path: 'register-employee', component: AddEmployeeComponent },
            { path: 'employee/edit/:id', component: AddEmployeeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [EmployeeService]
})
export class AppModuleShared {
}
