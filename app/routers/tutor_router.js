'use strict';
/**
 * Tutor Router
 *
 * @description :: Server-side router for managing Tutor.
 */

//dependencies
var path = require('path');
var express = require('express');
var router = express.Router();
var controller = require(path.join(__dirname, '..', 'controllers', 'tutor_controller'));

/**
 * Handle Http GET on /tutors
 * @description display a list of all tutors
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/tutors', function(request, response, next) {
    controller.index(request, response, next);
});

/**
 * Hadle Http Get on /tutors/login
 * @description displys the login page for tutor
 * @param  {HttpRequest} request a htttp request 
 * @param  {HttpRespond} response a http respond               
 */
router.get('/tutors/login', function(request, response, next){
	controller.login(request, response, next);
});

router.post('/tutors/login', function(request, response, next){
	controller.auth(request, response, next);
});

/**
 * Handle Http GET on /tutors/new
 * @description return an HTML form for creating a new tutor
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/tutors/new', function(request, response, next) {
    controller.new(request, response, next);
});


/**
 * Handle Http POST on /tutors
 * @description create a new tutor
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.post('/tutors', function(request, response, next) {
    controller.create(request, response, next);
});


/**
 * Handle Http GET on /tutors/:id
 * @description display a specific tutor
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/tutors/:id', function(request, response, next) {
    controller.show(request, response, next);
});


/**
 * Handle Http GET on /tutors/:id/edit
 * @description return an HTML form for editing a specific tutor
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/tutors/:id/edit', function(request, response, next) {
    controller.edit(request, response, next);
});


/**
 * Handle Http PUT on /tutors/:id
 * @description update a specific tutor
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.put('/tutors/:id', function(request, response, next) {
    controller.update(request, response, next);
});


/**
 * Handle Http PATCH on /tutors/:id
 * @description update a specific tutor
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.patch('/tutors/:id', function(request, response, next) {
    controller.update(request, response, next);
});


/**
 * Handle Http DELETE on /tutors/:id
 * @description delete a specific tutor
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.delete('/tutors/:id', function(request, response, next) {
    controller.destroy(request, response, next);
});


/**
 * exports tutors router
 * @type {Object}
 */
module.exports = router;