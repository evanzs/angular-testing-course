import { COURSES } from './../../../../server/db-data';

import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
describe("CoursesService",()=>{


    let service:CoursesService;
    let httpClient:HttpTestingController
    beforeEach(()=>{
        TestBed.configureTestingModule({
            // HttpClientTestingModule: contem um mock do HttpClient com todos os verbo. Não sendo necessario implementar o service nem o mock dele.
            imports:[HttpClientTestingModule],
            providers:[
                CoursesService,
            ]
        })

        service = TestBed.inject(CoursesService)
        httpClient = TestBed.inject(HttpTestingController)
    })

it('Should retrive all courses', () =>{
    service.findAllCourses().subscribe(courses => {
        expect(courses).toBeTruthy("No Courses returned")
        let result = courses.find( c => c.id === 12)

        expect(result.titles.description).toBe("Angular Testing Course");
    })

    let req = httpClient.expectOne('/api/courses');
    expect(req.request.method).toBe("GET")

    //mocka o resultado do http
    req.flush({payload:Object.values(COURSES)})
    
})
it('Should get by id course', () =>{
    service.findCourseById(12).subscribe(course => {
        expect(course).toBeTruthy("No Courses returned")
        expect(course.id).toBe(12);

        expect(course.titles.description).toBe("Angular Testing Course");
    })

    let req = httpClient.expectOne('/api/courses/12');
    expect(req.request.method).toBe("GET")

    //mocka o resultado do http
    req.flush(COURSES[12])
    
})
afterEach(()=>{
    httpClient.verify();
})
})