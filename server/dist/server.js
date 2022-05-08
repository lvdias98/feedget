"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '50mb' }));
app.use(routes_1.routes);
const port = 3333;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
// # SOLID
// 1. Single Responsibility Principle: Cada classe/função deve ter uma responsabilidade única;
// 2. Open/Closed Principle: As classes/funções deve sem abertas para extensão mas fechadas para modificação;
// 3. Liskov Substitution Principle: Nós devemos poder subistituir uma classe pai por uma herança dele e tudo continuar funcionando
// 4. Interface Segregation Principle: ...; 
// 5. Dependency Inversion Principle: 
