# PostnlShippingClient.Group

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupType** | **String** | Group sort that determines the type of group that is indicated. This is a code. Possible values: 01 &#x3D; Collection request 03 &#x3D; Multiple parcels in one shipment (multicolli) 04 &#x3D; Single parcel in one shipment | [default to &#39;04&#39;]
**groupSequence** | **String** | Sequence number of the collo within the complete shipment (e.g. collo 2 of 4) Mandatory for multicollo shipments | [default to &#39;1&#39;]
**groupCount** | **String** | Total number of colli in the shipment (in case of multicolli shipments) Mandatory for multicollo shipments | [default to &#39;1&#39;]
**mainBarcode** | **String** | Main barcode for the shipment (in case of multicolli shipments) Mandatory for multicollo shipments | [default to &#39;3SABCD7239264&#39;]


