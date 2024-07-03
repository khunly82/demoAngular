import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { DureeComponent } from './pages/duree/duree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { Page404Component } from './pages/404/404.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { ToDollarPipe } from './pipes/to-dollar.pipe';
import { ConversionPipe } from './pipes/conversion.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { SlicePipe } from './pipes/slice.pipe';
import { FormdemoComponent } from './pages/formdemo/formdemo.component';
import { ListmovieComponent } from './pages/movie/listmovie/listmovie.component';
import { DetailmovieComponent } from './pages/movie/detailmovie/detailmovie.component';
import { CreatemovieComponent } from './pages/movie/createmovie/createmovie.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarSelectorComponent } from './pages/calendar/calendar-selector/calendar-selector.component';
import { CalendarViewComponent } from './pages/calendar/calendar-view/calendar-view.component';
import { MeteoComponent } from './pages/meteo/meteo.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AgePipe } from './pipes/age.pipe';
import { MarvelCharactersComponent } from './pages/marvel-characters/marvel-characters.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { LoaderComponent } from './components/loader/loader.component';
import { loaderInterceptor } from './interceptors/loader.interceptor';
import { ProductComponent } from './pages/product/product.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DureeComponent,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    Page404Component,
    StepperComponent,
    ToDollarPipe,
    ConversionPipe,
    SlicePipe,
    FormdemoComponent,
    ListmovieComponent,
    DetailmovieComponent,
    CreatemovieComponent,
    CalendarComponent,
    CalendarSelectorComponent,
    CalendarViewComponent,
    MeteoComponent,
    AgePipe,
    MarvelCharactersComponent,
    PaginatorComponent,
    LoaderComponent,
    ProductComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // gérer les formulaires simples
    FormsModule,
    // pas encore besoin sera vu plus tard
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    CardModule,
    FloatLabelModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
    CalendarModule,
    FieldsetModule,
  ],
  providers: [
    ConfirmationService,
    MessageService,
    provideHttpClient(withInterceptors([
      loaderInterceptor
    ])),
    {provide: 'myValue', useValue: 42 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
