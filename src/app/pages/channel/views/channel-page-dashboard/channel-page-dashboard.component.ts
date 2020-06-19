import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'channel-page-dashboard',
  templateUrl: './channel-page-dashboard.component.html',
  styleUrls: ['./channel-page-dashboard.component.scss']
})
export class ChannelPageDashboardComponent implements OnInit {
  Channel: number;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.paramMap.subscribe(params => {
      let id = params.get("id");
      this.Channel = Number(id);
    });
  }

  ngOnInit() {
  }

}
