import { 
	addNewcontact, 
	getContact, 
	getContactWithId, 
	updateContact,
	deleteContact
} from '../controllers/crmController'
const routes = (app) => {
	app.route('/contact')
	.get((req, res, next) =>{
		console.log(req.originalUrl);
		console.log(req.method);
		next();
	}, getContact)
	.post(addNewcontact);

	app.route('/contact/:id')
	// add a specific contact
	.get(getContactWithId)
	.put(updateContact)
	.delete(deleteContact);
}

export default routes;