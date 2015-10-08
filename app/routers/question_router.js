'use strict';
/**
 * Question Router
 *
 * @description :: Server-side router for managing Question.
 */

//dependencies
var path = require('path');
var express = require('express');
var router = express.Router();
var controller = require(path.join(__dirname, '..', 'controllers', 'question_controller'));

/**
 * Handle Http GET on /questions
 * @description display a list of all questions
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/questions', function(request, response, next) {
    controller.index(request, response, next);
});


/**
 * Handle Http GET on /questions/new
 * @description return an HTML form for creating a new question
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/questions/new', function(request, response, next) {
    controller.new(request, response, next);
});


/**
 * Handle Http POST on /questions
 * @description create a new question
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.post('/questions', function(request, response, next) {
    controller.create(request, response, next);
});


/**
 * Handle Http GET on /questions/:id
 * @description display a specific question
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/questions/:id', function(request, response, next) {
    controller.show(request, response, next);
});


/**
 * Handle Http GET on /questions/:id/edit
 * @description return an HTML form for editing a specific question
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/questions/:id/edit', function(request, response, next) {
    controller.edit(request, response, next);
});


/**
 * Handle Http PUT on /questions/:id
 * @description update a specific question
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.put('/questions/:id', function(request, response, next) {
    controller.update(request, response, next);
});


/**
 * Handle Http PATCH on /questions/:id
 * @description update a specific question
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.patch('/questions/:id', function(request, response, next) {
    controller.update(request, response, next);
});


/**
 * Handle Http DELETE on /questions/:id
 * @description delete a specific question
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.delete('/questions/:id', function(request, response, next) {
    controller.destroy(request, response, next);
});


/**
 * exports questions router
 * @type {Object}
 */
module.exports = router;