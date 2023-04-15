import { By } from '@angular/platform-browser';
import { COURSES } from './../../../../server/db-data';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import { setupCourses } from '../common/setup-test-data';
import { DebugElement } from '@angular/core';



describe('CoursesCardListComponent', () => {
  let fixture:ComponentFixture<CoursesCardListComponent>;
  let component:CoursesCardListComponent;
  let el  : DebugElement;
beforeEach(async () =>{

 await TestBed.configureTestingModule({
  imports:[CoursesModule]

 }).compileComponents();

 fixture = TestBed.createComponent(CoursesCardListComponent)
 component = fixture.componentInstance;
 el = fixture.debugElement;
 fixture.detectChanges()
})

  it("should create the component", () => {  
     expect(component).toBeTruthy();
  });


  it("should display the course list", () => {

      component.courses = setupCourses();      
      //printa o elemento
      console.log(el.nativeElement.outerHTML);
      fixture.detectChanges();
      //printa o elemento
      console.log(el.nativeElement.outerHTML);
      const cards = el.queryAll(By.css(".course-card"))
      expect(cards).toBeTruthy();
      expect(cards.length).toBe(12)

  });


  it("should display the first course", () => {

      pending();

  });


});


