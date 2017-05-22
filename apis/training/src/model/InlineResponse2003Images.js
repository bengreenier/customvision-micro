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
    define(['ApiClient', 'model/InlineResponse2002'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2002'));
  } else {
    // Browser globals (root is window)
    if (!root.TrainingApi) {
      root.TrainingApi = {};
    }
    root.TrainingApi.InlineResponse2003Images = factory(root.TrainingApi.ApiClient, root.TrainingApi.InlineResponse2002);
  }
}(this, function(ApiClient, InlineResponse2002) {
  'use strict';




  /**
   * The InlineResponse2003Images model module.
   * @module model/InlineResponse2003Images
   * @version 1.0
   */

  /**
   * Constructs a new <code>InlineResponse2003Images</code>.
   * @alias module:model/InlineResponse2003Images
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2003Images</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003Images} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003Images} The populated <code>InlineResponse2003Images</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SourceUrl')) {
        obj['SourceUrl'] = ApiClient.convertToType(data['SourceUrl'], 'String');
      }
      if (data.hasOwnProperty('Image')) {
        obj['Image'] = InlineResponse2002.constructFromObject(data['Image']);
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} SourceUrl
   */
  exports.prototype['SourceUrl'] = undefined;
  /**
   * @member {module:model/InlineResponse2002} Image
   */
  exports.prototype['Image'] = undefined;
  /**
   * @member {module:model/InlineResponse2003Images.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",
    /**
     * value: "OKDuplicate"
     * @const
     */
    "OKDuplicate": "OKDuplicate",
    /**
     * value: "ErrorSource"
     * @const
     */
    "ErrorSource": "ErrorSource",
    /**
     * value: "ErrorImageFormat"
     * @const
     */
    "ErrorImageFormat": "ErrorImageFormat",
    /**
     * value: "ErrorImageSize"
     * @const
     */
    "ErrorImageSize": "ErrorImageSize",
    /**
     * value: "ErrorStorage"
     * @const
     */
    "ErrorStorage": "ErrorStorage",
    /**
     * value: "ErrorLimitExceed"
     * @const
     */
    "ErrorLimitExceed": "ErrorLimitExceed",
    /**
     * value: "ErrorUnknown"
     * @const
     */
    "ErrorUnknown": "ErrorUnknown"  };


  return exports;
}));

