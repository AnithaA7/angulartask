import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leadsgrid',
  templateUrl: './leadsgrid.component.html',
  styleUrls: ['./leadsgrid.component.css']
})
export class LeadsgridComponent implements OnInit {
  constructor(private ActivatedRoutes: ActivatedRoute){

  }

  ngOnInit(): void {
    console.log(this.ActivatedRoutes.snapshot.data);
  }

}
