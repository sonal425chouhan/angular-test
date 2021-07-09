import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { LaunchDetailsGQL } from "../services/spacexGraphql.service";
import { LaunchFacadeService } from "./../services/launch-facade.service";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1, 'focusOnSelect': true};
  currentSlideIndex = 0;
  id;
  launchDetails$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL,
    private readonly launchFacade: LaunchFacadeService
  ) {}



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.launchDetails$ = this.launchFacade.pastLaunchDetailStoreCache(this.id);
  }


  afterChange(e) {
    this.currentSlideIndex = e.currentSlide;
  }
}
