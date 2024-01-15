/**
 * Tunnelbot - OpenAPI 3.0
 * This is the API specification for the tunnelbot backend.
 *
 * The version of the OpenAPI document: 1
 * Contact: info@farmersandrobots.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TunnelbotOpenApi30);
  }
}(this, function(expect, TunnelbotOpenApi30) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TunnelbotOpenApi30.Event();
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

  describe('Event', function() {
    it('should create an instance of Event', function() {
      // uncomment below and update the code to test Event
      //var instance = new TunnelbotOpenApi30.Event();
      //expect(instance).to.be.a(TunnelbotOpenApi30.Event);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TunnelbotOpenApi30.Event();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new TunnelbotOpenApi30.Event();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new TunnelbotOpenApi30.Event();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new TunnelbotOpenApi30.Event();
      //expect(instance).to.be();
    });

    it('should have the property operator (base name: "operator")', function() {
      // uncomment below and update the code to test the property operator
      //var instance = new TunnelbotOpenApi30.Event();
      //expect(instance).to.be();
    });

  });

}));