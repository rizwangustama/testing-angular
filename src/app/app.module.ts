import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Pastikan ini diimpor
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './features/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperModule } from 'primeng/stepper';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { EmployeeComponent } from './features/employee/employee.component';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DetailEmployeeComponent } from './features/employee/detail-employee/detail-employee.component';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';
import { ErrorComponent } from './features/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    EmployeeComponent,
    DetailEmployeeComponent,
    ErrorComponent,
  ],

  imports: [
    CardModule,
    MessagesModule,
    TagModule,
    InputMaskModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
    CalendarModule,
    IconFieldModule,
    InputIconModule,
    CheckboxModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    StepperModule,
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    BrowserAnimationsModule,
    PasswordModule,
    TableModule,
    ConfirmDialogModule
  ],

  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
