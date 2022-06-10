'use strict';

const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  // business name is a required field
  // so when someone adds a resource it will have to have a name
  bizName: { type: String, required: true },
  // user inputs description
  description: {type: String, required: true},
  // user inputs url to resource
  url: { type: String, required: true },
  // user select category from drop down menu
  category: { type: String, required: true, enum: ['Mental Health', 'Agriculture', 'Cultural Preservation', 'Education', 'Events & Organizing', 'Facebook Groups'] },
  // user can select as multiple choice (yes or no click box) for different loctions OR can write in a location
  isNational: {type: Boolean, required: true },
  isPNW: {type: Boolean, required: true },
  isOtherLocation: {type: String, required: true },
  isVirtual: {type: Boolean, required: true }
  // location: { type: String, required: true, enum: ['Washington', 'Virtual', ]
  });

// creating a model from our schema
const resourceModel = mongoose.model('resource', resourceSchema);

module.exports = resourceModel; 