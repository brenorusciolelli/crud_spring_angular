import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses:Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private CoursesService: CoursesService) {
    this.courses = this.CoursesService.list().pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }

  ngOnInit(): void {
  }
}
