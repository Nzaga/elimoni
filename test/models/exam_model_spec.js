'use strict';

/**
 * Exam model specification
 *
 * @description :: Server-side model specification for Exam
 */

//dependencies
var mongoose = require('mongoose');
var faker = require('faker');
var expect = require('chai').expect;
var Exam = mongoose.model('Exam');
var _exam_;


describe('Exam Model', function() {
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

        Exam.create(__exam__, function(error, exam) {
            _exam_ = exam;
            done(error, exam);
        });
    });

    
    it('should be able to create new exam', function(done) {
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

        Exam.create(__exam__, function(error, exam) {
            
            expect(error).to.not.exist;
            expect(exam).to.exist;
            
            //TODO application specific assertions

            done(error, exam);
        });
    });

    
    it('should be able to find existing exam', function(done) {
        Exam.findById(_exam_._id, function(error, exam) {

            expect(error).to.not.exist;
            expect(exam).to.exist;
            
            //TODO application specific assertions
            
            done(error, exam);
        });
    });

    
    it('should be able to update existing exam', function(done) {
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

        Exam.findByIdAndUpdate(_exam_._id, __exam__,{
            upsert: true,
            new: true
        }, function(error, exam) {
            //update exam references
            _exam_ = exam;

            expect(error).to.not.exist;
            expect(exam).to.exist;
            
            //TODO application specific assertions
            
            done(error, exam);
        });
    });

    
    it('should be able to delete existing exam', function(done) {
        Exam.findByIdAndRemove(_exam_._id, function(error, exam) {

            expect(error).to.not.exist;
            expect(exam).to.exist;
            
            //TODO application specific assertions
            
            done(error, exam);
        });
    });


    it('should be able to list existing exams', function(done) {
        Exam.paginate({}, {
            page: 1,
            limit: 10
        }, function(error, exams, pages, total) {

            expect(error).to.not.exist;
            expect(pages).to.exist;
            expect(exams).to.exist;
            expect(total).to.exist;
            
            //TODO application specific assertions
            
            done(error, exams);
        });
    });


    //TODO alternative test specs

    
    after(function(done) {
        //TODO write spec cleanup
        done();
    });

});