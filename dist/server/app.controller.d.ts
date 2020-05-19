import { AppService } from './app.service';
import { HelloResponse } from "../common/HelloResponse";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): HelloResponse;
}
