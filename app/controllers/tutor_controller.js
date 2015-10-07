'use strict';

//dependencies
var mongoose = require('mongoose');
var Tutor = mongoose.model('Tutor');
//var faker = require('faker');

/**
 * Tutor Controller
 *
 * @description :: Server-side logic for managing Tutor.
 */
module.exports = {
    /**
     * tutors.index()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    index: function(request, response, next) {
        Tutor
            .paginate({},{
                    page: request.query.page,
                    limit: request.query.limit
                },
                function(error, tutors, pages, total) {
                    if (error) {
                        next(error);
                    } else {
                        response
                            .ok('tutors/index.html',{
                                tutors: tutors,
                                pages: pages,
                                count: total
                            });
                    }
                });
    },

    /**
     * tutors.login
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    login: function(request, response){
        response
            .ok('tutors/login.html',{
                error: null
            });
    },

    auth: function(request, response){
        Tutor
            .authenticate(request.body,function(error, authenticable) {
                if (error) {
                    console.log(error);
                    console.log(request.body);
                } else {
                    console.log(authenticable);
                    response
                        .redirect('/tutors');
                }
            });
        
    },


    /**
     * tutors.new()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    new: function(request, response) {
        response
            .ok('tutors/new.html', {
                errors: null,
                tutor: {}
            });
    },


    /**
     * tutors.create()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    create: function(request, response, next) {
        Tutor
            .register(request.body, function(error, registerable) {
                if (error) {
                    console.log(error);
                    next(error);
                } else {
                    console.log(registerable);
                    response
                        .ok('tutors/login.html',{
                            error: null
                         });
                    
                    // response.format({
                    //     'text/html': function() {
                    //         response
                    //             .redirect('/tutors/login.html');
                    //     },

                    //     'default': function() {
                    //         response
                    //             .created(registerable);
                    //     }
                    // });
                }
            });

        
    },


    /**
     * tutors.show()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    show: function(request, response, next) {
        Tutor
            .findById(request.params.id, function(error, tutor) {
                if (error) {
                    next(error);
                } else {
                    response
                        .ok('tutors/show.html', {
                            tutor: tutor
                        });
                }
            });
    },


    /**
     * tutors.edit()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    edit: function(request, response, next) {
        Tutor
            .findById(request.params.id, function(error, tutor) {
                if (error) {
                    next(error);
                } else {
                    response
                        .ok('tutors/edit.html', {
                            tutor: tutor,
                            errors: null
                        });
                }
            });
    },


    /**
     * tutors.update()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    update: function(request, response, next) {
        Tutor
            .findByIdAndUpdate(
                request.params.id,
                request.body,
                {upsert:true,new:true},
                function(error, tutor) {
                    if (error) {
                        next(error);
                    } else {
                        response.format({
                            'text/html': function() {
                                response
                                    .redirect('/tutors');
                            },

                            'default': function() {
                                response
                                    .ok(tutor);
                            }
                        });

                    }
                });
    },


    /**
     * tutors.destroy()
     * @param  {HttpRequest} request  a http request
     * @param  {HttpResponse} response a http response
     */
    destroy: function(request, response, next) {
        Tutor
            .findByIdAndRemove(
                request.params.id,
                function(error, tutor) {
                    if (error) {
                        next(error);
                    } else {
                        response.format({
                            'text/html': function() {
                                response
                                    .redirect('/tutors');
                            },

                            'default': function() {
                                response
                                    .ok(tutor);
                            }
                        });
                    }
                });
    }

};