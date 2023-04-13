import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
describe('CalculadorService',()=>{

    it ('should add two numbers',() =>{
        const logger = new LoggerService();
        const service = new CalculatorService(logger);
        spyOn(logger,'log')
        const result = service.add(2,2);

        expect(result).toBe(4)
        expect(logger.log).toHaveBeenCalledTimes(1)
    })

    it ('should sub two numbers',() =>{
        const service = new CalculatorService(new LoggerService());
        const result = service.subtract(2,2);

        expect(result).toBe(0,"unexpected subtraction result")
    })
})