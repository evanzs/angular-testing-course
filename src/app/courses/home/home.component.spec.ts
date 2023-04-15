import {async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed} from '@angular/core/testing';
import {CoursesModule} from '../courses.module';
import { DebugElement, Inject } from '@angular/core';

import {HomeComponent} from './home.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CoursesService} from '../services/courses.service';
import {HttpClient} from '@angular/common/http';
import {COURSES} from '../../../../server/db-data';
import {setupCourses} from '../common/setup-test-data';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {click} from '../common/test-utils';




describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component:HomeComponent;
  let el: DebugElement;
  let service:any;

  const serveSpy = jasmine.createSpyObj('CoursesService',['findAllCourses'])
  beforeEach((async () => {
      
    await TestBed.configureTestingModule({
      imports:[CoursesModule,HttpClientTestingModule,NoopAnimationsModule],
      providers:[
        {provide:CoursesService,useValue:serveSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    service = TestBed.inject(CoursesService)
  }));

  it("should create the component", () => {

    expect(component).toBeTruthy();

  });


  it("should display only beginner courses", () => {
     const beginner =setupCourses().filter(course => course.category == "BIGNNER")
    service.findAllCourses.and.returnValue(of(beginner))
    fixture.detectChanges();

    const  tab = el.queryAll(By.css(".mat-tab-label"))
    expect(tab.length).toEqual(1)
  });


  it("should display only advanced courses", () => {

      pending();

  });


  it("should display both tabs", () => {

    pending();

  });


  it("should display advanced courses when tab clicked", () => {

    pending();

  });

});


