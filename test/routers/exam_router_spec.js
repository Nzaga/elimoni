'use strict';

/**
 * Exam router specification
 *
 * @description :: Server-side router specification for Exam
 */

//dependencies
var path = require('path');
var expect = require('chai').expect;
var faker = require('faker');
var request = require('supertest');
var app = require(path.join(__dirname, '..', '..', 'app', 'application'));
var exam;

describe('Exam Router', function() {
    before(function(done) {
        var _exam_ = {
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

        request(app)
            .post('/exams')
            .send(_exam_)
            .set('Accept', 'application/json')
            .expect(201)
            .expect('Content-Type', /json/)
            .end(function(error, response) {
                exam = JSON.parse(response.text);
                done(error, response);
            });
    });

    
    it('should be able to create new exam when http post on /exams', function(done) {
        var _exam_ = {
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
        
        request(app)
            .post('/exams')
            .send(_exam_)
            .set('Accept', 'application/json')
            .expect(201)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;
                
                //TODO more exam response assertions

                done(error, response);
            });
    });

    
    it('should be able to find exam when http get on /exams/:id', function(done) {
        request(app)
            .get('/exams/'+ exam._id)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more exam response assertions

                done(error, response);
            });
    });

    
    it('should be able to update existing exam when http put on /exams/:id', function(done) {
        var _exam_ = {
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

        request(app)
            .put('/exams/'+ exam._id)
            .send(_exam_)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more exam response assertions

                done(error, response);
            });
    });

    
    it('should be able to update existing exam when http patch on /exams/:id', function(done) {
        var _exam_ = {
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

        request(app)
            .patch('/exams/'+ exam._id)
            .send(_exam_)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more exam response assertions

                done(error, response);
            });
    });

    
    it('should be able to delete existing exam when http delete on /exams/:id', function(done) {
       request(app)
            .delete('/exams/'+ exam._id)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;

                //TODO more exam response assertions

                done(error, response);
            });
    });


    it('should be able to list exams when http get on /exams', function(done) {
        request(app)
            .get('/exams')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(error, response) {

                expect(error).to.not.exist;
                expect(response).to.exist;
                
                //TODO more exams response assertions

                done(error, response);
            });
    });


    after(function(done) {
        //TODO write spec cleanup
        done();
    });

});