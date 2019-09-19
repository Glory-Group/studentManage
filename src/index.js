import dva from 'dva';
import './index.css';
import login from "./models/login"
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(login);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
