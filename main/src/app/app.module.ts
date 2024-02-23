import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './BackOffice/app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './BackOffice/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './BackOffice/layouts/full/full.component';
import { BlankComponent } from './BackOffice/layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './BackOffice/layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './BackOffice/layouts/full/header/header.component';
import { BrandingComponent } from './BackOffice/layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './BackOffice/layouts/full/sidebar/nav-item/nav-item.component';
import { HeaderfrontComponent } from './front-office/headerfront/headerfront.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    HeaderfrontComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
