import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotonComponent } from './jumboton/jumboton.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DdepartmentComponent } from './ddepartment/ddepartment.component';
import { CompareComponent } from './compare/compare.component';
import { DcompareComponent } from './dcompare/dcompare.component';
import { InlistComponent } from './inlist/inlist.component';
import { SearchComponent } from './search/search.component';
import { Jumboton2Component } from './jumboton2/jumboton2.component';
import { Jumboton3Component } from './jumboton3/jumboton3.component';

const appRoutes: Routes = [

  { path:'login' , component: LoginComponent, },
  { path:'register', component: RegisterComponent },
  { path:'compare', component: CompareComponent },
  { path:'home2', component: Jumboton2Component },
  { path:'home3', component: Jumboton3Component },
  { path:'search', component: SearchComponent },
  { path:'department', component: DdepartmentComponent },
  { path:'dcompare', component: DcompareComponent },
  { path:'inlist', component: InlistComponent  },
  { path:'**'   , component: JumbotonComponent  },

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    JumbotonComponent,
    LoginComponent,
    RegisterComponent,
    DdepartmentComponent,
    CompareComponent,
    DcompareComponent,
    InlistComponent,
    SearchComponent,
    Jumboton2Component,
    Jumboton3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
