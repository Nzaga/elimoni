'use strict';

/**
 * Exam controller specification
 *
 * @description :: Server-side controller specification for Exam
 */

//dependencies
var path = require('path');
var expect = require('chai').expect;
var faker = require('faker');
var respond = require('express-respond')();
var Request = require('mock-express-request');
var Response = require('mock-express-response');
var ExamController = require(path.join(__dirname, '..', '..', 'app', 'controllers', 'exam_controller'));

var _exam_;

describe('Exam Controller', function() {
    before(function(done) {
        var __exam__ = {
			subject: faker.lorem.words(1)[0],
			seriesNo: faker.random.number({ min:0}),
			published: faker.date.past(4),
			released: faker.date.past(4),
			fee: faker.random.number({ min:0}),
			students: faker.random.number({ min:0}),
			totalAmount: faker.random.number({ min:0}),
			weekStudents: faker.random.number({ min:0}),
			weekTotal: faker.random.number({ min:0}),
			time: faker.lorem.words(1)[0],
			instruction: faker.lorem.words(1)[0],
			level: faker.lorem.words(1)[0],
			status: faker.lorem.words(1)[0],
			question: faker.lorem.words(1)[0],
		};

        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            body: __exam__
        });

        var response = new Response({
            request: request,
            finish: function() {
                _exam_ = response._getJSON();
                //TODO handle response errors
                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        ExamController.create(request, response);
    });


    it('should be able to create new exam on ExamController#create', function(done) {
        var __exam__ = {
			subject: faker.lorem.words(1)[0],
			seriesNo: faker.random.number({ min:0}),
			published: faker.date.past(4),
			released: faker.date.past(4),
			fee: faker.random.number({ min:0}),
			students: faker.random.number({ min:0}),
			totalAmount: faker.random.number({ min:0}),
			weekStudents: faker.random.number({ min:0}),
			weekTotal: faker.random.number({ min:0}),
			time: faker.lorem.words(1)[0],
			instruction: faker.lorem.words(1)[0],
			level: faker.lorem.words(1)[0],
			status: faker.lorem.words(1)[0],
			question: faker.lorem.words(1)[0],
		};

        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            body: __exam__
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __exam = response._getJSON();

                //TODO handle response errors
                expect(response.statusCode).to.be.equal(201);

                expect(__exam).to.not.be.null;
                expect(__exam).to.not.be.undefined;
                expect(__exam._id).to.exist;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        ExamController.create(request, response);
    });

    
    it('should be able to find existing exam on ExamController#show', function(done) {
        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            params: {
                id: _exam_._id
            }
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __exam = response._getJSON();

                expect(response.statusCode).to.be.equal(200);

                expect(__exam).to.not.be.null;
                expect(__exam).to.not.be.undefined;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        ExamController.show(request, response);
    });
    

    it('should be able to update existing exam on ExamController#update', function(done) {
        var __exam__ = {
			subject: faker.lorem.words(1)[0],
			seriesNo: faker.random.number({ min:0}),
			published: faker.date.past(4),
			released: faker.date.past(4),
			fee: faker.random.number({ min:0}),
			students: faker.random.number({ min:0}),
			totalAmount: faker.random.number({ min:0}),
			weekStudents: faker.random.number({ min:0}),
			weekTotal: faker.random.number({ min:0}),
			time: faker.lorem.words(1)[0],
			instruction: faker.lorem.words(1)[0],
			level: faker.lorem.words(1)[0],
			status: faker.lorem.words(1)[0],
			question: faker.lorem.words(1)[0],
		};

        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            params: {
                id: _exam_._id
            },
            body: __exam__
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __exam = response._getJSON();

                expect(response.statusCode).to.be.equal(200);

                expect(__exam).to.not.be.null;
                expect(__exam).to.not.be.undefined;
                expect(__exam._id).to.exist;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        ExamController.update(request, response);

    });

    
    it('should be able to delete existing exam on ExamController#destroy', function(done) {
        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            params: {
                id: _exam_._id
            }
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __exam = response._getJSON();

                expect(response.statusCode).to.be.equal(200);

                expect(__exam).to.not.be.null;
                expect(__exam).to.not.be.undefined;
                expect(__exam._id).to.exist;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        ExamController.destroy(request, response);
    });


    it('should be able to list existing exams on ExamController#index', function(done) {
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
                expect(_data.exams.length).to.be.above(0);

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        ExamController.index(request, response);

    });

    
    after(function(done) {
        //TODO write spec cleanup
        done();
    });

});