import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailsComponent } from './launch-details.component';
import { MatCardModule } from "@angular/material/card";
import { RouterTestingModule } from '@angular/router/testing';
import { GraphQLModule } from "./../graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { launchReducers } from "./../store/reducers/index";
import { launchEffects } from "./../store/effects/index";

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchDetailsComponent ],
      imports: [
        RouterTestingModule,
        MatCardModule,
        GraphQLModule,
        HttpClientModule,
        SlickCarouselModule,
        StoreModule.forRoot(launchReducers),
        EffectsModule.forRoot(launchEffects),
        StoreDevtoolsModule.instrument(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
