# PostnlShippingClient.DefaultApi

All URIs are relative to *https://api-sandbox.postnl.nl/shipment*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v11BarcodeGet**](DefaultApi.md#v11BarcodeGet) | **GET** /v1_1/barcode | Generate standard barcode
[**v21LabelPost**](DefaultApi.md#v21LabelPost) | **POST** /v2_1/label | Generate Base64 shipment label and confirm shipment


<a name="v11BarcodeGet"></a>
# **v11BarcodeGet**
> Response v11BarcodeGet(apikey, customerCode, customerNumber, type, opts)

Generate standard barcode

### Example
```javascript
var PostnlShippingClient = require('postnl_shipping_client');

var apiInstance = new PostnlShippingClient.DefaultApi();

var apikey = "apikey_example"; // String | authenticate using your API key

var customerCode = "DEVC"; // String | Customer code as known at PostNL Pakketten

var customerNumber = "11223344"; // String | Customer number as known at PostNL Pakketten

var type = "3S"; // String | Accepted values are: 2S, 3S, CC, CP, CD, CF

var opts = { 
  'serie': "000000000-999999999" // String | Barcode serie in the format '###000000-###000000', for example 100000-20000. The range must consist of a minimal difference of 100.000. Minimum length of the serie is 6 characters; maximum length is 9 characters. It is allowed to add extra leading zeros at the beginning of the serie. See Guidelines for more information.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v11BarcodeGet(apikey, customerCode, customerNumber, type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **String**| authenticate using your API key | 
 **customerCode** | **String**| Customer code as known at PostNL Pakketten | [default to DEVC]
 **customerNumber** | **String**| Customer number as known at PostNL Pakketten | [default to 11223344]
 **type** | **String**| Accepted values are: 2S, 3S, CC, CP, CD, CF | [default to 3S]
 **serie** | **String**| Barcode serie in the format &#39;###000000-###000000&#39;, for example 100000-20000. The range must consist of a minimal difference of 100.000. Minimum length of the serie is 6 characters; maximum length is 9 characters. It is allowed to add extra leading zeros at the beginning of the serie. See Guidelines for more information. | [optional] [default to 000000000-999999999]

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v21LabelPost"></a>
# **v21LabelPost**
> Response v21LabelPost(apikey, body, opts)

Generate Base64 shipment label and confirm shipment

### Example
```javascript
var PostnlShippingClient = require('postnl_shipping_client');

var apiInstance = new PostnlShippingClient.DefaultApi();

var apikey = "apikey_example"; // String | Authenticate using your API key

var body = new PostnlShippingClient.GenerateLabel(); // GenerateLabel | 

var opts = { 
  'confirm': true // Boolean | true or false; whether or not to confirm the shipments. Default value true.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v21LabelPost(apikey, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apikey** | **String**| Authenticate using your API key | 
 **body** | [**GenerateLabel**](GenerateLabel.md)|  | 
 **confirm** | **Boolean**| true or false; whether or not to confirm the shipments. Default value true. | [optional] [default to true]

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

