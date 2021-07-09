import { TestBed } from '@angular/core/testing';

import { LaunchFacadeService } from './launch-facade.service';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { launchReducers } from "./../store/reducers/index";
import { launchEffects } from "./../store/effects/index";
import { GraphQLModule } from "./../graphql.module";
import { HttpClientModule } from "@angular/common/http";

describe('LaunchFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(launchReducers),
      EffectsModule.forRoot(launchEffects),
      StoreDevtoolsModule.instrument(),
      GraphQLModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
