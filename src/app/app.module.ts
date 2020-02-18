import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import {AdminModule} from './admin/admin.module';
import {CustomerModule} from './customer/customer.module';
import {ReactiveFormsModule} from '@angular/forms'
import {SharedModule} from './shared.module';
import {HelloComponent} from './hello.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    CustomerModule,
    ReactiveFormsModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynamicComponent]
})
export class AppModule { }
