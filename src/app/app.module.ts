import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { postService } from './post/post.service';
import { AppRoutingModule } from './app-routing.module';
import { TopSectionComponent } from './home/home-parts/top-section/top-section.component';
import { HomeComponent } from './home/home/home.component';
import { MiddleSectionComponent } from './home/middle-section/middle-section.component';
import { FooterComponent } from './footer/footer.component';
import { WorkExperienceComponent } from './work-experience/work-experience/work-experience.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { QouteComponent } from './freelance/qoute/qoute.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    TopSectionComponent,
    HomeComponent,
    MiddleSectionComponent,
    FooterComponent,
    WorkExperienceComponent,
    FreelanceComponent,
    QouteComponent 
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
