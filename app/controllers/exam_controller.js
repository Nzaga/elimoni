'use strict';

//dependencies
var mongoose = require('mongoose');
var Exam = mongoose.model('Exam');

/**
 * Exam Controller
 *
 * @description :: Server-side logic for managing Exam.
 */
module.exports = {
    /**
     * exams.index()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    index: function(request, response, next) {
        Exam
            .paginate({},{
                    page: request.query.page,
                    limit: request.query.limit
                },
                function(error, exams, pages, total) {
                    if (error) {
                        next(error);
                    } else {
                        response
                            .ok('exams/index.html',{
                                exams: exams,
                                pages: pages,
                                count: total
                            });
                    }
                });
    },


    /**
     * exams.new()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    new: function(request, response) {
        response
            .ok('exams/new.html', {
                errors: null,
                exam: new Exam()
            });
    },


    /**
     * exams.create()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    create: function(request, response, next) {
        Exam
            .create(request.body, function(error, exam) {
                if (error) {
                    next(error);
                } else {
                    response.format({
                        'text/html': function() {
                            response
                                .redirect('/exams');
                        },

                        'default': function() {
                            response
                                .created(exam);
                        }
                    });
                }
            });
    },


    /**
     * exams.show()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    show: function(request, response, next) {
        Exam
            .findById(request.params.id, function(error, exam) {
                if (error) {
                    next(error);
                } else {
                    response
                        .ok('exams/show.html', {
                            exam: exam
                        });
                }
            });
    },


    /**
     * exams.edit()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    edit: function(request, response, next) {
        Exam
            .findById(request.params.id, function(error, exam) {
                if (error) {
                    next(error);
                } else {
                    response
                        .ok('exams/edit.html', {
                            exam: exam,
                            errors: null
                        });
                }
            });
    },


    /**
     * exams.update()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    update: function(request, response, next) {
        Exam
            .findByIdAndUpdate(
                request.params.id,
                request.body,
                {upsert:true,new:true},
                function(error, exam) {
                    if (error) {
                        next(error);
                    } else {
                        response.format({
                            'text/html': function() {
                                response
                                    .redirect('/exams');
                            },

                            'default': function() {
                                response
                                    .ok(exam);
                            }
                        });

                    }
                });
    },


    /**
     * exams.destroy()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    destroy: function(request, response, next) {
        Exam
            .findByIdAndRemove(
                request.params.id,
                function(error, exam) {
                    if (error) {
                        next(error);
                    } else {
                        response.format({
                            'text/html': function() {
                                response
                                    .redirect('/exams');
                            },

                            'default': function() {
                                response
                                    .ok(exam);
                            }
                        });
                    }
                });
    }

};