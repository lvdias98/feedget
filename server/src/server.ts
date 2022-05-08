import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(routes);

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