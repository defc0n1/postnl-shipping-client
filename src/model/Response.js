/**
 * Postnl shipping client
 * A NodeJS API client for PostNL shipping services. Features include Generating barcdes, Generating labels in Base64
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResponseMergedLabels', 'model/ResponseResponseShipments'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResponseMergedLabels'), require('./ResponseResponseShipments'));
  } else {
    // Browser globals (root is window)
    if (!root.PostnlShippingClient) {
      root.PostnlShippingClient = {};
    }
    root.PostnlShippingClient.Response = factory(root.PostnlShippingClient.ApiClient, root.PostnlShippingClient.ResponseMergedLabels, root.PostnlShippingClient.ResponseResponseShipments);
  }
}(this, function(ApiClient, ResponseMergedLabels, ResponseResponseShipments) {
  'use strict';




  /**
   * The Response model module.
   * @module model/Response
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Response</code>.
   * @alias module:model/Response
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response} obj Optional instance to populate.
   * @return {module:model/Response} The populated <code>Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('MergedLabels')) {
        obj['MergedLabels'] = ApiClient.convertToType(data['MergedLabels'], [ResponseMergedLabels]);
      }
      if (data.hasOwnProperty('ResponseShipments')) {
        obj['ResponseShipments'] = ApiClient.convertToType(data['ResponseShipments'], [ResponseResponseShipments]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ResponseMergedLabels>} MergedLabels
   */
  exports.prototype['MergedLabels'] = undefined;
  /**
   * @member {Array.<module:model/ResponseResponseShipments>} ResponseShipments
   */
  exports.prototype['ResponseShipments'] = undefined;



  return exports;
}));


