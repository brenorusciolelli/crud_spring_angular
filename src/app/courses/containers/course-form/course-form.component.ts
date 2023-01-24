import { Course } from './../../model/course';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ) {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);

  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    console.log(course);
  }

  onSubimit() {
    this.service.save(this.form.value).subscribe({
      next: (course) => this.onSuccess(),
      error: (err) => this.onError()
    })
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess(){
    this._snackBar.open("Curso salvo com sucesso", '', {duration: 3000});
    this.onCancel();
  }

  private onError(){
    this._snackBar.open("Error ao Salvar o curso", '', {duration: 3000});
  }

}
