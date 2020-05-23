import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {ArticleModule} from "./article/article.module";
import * as path from "path";
import {AppController} from "./app.controller";

@Module({
  imports: [
    ArticleModule,
    ConfigModule.forRoot({
      load: [() => ({
        dataPath: path.resolve(__dirname, '..', '..', 'data')
      })],
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
