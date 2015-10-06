'use strict';

/**
 * Tutor model specification
 *
 * @description :: Server-side model specification for Tutor
 */

//dependencies
var mongoose = require('mongoose');
var faker = require('faker');
var expect = require('chai').expect;
var Tutor = mongoose.model('Tutor');
var _tutor_;


describe('Tutor Model', function() {
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

        Tutor.create(__tutor__, function(error, tutor) {
            _tutor_ = tutor;
            done(error, tutor);
        });
    });

    
    it('should be able to create new tutor', function(done) {
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

        Tutor.create(__tutor__, function(error, tutor) {
            
            expect(error).to.not.exist;
            expect(tutor).to.exist;
            
            //TODO application specific assertions

            done(error, tutor);
        });
    });

    
    it('should be able to find existing tutor', function(done) {
        Tutor.findById(_tutor_._id, function(error, tutor) {

            expect(error).to.not.exist;
            expect(tutor).to.exist;
            
            //TODO application specific assertions
            
            done(error, tutor);
        });
    });

    
    it('should be able to update existing tutor', function(done) {
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

        Tutor.findByIdAndUpdate(_tutor_._id, __tutor__,{
            upsert: true,
            new: true
        }, function(error, tutor) {
            //update tutor references
            _tutor_ = tutor;

            expect(error).to.not.exist;
            expect(tutor).to.exist;
            
            //TODO application specific assertions
            
            done(error, tutor);
        });
    });

    
    it('should be able to delete existing tutor', function(done) {
        Tutor.findByIdAndRemove(_tutor_._id, function(error, tutor) {

            expect(error).to.not.exist;
            expect(tutor).to.exist;
            
            //TODO application specific assertions
            
            done(error, tutor);
        });
    });


    it('should be able to list existing tutors', function(done) {
        Tutor.paginate({}, {
            page: 1,
            limit: 10
        }, function(error, tutors, pages, total) {

            expect(error).to.not.exist;
            expect(pages).to.exist;
            expect(tutors).to.exist;
            expect(total).to.exist;
            
            //TODO application specific assertions
            
            done(error, tutors);
        });
    });


    //TODO alternative test specs

    
    after(function(done) {
        //TODO write spec cleanup
        done();
    });

});