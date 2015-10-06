'use strict';

/**
 * Tutor model
 *
 * @description :: Server-side model for managing Tutor
 */

//dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var irina = require('irina');



//Tutor Schema
var TutorSchema = new Schema({
    
    center: {
    
        type: String
    
    },
    
    name: {
    
        type: String
    
    },
    
    title: {
    
        type: String
    
    },
    
    school: {
    
        type: String
    
    },
    
    subject: {
    
        type: String
    
    },
    
    testPrepared: {
    
        type: String
    
    },
    
    publish: {
    
        type: Number
    
    },
    
    release: {
    
        type: Number
    
    }
    
});


//apply TutorSchema level plugins
TutorSchema.plugin(irina);

//exports Tutor model
module.exports = mongoose.model('Tutor', TutorSchema);