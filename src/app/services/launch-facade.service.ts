import { LaunchListState } from "./../store/reducers/launch-list.reducer";
import { map } from "rxjs/operators";
import { PastLaunchesListGQL, LaunchDetailsGQL } from "./spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadLaunchList, loadLaunchDetail } from "../store/actions";
import * as launchListQuery from "../store/selectors";
import * as launchDetailQuery from "../store/selectors";

@Injectable({
  providedIn: "root"
})
export class LaunchFacadeService {
  launchListState$ = this.store.select(launchListQuery.getLaunchListState);
  launchList$ = this.store.select(launchListQuery.getLaunchList);
  launchListLoaded$ = this.store.select(launchListQuery.getLaunchListLoaded);
  launchListLoading$ = this.store.select(launchListQuery.getLaunchListLoading);

  launchDetailState$ = this.store.select(launchDetailQuery.getLaunchDetailState);
  launchDetail$ = this.store.select(launchDetailQuery.getLaunchDetail);
  launchDetailLoaded$ = this.store.select(launchDetailQuery.getLaunchDetailLoaded);
  launchDetailLoading$ = this.store.select(launchDetailQuery.getLaunchDetailLoading);

  constructor(
    private readonly store: Store<LaunchListState>,
    private readonly pastLaunchesService: PastLaunchesListGQL,
    private readonly pastLaunchDetailsGQL: LaunchDetailsGQL,
  ) {}

  pastLaunchListStoreCache() {
    this.store.dispatch(loadLaunchList());
    return this.launchList$;
  }

  pastLaunchListFacade() {
    return this.pastLaunchesService
      .fetch({ limit: 30 })
      .pipe(map(res => res.data.launchesPast));
  }

  pastLaunchDetailStoreCache(id) {
    this.store.dispatch(loadLaunchDetail({payload: id}));
    return this.launchDetail$;
  }
}
