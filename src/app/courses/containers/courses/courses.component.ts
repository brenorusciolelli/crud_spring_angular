import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$:Observable<Course[]>;

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.courses$ = this.CoursesService.list().pipe(
      catchError(err => {
        this.onError("Error loading courses");
        return of([]);
      }),
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit($course: Course){
    this.router.navigate(['edit', $course._id], {relativeTo: this.route});
  }
}
