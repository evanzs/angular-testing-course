import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed} from '@angular/core/testing'
describe('CalculadorService',()=>{
    let service:CalculatorService;
    let loggerSpy:any;
    beforeEach( () =>{
        console.log("before")
        loggerSpy = jasmine.createSpyObj('LoggerService',["log"]);
        TestBed.configureTestingModule({
            providers:[
                CalculatorService,
                {provide:LoggerService,usevalue:loggerSpy}
            ]
        });
       
        service = TestBed.inject(CalculatorService)
    })
    xit ('should add two numbers',() =>{     
        console.log("add test")
        const result = service.add(2,2);

        expect(result).toBe(4)
        expect(loggerSpy.log).toHaveBeenCalledTimes(1)
    })

    it ('should sub two numbers',() =>{
        console.log("sub test")

        const result = service.subtract(2,2);
        expect(result).toBe(0,"unexpected subtraction result")
    })
})