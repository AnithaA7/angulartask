import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  name = '';
  Class = '';
  place = '';

  isDirty = true;
  constructor( private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(params =>
    {
      this.name = params['name'];
      this.Class = params['Class'];
      this.place = params['place'];
    }
    )
  }

}
