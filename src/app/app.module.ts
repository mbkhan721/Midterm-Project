import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ResumeComponent } from './resume/resume.component';
import { EducationComponent } from './resume/education/education.component';
import { FooterComponent } from './resume/footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './resume/header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'education', component: EducationComponent },
      { path: 'header', component: HeaderComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ResumeComponent,
    EducationComponent,
    FooterComponent,
    ProductDetailsComponent,
    HeaderComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/