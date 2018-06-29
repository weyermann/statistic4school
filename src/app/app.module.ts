import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { TopicBaseComponent } from './topic-base/topic-base.component';
import { AppRoutingModule } from './app.routes';
import { QuestionIntroComponent } from './question-intro/question-intro.component';
import { DataVizComponent } from './data-viz/data-viz.component';
import { DiagramTypeSelectionComponent } from './diagram-type-selection/diagram-type-selection.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BubbleChartComponent } from './charts/bubble-chart/bubble-chart.component';
import { MapChartComponent } from './charts/map-chart/map-chart.component';
import { SpiderChartComponent } from './charts/spider-chart/spider-chart.component';
import { AnswerSubmissionComponent } from './answer-submission/answer-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    TopicBaseComponent,
    QuestionIntroComponent,
    DataVizComponent,
    DiagramTypeSelectionComponent,
    BarChartComponent,
    PieChartComponent,
    BubbleChartComponent,
    MapChartComponent,
    SpiderChartComponent,
    AnswerSubmissionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
