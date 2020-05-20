import { ConfigService } from "@nestjs/config";
export declare class ArticleService {
    private readonly _configService;
    constructor(_configService: ConfigService);
    getList(): Promise<string[]>;
}
