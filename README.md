# postnl_shipping_client

PostnlShippingClient - JavaScript client for postnl_shipping_client
A NodeJS API client for PostNL shipping services. Features include Generating barcdes, Generating labels in Base64

- API version: 1.0.0
- Package version: 1.0.0
- 
## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install postnl_shipping_client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your postnl_shipping_client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('postnl_shipping_client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/trackq/postnl_shipping_client
then install it via:

```shell
    npm install trackq/postnl_shipping_client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var PostnlShippingClient = require('postnl_shipping_client');

var api = new PostnlShippingClient.DefaultApi()

var apikey = "apikey_example"; // {String} authenticate using your API key

var customerCode = "DEVC"; // {String} Customer code as known at PostNL Pakketten

var customerNumber = "11223344"; // {String} Customer number as known at PostNL Pakketten

var type = "3S"; // {String} Accepted values are: 2S, 3S, CC, CP, CD, CF

var opts = { 
  'serie': "000000000-999999999" // {String} Barcode serie in the format '###000000-###000000', for example 100000-20000. The range must consist of a minimal difference of 100.000. Minimum length of the serie is 6 characters; maximum length is 9 characters. It is allowed to add extra leading zeros at the beginning of the serie. See Guidelines for more information.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.v11BarcodeGet(apikey, customerCode, customerNumber, type, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api-sandbox.postnl.nl/shipment*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PostnlShippingClient.DefaultApi* | [**v11BarcodeGet**](docs/DefaultApi.md#v11BarcodeGet) | **GET** /v1_1/barcode | Generate standard barcode
*PostnlShippingClient.DefaultApi* | [**v21LabelPost**](docs/DefaultApi.md#v21LabelPost) | **POST** /v2_1/label | Generate Base64 shipment label and confirm shipment


## Documentation for Models

 - [PostnlShippingClient.Address](docs/Address.md)
 - [PostnlShippingClient.Amount](docs/Amount.md)
 - [PostnlShippingClient.Contact](docs/Contact.md)
 - [PostnlShippingClient.Content](docs/Content.md)
 - [PostnlShippingClient.Customer](docs/Customer.md)
 - [PostnlShippingClient.Customs](docs/Customs.md)
 - [PostnlShippingClient.Dimension](docs/Dimension.md)
 - [PostnlShippingClient.Error](docs/Error.md)
 - [PostnlShippingClient.GenerateLabel](docs/GenerateLabel.md)
 - [PostnlShippingClient.Group](docs/Group.md)
 - [PostnlShippingClient.Message](docs/Message.md)
 - [PostnlShippingClient.ProductOption](docs/ProductOption.md)
 - [PostnlShippingClient.Response](docs/Response.md)
 - [PostnlShippingClient.ResponseLabels](docs/ResponseLabels.md)
 - [PostnlShippingClient.ResponseMergedLabels](docs/ResponseMergedLabels.md)
 - [PostnlShippingClient.ResponseResponseShipments](docs/ResponseResponseShipments.md)
 - [PostnlShippingClient.ResponseWarnings](docs/ResponseWarnings.md)
 - [PostnlShippingClient.Shipments](docs/Shipments.md)


## Documentation for Authorization

 All endpoints do not require authorization.

