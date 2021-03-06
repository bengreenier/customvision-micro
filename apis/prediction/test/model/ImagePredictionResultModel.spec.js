/**
 * PredictionEndpoint
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PredictionEndpoint);
  }
}(this, function(expect, PredictionEndpoint) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PredictionEndpoint.ImagePredictionResultModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ImagePredictionResultModel', function() {
    it('should create an instance of ImagePredictionResultModel', function() {
      // uncomment below and update the code to test ImagePredictionResultModel
      //var instane = new PredictionEndpoint.ImagePredictionResultModel();
      //expect(instance).to.be.a(PredictionEndpoint.ImagePredictionResultModel);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new PredictionEndpoint.ImagePredictionResultModel();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "Project")', function() {
      // uncomment below and update the code to test the property project
      //var instane = new PredictionEndpoint.ImagePredictionResultModel();
      //expect(instance).to.be();
    });

    it('should have the property iteration (base name: "Iteration")', function() {
      // uncomment below and update the code to test the property iteration
      //var instane = new PredictionEndpoint.ImagePredictionResultModel();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "Created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new PredictionEndpoint.ImagePredictionResultModel();
      //expect(instance).to.be();
    });

    it('should have the property predictions (base name: "Predictions")', function() {
      // uncomment below and update the code to test the property predictions
      //var instane = new PredictionEndpoint.ImagePredictionResultModel();
      //expect(instance).to.be();
    });

  });

}));
