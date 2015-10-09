'use strict';

/**
 * Exam model
 *
 * @description :: Server-side model for managing Exam
 */

//dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



//Exam Schema
var ExamSchema = new Schema({
    
    subject: {
    
        type: String
    
    },
    
    seriesNo: {
    
        type: Number
    
    },
    
    published: {
    
        type: Date
    
    },
    
    released: {
    
        type: Date
    
    },
    
    fee: {
    
        type: Number
    
    },
    
    students: {
    
        type: Number
    
    },
    
    totalAmount: {
    
        type: Number
    
    },
    
    weekStudents: {
    
        type: Number
    
    },
    
    weekTotal: {
    
        type: Number
    
    },
    
    time: {
    
        type: String
    
    },
    
    instruction: {
    
        type: String
    
    },
    
    level: {
    
        type: String
    
    },
    
    status: {
    
        type: String
    
    },
    
    question: [{
            
        no: {

             type: String

            },

            body: {

                type: String
            },

            choices: [{

                choice: {

                    type: String
                }
                
            }],

            correctAnswer: {
                type: String
            },

            duration: {
                type: Number
            }  
    
    }],

      tutor: {

          type: Schema.ObjectId
      },

      ques: [{

        type: Schema.ObjectId,
        ref: 'Question'

      }]
    
});


//apply ExamSchema level plugins


//exports Exam model
module.exports = mongoose.model('Exam', ExamSchema);