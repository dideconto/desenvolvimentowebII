import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ListCycleComponent } from "./views/cycle/list-cycle/list-cycle.component";
import { CreateCycleComponent } from "./views/cycle/create-cycle/create-cycle.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { DashboardCycleComponent } from "./views/cycle/dashboard-cycle/dashboard-cycle.component";

//Módulos do Material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "@angular/cdk/layout";
import { MatSnackBarModule } from "@angular/material/snack-bar";

//Importar bibliotecas de localição e registrar o idioma
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ListCycleComponent,
    CreateCycleComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    DashboardCycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatSnackBarModule,
  ],
  //Definir idioma padrão da aplicação
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
