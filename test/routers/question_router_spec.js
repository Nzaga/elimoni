'use strict';

/**
 * Question router specification
 *
 * @description :: Server-side router specification for Question
 */

//dependencies
var path = require('path');
var expect = require('chai').expect;
var faker = require('faker');
var request = require('supertest');
var app = require(path.join(__dirname, '..', '..', 'app', 'application'));
var question;

describe('Question Router', function() {
    before(function(done) {
        var _question_ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};

        request(app)
            .post('/questions')
            .send(_question_)
            .set('Accept', 'application/json')
            .expect(201)
            .expect('Content-Type', /json/)
            .end(function(error, response) {
                question = JSON.parse(response.text);
                done(error, response);
            });
    });

    
    it('should be able to create new question when http post on /questions', function(done) {
        var _question_ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};
        
        request(app)
            .post('/questions')
            .send(_question_)
            .set('Accept', 'application/json')
            .expect(201)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;
                
                //TODO more question response assertions

                done(error, response);
            });
    });

    
    it('should be able to find question when http get on /questions/:id', function(done) {
        request(app)
            .get('/questions/'+ question._id)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more question response assertions

                done(error, response);
            });
    });

    
    it('should be able to update existing question when http put on /questions/:id', function(done) {
        var _question_ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};

        request(app)
            .put('/questions/'+ question._id)
            .send(_question_)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more question response assertions

                done(error, response);
            });
    });

    
    it('should be able to update existing question when http patch on /questions/:id', function(done) {
        var _question_ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};

        request(app)
            .patch('/questions/'+ question._id)
            .send(_question_)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more question response assertions

                done(error, response);
            });
    });

    
    it('should be able to delete existing question when http delete on /questions/:id', function(done) {
       request(app)
            .delete('/questions/'+ question._id)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more question response assertions

                done(error, response);
            });
    });


    it('should be able to list questions when http get on /questions', function(done) {
        request(app)
            .get('/questions')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;
                
                //TODO more questions response assertions

                done(error, response);
            });
    });


    after(function(done) {
        //TODO write spec cleanup
        done();
    });

});