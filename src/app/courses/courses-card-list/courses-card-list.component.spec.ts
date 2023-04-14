import { ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';



describe('CoursesCardListComponent', () => {
  let fixture:ComponentFixture<CoursesCardListComponent>;
let component:CoursesCardListComponent;
beforeEach(async () =>{

 await TestBed.configureTestingModule({
  imports:[CoursesModule]

 }).compileComponents();

 fixture = TestBed.createComponent(CoursesCardListComponent)
 component = fixture.componentInstance;
 fixture.detectChanges()
})

  it("should create the component", () => {  
     expect(component).toBeTruthy();
  });


  it("should display the course list", () => {

    pending();

  });


  it("should display the first course", () => {

      pending();

  });


});


