import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { TopicBaseComponent } from './topic-base/topic-base.component';
import { EQuestionCategories, Questions } from './model/models';

const routes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent,
  data: { } },
  { path: 'topic-1', component: TopicBaseComponent,
  data: {
    topicId: 1,
    topicTitle: EQuestionCategories[1],
    topicQuestion: Questions.q1 } },
  { path: 'topic-2', component: TopicBaseComponent,
  data: {
    topicId: 2,
    topicTitle: EQuestionCategories[2],
    topicQuestion: Questions.q2 } },
  { path: 'topic-3', component: TopicBaseComponent,
  data: {
    topicId: 3,
    topicTitle: EQuestionCategories[3],
    topicQuestion: Questions.q3 } },
  { path: 'topic-4', component: TopicBaseComponent,
  data: {
    topicId: 4,
    topicTitle: EQuestionCategories[4],
    topicQuestion: Questions.q4 } },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
