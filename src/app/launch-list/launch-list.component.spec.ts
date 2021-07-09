import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchListComponent } from './launch-list.component';
import { MatCardModule } from "@angular/material/card";
import { RouterTestingModule } from '@angular/router/testing';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { launchReducers } from "./../store/reducers/index";
import { launchEffects } from "./../store/effects/index";
import { GraphQLModule } from "./../graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { RelativeTimePipe } from "./../core/helpers/pipes/relative-time/relative-time.pipe";


describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchListComponent, RelativeTimePipe ],
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatProgressSpinnerModule,
        GraphQLModule,
        StoreModule.forRoot(launchReducers),
        EffectsModule.forRoot(launchEffects),
        StoreDevtoolsModule.instrument(),
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
