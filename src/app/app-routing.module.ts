import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./post/post-list/post-list.component";
import { PostCreateComponent } from "./post/post-create/post-create.component";
import { HomeComponent } from "./home/home/home.component";
import { WorkExperienceComponent } from "./work-experience/work-experience/work-experience.component";
import { FreelanceComponent } from "./freelance/freelance.component";
import { QouteComponent } from "./freelance/qoute/qoute.component";

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    { 
        path: 'create', component: PostCreateComponent
    },
    {
        path: 'edit/:postId', component: PostCreateComponent
    }
    ,{
        path: 'work-experience', component: WorkExperienceComponent
    },
    {
        path: 'freelance', component: FreelanceComponent
    },
    {
        path: 'freelance/qoute/:type' , component: QouteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}