'use strict';

/**
 * Question controller specification
 *
 * @description :: Server-side controller specification for Question
 */

//dependencies
var path = require('path');
var expect = require('chai').expect;
var faker = require('faker');
var respond = require('express-respond')();
var Request = require('mock-express-request');
var Response = require('mock-express-response');
var QuestionController = require(path.join(__dirname, '..', '..', 'app', 'controllers', 'question_controller'));

var _question_;

describe('Question Controller', function() {
    before(function(done) {
        var __question__ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};

        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            body: __question__
        });

        var response = new Response({
            request: request,
            finish: function() {
                _question_ = response._getJSON();
                //TODO handle response errors
                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        QuestionController.create(request, response);
    });


    it('should be able to create new question on QuestionController#create', function(done) {
        var __question__ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};

        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            body: __question__
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __question = response._getJSON();

                //TODO handle response errors
                expect(response.statusCode).to.be.equal(201);

                expect(__question).to.not.be.null;
                expect(__question).to.not.be.undefined;
                expect(__question._id).to.exist;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        QuestionController.create(request, response);
    });

    
    it('should be able to find existing question on QuestionController#show', function(done) {
        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            params: {
                id: _question_._id
            }
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __question = response._getJSON();

                expect(response.statusCode).to.be.equal(200);

                expect(__question).to.not.be.null;
                expect(__question).to.not.be.undefined;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        QuestionController.show(request, response);
    });
    

    it('should be able to update existing question on QuestionController#update', function(done) {
        var __question__ = {
			no: faker.random.number({ min:0}),
			duration: faker.random.number({ min:0}),
			body: faker.lorem.words(1)[0],
			correctAnswer: faker.lorem.words(1)[0],
			choice: faker.lorem.words(1)[0],
		};

        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            params: {
                id: _question_._id
            },
            body: __question__
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __question = response._getJSON();

                expect(response.statusCode).to.be.equal(200);

                expect(__question).to.not.be.null;
                expect(__question).to.not.be.undefined;
                expect(__question._id).to.exist;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        QuestionController.update(request, response);

    });

    
    it('should be able to delete existing question on QuestionController#destroy', function(done) {
        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            params: {
                id: _question_._id
            }
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __question = response._getJSON();

                expect(response.statusCode).to.be.equal(200);

                expect(__question).to.not.be.null;
                expect(__question).to.not.be.undefined;
                expect(__question._id).to.exist;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        QuestionController.destroy(request, response);
    });


    it('should be able to list existing questions on QuestionController#index', function(done) {
       var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            query: {
                page: 1,
                limit: 10
            }
        });

        var response = new Response({
            request: request,
            finish: function() {
                var _data = response._getJSON();

                expect(_data).to.not.be.undefined;
                expect(_data).to.not.be.null;
                expect(_data.questions.length).to.be.above(0);

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        QuestionController.index(request, response);

    });

    
    after(function(done) {
        //TODO write spec cleanup
        done();
    });

});