/**
 * TrainingApi
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2007PerTagPerformance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2007PerTagPerformance'));
  } else {
    // Browser globals (root is window)
    if (!root.TrainingApi) {
      root.TrainingApi = {};
    }
    root.TrainingApi.InlineResponse2007 = factory(root.TrainingApi.ApiClient, root.TrainingApi.InlineResponse2007PerTagPerformance);
  }
}(this, function(ApiClient, InlineResponse2007PerTagPerformance) {
  'use strict';




  /**
   * The InlineResponse2007 model module.
   * @module model/InlineResponse2007
   * @version 1.0
   */

  /**
   * Constructs a new <code>InlineResponse2007</code>.
   * Represents the detailed performance data for a trained iteration
   * @alias module:model/InlineResponse2007
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PerTagPerformance')) {
        obj['PerTagPerformance'] = ApiClient.convertToType(data['PerTagPerformance'], [InlineResponse2007PerTagPerformance]);
      }
      if (data.hasOwnProperty('Precision')) {
        obj['Precision'] = ApiClient.convertToType(data['Precision'], 'Number');
      }
      if (data.hasOwnProperty('PrecisionStdDeviation')) {
        obj['PrecisionStdDeviation'] = ApiClient.convertToType(data['PrecisionStdDeviation'], 'Number');
      }
      if (data.hasOwnProperty('Recall')) {
        obj['Recall'] = ApiClient.convertToType(data['Recall'], 'Number');
      }
      if (data.hasOwnProperty('RecallStdDeviation')) {
        obj['RecallStdDeviation'] = ApiClient.convertToType(data['RecallStdDeviation'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Gets the per-tag performance details for this iteration
   * @member {Array.<module:model/InlineResponse2007PerTagPerformance>} PerTagPerformance
   */
  exports.prototype['PerTagPerformance'] = undefined;
  /**
   * Gets the precision
   * @member {Number} Precision
   */
  exports.prototype['Precision'] = undefined;
  /**
   * Gets the standard deviation for the precision
   * @member {Number} PrecisionStdDeviation
   */
  exports.prototype['PrecisionStdDeviation'] = undefined;
  /**
   * Gets the recall
   * @member {Number} Recall
   */
  exports.prototype['Recall'] = undefined;
  /**
   * Gets the standard deviation for the recall
   * @member {Number} RecallStdDeviation
   */
  exports.prototype['RecallStdDeviation'] = undefined;



  return exports;
}));


