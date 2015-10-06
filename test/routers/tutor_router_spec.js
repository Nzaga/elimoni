'use strict';

/**
 * Tutor router specification
 *
 * @description :: Server-side router specification for Tutor
 */

//dependencies
var path = require('path');
var expect = require('chai').expect;
var faker = require('faker');
var request = require('supertest');
var app = require(path.join(__dirname, '..', '..', 'app', 'application'));
var tutor;

describe('Tutor Router', function() {
    before(function(done) {
        var _tutor_ = {
			center: faker.lorem.words(1)[0],
			name: faker.lorem.words(1)[0],
			title: faker.lorem.words(1)[0],
			school: faker.lorem.words(1)[0],
			subject: faker.lorem.words(1)[0],
			testPrepared: faker.lorem.words(1)[0],
			publish: faker.random.number({ min:0}),
			release: faker.random.number({ min:0})
		};

        request(app)
            .post('/tutors')
            .send(_tutor_)
            .set('Accept', 'application/json')
            .expect(201)
            .expect('Content-Type', /json/)
            .end(function(error, response) {
                tutor = JSON.parse(response.text);
                done(error, response);
            });
    });

    
    it('should be able to create new tutor when http post on /tutors', function(done) {
        var _tutor_ = {
			center: faker.lorem.words(1)[0],
			name: faker.lorem.words(1)[0],
			title: faker.lorem.words(1)[0],
			school: faker.lorem.words(1)[0],
			subject: faker.lorem.words(1)[0],
			testPrepared: faker.lorem.words(1)[0],
			publish: faker.random.number({ min:0}),
			release: faker.random.number({ min:0})
		};
        
        request(app)
            .post('/tutors')
            .send(_tutor_)
            .set('Accept', 'application/json')
            .expect(201)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;
                
                //TODO more tutor response assertions

                done(error, response);
            });
    });

    
    it('should be able to find tutor when http get on /tutors/:id', function(done) {
        request(app)
            .get('/tutors/'+ tutor._id)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more tutor response assertions

                done(error, response);
            });
    });

    
    it('should be able to update existing tutor when http put on /tutors/:id', function(done) {
        var _tutor_ = {
			center: faker.lorem.words(1)[0],
			name: faker.lorem.words(1)[0],
			title: faker.lorem.words(1)[0],
			school: faker.lorem.words(1)[0],
			subject: faker.lorem.words(1)[0],
			testPrepared: faker.lorem.words(1)[0],
			publish: faker.random.number({ min:0}),
			release: faker.random.number({ min:0})
		};

        request(app)
            .put('/tutors/'+ tutor._id)
            .send(_tutor_)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more tutor response assertions

                done(error, response);
            });
    });

    
    it('should be able to update existing tutor when http patch on /tutors/:id', function(done) {
        var _tutor_ = {
			center: faker.lorem.words(1)[0],
			name: faker.lorem.words(1)[0],
			title: faker.lorem.words(1)[0],
			school: faker.lorem.words(1)[0],
			subject: faker.lorem.words(1)[0],
			testPrepared: faker.lorem.words(1)[0],
			publish: faker.random.number({ min:0}),
			release: faker.random.number({ min:0})
		};

        request(app)
            .patch('/tutors/'+ tutor._id)
            .send(_tutor_)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more tutor response assertions

                done(error, response);
            });
    });

    
    it('should be able to delete existing tutor when http delete on /tutors/:id', function(done) {
       request(app)
            .delete('/tutors/'+ tutor._id)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more tutor response assertions

                done(error, response);
            });
    });


    it('should be able to list tutors when http get on /tutors', function(done) {
        request(app)
            .get('/tutors')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;
                
                //TODO more tutors response assertions

                done(error, response);
            });
    });


    after(function(done) {
        //TODO write spec cleanup
        done();
    });

});