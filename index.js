import express from 'express';
import routes from './src/routes/crmRoute';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;


// mongooes connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
	useMongoClient: true,
	useNewUrlParser: true
});

// body parser set up
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


routes(app);

// serving static file on the backend
app.use(express.static('public'));

app.get('/', (req, res) => 
	res.send(`server is here on port ${PORT}`)
);

app.listen(PORT, () =>
	console.log(`your server is runnig on port ${PORT}`)
);