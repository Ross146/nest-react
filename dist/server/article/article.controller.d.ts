import { ArticleService } from "./article.service";
export declare class ArticleController {
    private readonly _articleService;
    constructor(_articleService: ArticleService);
    getAll(): Promise<import("./article.types").ArticleListResponse>;
}
