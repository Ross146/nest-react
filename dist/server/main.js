"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setBaseViewsDir(path.join(__dirname, 'views'));
    app.set('view engine', 'js');
    app.engine('js', require('express-react-views').createEngine());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map