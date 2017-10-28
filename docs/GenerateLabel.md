# PostnlShippingClient.GenerateLabel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**Customer**](Customer.md) |  | 
**labelSignature** | **String** | GIF image of the signature (as a base64 encoded string). The value of this element can have a maximum size of 65536 characters. Note that the total request can have a maximum size of 200KB. Larger requests will not be accepted by the server for performance reasons. Requests that exceed this limit will not return a validation error,but a HTTP 404 error. | [optional] 
**message** | [**Message**](Message.md) |  | 
**shipments** | [**Shipments**](Shipments.md) |  | 


