'use strict';
/**
 * Exam Router
 *
 * @description :: Server-side router for managing Exam.
 */

//dependencies
var path = require('path');
var express = require('express');
var router = express.Router();
var controller = require(path.join(__dirname, '..', 'controllers', 'exam_controller'));

/**
 * Handle Http GET on /exams
 * @description display a list of all exams
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/exams', function(request, response, next) {
    controller.index(request, response, next);
});


/**
 * Handle Http GET on /exams/new
 * @description return an HTML form for creating a new exam
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/exams/new', function(request, response, next) {
    controller.new(request, response, next);
});


/**
 * Handle Http POST on /exams
 * @description create a new exam
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.post('/exams', function(request, response, next) {
    controller.create(request, response, next);
});


/**
 * Handle Http GET on /exams/:id
 * @description display a specific exam
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/exams/:id', function(request, response, next) {
    controller.show(request, response, next);
});


/**
 * Handle Http GET on /exams/:id/edit
 * @description return an HTML form for editing a specific exam
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.get('/exams/:id/edit', function(request, response, next) {
    controller.edit(request, response, next);
});


/**
 * Handle Http PUT on /exams/:id
 * @description update a specific exam
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.put('/exams/:id', function(request, response, next) {
    controller.update(request, response, next);
});


/**
 * Handle Http PATCH on /exams/:id
 * @description update a specific exam
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.patch('/exams/:id', function(request, response, next) {
    controller.update(request, response, next);
});


/**
 * Handle Http DELETE on /exams/:id
 * @description delete a specific exam
 * @param  {HttpRequest} request  a http request
 * @param  {HttpResponse} response a http response
 */
router.delete('/exams/:id', function(request, response, next) {
    controller.destroy(request, response, next);
});


/**
 * exports exams router
 * @type {Object}
 */
module.exports = router;