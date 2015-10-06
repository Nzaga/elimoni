'use strict';

/**
 * Tutor controller specification
 *
 * @description :: Server-side controller specification for Tutor
 */

//dependencies
var path = require('path');
var expect = require('chai').expect;
var faker = require('faker');
var respond = require('express-respond')();
var Request = require('mock-express-request');
var Response = require('mock-express-response');
var TutorController = require(path.join(__dirname, '..', '..', 'app', 'controllers', 'tutor_controller'));

var _tutor_;

describe('Tutor Controller', function() {
    before(function(done) {
        var __tutor__ = {
			center: faker.lorem.words(1)[0],
			name: faker.lorem.words(1)[0],
			title: faker.lorem.words(1)[0],
			school: faker.lorem.words(1)[0],
			subject: faker.lorem.words(1)[0],
			testPrepared: faker.lorem.words(1)[0],
			publish: faker.random.number({ min:0}),
			release: faker.random.number({ min:0})
		};

        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            body: __tutor__
        });

        var response = new Response({
            request: request,
            finish: function() {
                _tutor_ = response._getJSON();
                //TODO handle response errors
                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        TutorController.create(request, response);
    });


    it('should be able to create new tutor on TutorController#create', function(done) {
        var __tutor__ = {
			center: faker.lorem.words(1)[0],
			name: faker.lorem.words(1)[0],
			title: faker.lorem.words(1)[0],
			school: faker.lorem.words(1)[0],
			subject: faker.lorem.words(1)[0],
			testPrepared: faker.lorem.words(1)[0],
			publish: faker.random.number({ min:0}),
			release: faker.random.number({ min:0})
		};

        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            body: __tutor__
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __tutor = response._getJSON();

                //TODO handle response errors
                expect(response.statusCode).to.be.equal(201);

                expect(__tutor).to.not.be.null;
                expect(__tutor).to.not.be.undefined;
                expect(__tutor._id).to.exist;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        TutorController.create(request, response);
    });

    
    it('should be able to find existing tutor on TutorController#show', function(done) {
        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            params: {
                id: _tutor_._id
            }
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __tutor = response._getJSON();

                expect(response.statusCode).to.be.equal(200);

                expect(__tutor).to.not.be.null;
                expect(__tutor).to.not.be.undefined;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        TutorController.show(request, response);
    });
    

    it('should be able to update existing tutor on TutorController#update', function(done) {
        var __tutor__ = {
			center: faker.lorem.words(1)[0],
			name: faker.lorem.words(1)[0],
			title: faker.lorem.words(1)[0],
			school: faker.lorem.words(1)[0],
			subject: faker.lorem.words(1)[0],
			testPrepared: faker.lorem.words(1)[0],
			publish: faker.random.number({ min:0}),
			release: faker.random.number({ min:0})
		};

        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            params: {
                id: _tutor_._id
            },
            body: __tutor__
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __tutor = response._getJSON();

                expect(response.statusCode).to.be.equal(200);

                expect(__tutor).to.not.be.null;
                expect(__tutor).to.not.be.undefined;
                expect(__tutor._id).to.exist;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        TutorController.update(request, response);

    });

    
    it('should be able to delete existing tutor on TutorController#destroy', function(done) {
        var request = new Request({
            headers: {
                'Accept': 'application/json'
            },
            params: {
                id: _tutor_._id
            }
        });

        var response = new Response({
            request: request,
            finish: function() {
                var __tutor = response._getJSON();

                expect(response.statusCode).to.be.equal(200);

                expect(__tutor).to.not.be.null;
                expect(__tutor).to.not.be.undefined;
                expect(__tutor._id).to.exist;

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        TutorController.destroy(request, response);
    });


    it('should be able to list existing tutors on TutorController#index', function(done) {
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
                expect(_data.tutors.length).to.be.above(0);

                //TODO application specific assertions

                done();
            }
        });

        //patch response with respond methods
        respond(request,response,function(){});

        TutorController.index(request, response);

    });

    
    after(function(done) {
        //TODO write spec cleanup
        done();
    });

});