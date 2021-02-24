import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TaskToDoComponent } from './task-to-do/task-to-do.component';
import { FormsModule } from '@angular/forms';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import { PanelComponent } from './panel/panel.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TaskToDoComponent,
    PanelComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule, FormsModule, CatalogModule, HomeModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
