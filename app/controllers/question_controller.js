'use strict';

//dependencies
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Exam = mongoose.model('Exam');

/**
 * Question Controller
 *
 * @description :: Server-side logic for managing Question.
 */
module.exports = {
    /**
     * questions.index()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    index: function(request, response, next) {
        Question
            .paginate({},{
                    page: request.query.page,
                    limit: request.query.limit
                },
                function(error, questions, pages, total) {
                    if (error) {
                        next(error);
                    } else {
                        response
                            .ok('questions/index.html',{
                                questions: questions,
                                pages: pages,
                                count: total
                            });
                    }
                });
    },


    /**
     * questions.new()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    new: function(request, response) {
        response
            .ok('questions/new.html', {
                errors: null,
                question: new Question()
            });
    },


    /**
     * questions.create()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    create: function(request, response, next) {
        Question
            .create(request.body, function(error, question) {
                if (error) {
                    next(error);
                } else {
                    response.format({
                        'text/html': function() {
                            response
                                .redirect('/questions');
                        },

                        'default': function() {
                            response
                                .created(question);
                        }
                    });
                }
            });
    },


    /**
     * questions.show()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    show: function(request, response, next) {
        Question
            .findById(request.params.id, function(error, question) {
                if (error) {
                    next(error);
                } else {
                    response
                        .ok('questions/show.html', {
                            question: question
                        });
                }
            });
    },


    /**
     * questions.edit()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    edit: function(request, response, next) {
        Question
            .findById(request.params.id, function(error, question) {
                if (error) {
                    next(error);
                } else {
                    response
                        .ok('questions/edit.html', {
                            question: question,
                            errors: null
                        });
                }
            });
    },


    /**
     * questions.update()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    update: function(request, response, next) {
        console.log('update question');
        console.log(request.session.tutor);
        console.log(request.session.exam._id);
        Question
            .findByIdAndUpdate(
                request.params.id,
                request.body,
                {upsert:true,new:true},
                function(error, question) {
                    if (error) {
                        next(error);
                    } else {
                        console.log(question._id);       
                        Exam.findByIdAndUpdate(
                            request.session.exam._id, 
                            { $push: {'ques': question._id}}, 
                            {safe: true,upsert:true,new:true},
                            function(error,exam){
                            if(error){
                                console.log('Exam not obtaied');
                                next(error);
                            }else{
                                console.log('Exam obtained');
                                console.log(exam);

                                response
                                    .ok('questions/new.html', {
                                        errors: null,
                                        question: new Question(),
                                        exam: exam
                                    });
                            }
                        });
                        

                    }
                });
    },


    /**
     * questions.destroy()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    destroy: function(request, response, next) {
        Question
            .findByIdAndRemove(
                request.params.id,
                function(error, question) {
                    if (error) {
                        next(error);
                    } else {
                        response.format({
                            'text/html': function() {
                                response
                                    .redirect('/questions');
                            },

                            'default': function() {
                                response
                                    .ok(question);
                            }
                        });
                    }
                });
    }

};