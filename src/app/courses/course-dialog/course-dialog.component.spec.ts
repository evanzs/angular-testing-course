import { CourseDialogComponent } from './course-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoursesModule } from './../courses.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

describe('CourseDialogComponent',()=>{

    let component:CourseDialogComponent;
    let fixture:ComponentFixture<CourseDialogComponent>

    beforeEach( async ()=>{
        await TestBed.configureTestingModule({
            imports:[CoursesModule,HttpClientTestingModule,FormsModule],
            providers:[MatDialogRef]
        }).compileComponents();

        fixture = TestBed.createComponent(CourseDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges;
    })

    it('Should create', ()=>{
        expect(component).toBeTruthy()
    })

});
