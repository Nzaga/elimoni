'use strict';

/**
 * Question model specification
 *
 * @description :: Server-side model specification for Question
 */

//dependencies
var mongoose = require('mongoose');
var faker = require('faker');
var expect = require('chai').expect;
var Question = mongoose.model('Question');
var _question_;


describe('Question Model', function() {
    before(function(done) {
        var __question__ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};

        Question.create(__question__, function(error, question) {
            _question_ = question;
            done(error, question);
        });
    });

    
    it('should be able to create new question', function(done) {
        var __question__ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};

        Question.create(__question__, function(error, question) {
            
            expect(error).to.not.exist;
            expect(question).to.exist;
            
            //TODO application specific assertions

            done(error, question);
        });
    });

    
    it('should be able to find existing question', function(done) {
        Question.findById(_question_._id, function(error, question) {

            expect(error).to.not.exist;
            expect(question).to.exist;
            
            //TODO application specific assertions
            
            done(error, question);
        });
    });

    
    it('should be able to update existing question', function(done) {
        var __question__ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};

        Question.findByIdAndUpdate(_question_._id, __question__,{
            upsert: true,
            new: true
        }, function(error, question) {
            //update question references
            _question_ = question;

            expect(error).to.not.exist;
            expect(question).to.exist;
            
            //TODO application specific assertions
            
            done(error, question);
        });
    });

    
    it('should be able to delete existing question', function(done) {
        Question.findByIdAndRemove(_question_._id, function(error, question) {

            expect(error).to.not.exist;
            expect(question).to.exist;
            
            //TODO application specific assertions
            
            done(error, question);
        });
    });


    it('should be able to list existing questions', function(done) {
        Question.paginate({}, {
            page: 1,
            limit: 10
        }, function(error, questions, pages, total) {

            expect(error).to.not.exist;
            expect(pages).to.exist;
            expect(questions).to.exist;
            expect(total).to.exist;
            
            //TODO application specific assertions
            
            done(error, questions);
        });
    });


    //TODO alternative test specs

    
    after(function(done) {
        //TODO write spec cleanup
        done();
    });

});