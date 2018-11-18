import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
	firstname:{
		type: String,
		requires: "Enter a first name"
	},
	lastname:{
		type: String,
		requires: "Enter a last name"
	},
	email:{
		type: String
	},
	company:{
		type: String
	},
	phone:{
		type: Number
	},
	created_data:{
		type: Date,
		default: Date.now
	}
});