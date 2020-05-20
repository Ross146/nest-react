import { ConfigService } from "@nestjs/config";
import { ArticleListResponse } from "./article.types";
export declare class ArticleService {
    private readonly _configService;
    constructor(_configService: ConfigService);
    getList(): Promise<ArticleListResponse>;
}
