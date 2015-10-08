'use strict';

/**
 * Question model
 *
 * @description :: Server-side model for managing Question
 */

//dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



//Question Schema
var QuestionSchema = new Schema({
    
    no: {
    
        type: Number
    
    },
    
    duration: {
    
        type: Number
    
    },
    
    body: {
    
        type: String
    
    },
    
    correctAnswer: {
    
        type: String
    
    },
    
    choice: [{
    
        answer: {
            type: String
        }
    
    }]
    
});


//apply QuestionSchema level plugins


//exports Question model
module.exports = mongoose.model('Question', QuestionSchema);