# PostnlShippingClient.Shipments

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**[Address]**](Address.md) | List of 1 or more Address type elements. At least 1 address type is mandatory | 
**amounts** | [**[Amount]**](Amount.md) | List of 0 or more AmountType elements. An amount represents a value of the shipment. Amount type 01 mandatory for COD-shipments, Amount type 02 mandatory for domestic insured shipments. Amount type 04 mandatory for Commercial route China (productcode 4992). Amount type 12 mandatory for Inco terms DDP Commercial route China (productcode 4992) | [optional] 
**barcode** | **String** | Barcode of the shipment. This is a unique value | [default to &#39;3SDEVC2016112104&#39;]
**collectionTimeStampStart** | **String** | Starting date/time of the collection of the shipment. Format: dd-MM-yyyy hh:mm:ss | [optional] 
**collectionTimeStampEnd** | **String** | Ending date/time of the collection of the shipment. Format: dd-MM-yyyy hh:mm:ss | [optional] 
**contacts** | [**[Contact]**](Contact.md) | One or more ContactType elements belonging to a shipment. Mandatory in some cases. Please refer to the Guidelines  | [optional] 
**content** | **String** | Content of the shipment. Mandatory for Extra@Home shipments | [optional] 
**costCenter** | **String** | Cost center of the shipment. This value will appear on your invoice | [optional] 
**customerOrderNumber** | **String** | Order number of the customer | [optional] 
**customs** | [**[Customs]**](Customs.md) | The Customs type is mandatory for GlobalPack shipments and not allowed for any other shipment types. | [optional] 
**deliveryAddress** | **String** | Delivery address specification. This field is mandatory when AddressType on the Address is 09. | [optional] [default to &#39;01&#39;]
**deliveryDate** | **String** | The delivery date of the shipment. We strongly advice to use the DeliveryDate service to get this date when using delivery options like Evening/Morning/Sameday delivery etc. For those products, this field is mandatory (please regard the Guidelines section). Format: dd-MM-yyyy hh:mm:ss | [optional] 
**deliveryTimeStampStart** | **String** | The delivery date and the specific starting time of the shipment delivery. This can be retrieved from the DeliveryDate webservice using the MyTime delivery option. Format: dd-MM-yyyy hh:mm:ss | [optional] 
**deliveryTimeStampEnd** | **String** | The delivery date and the specific end time of the shipment delivery. This can be retrieved from the DeliveryDate webservice using the MyTime delivery option. Format: dd-MM-yyyy hh:mm:ss | [optional] 
**dimension** | [**Dimension**](Dimension.md) |  | 
**downPartnerBarcode** | **String** | Barcode of the downstream network partner of PostNL Pakketten. | [optional] 
**downPartnerID** | **String** | Identification of the downstream network partner of PostNL Pakketten. | [optional] 
**downPartnerLocation** | **String** | Identification of the location of the downstream network partner of PostNL Pakketten. Mandatory for Pickup at PostNl Location Belgium: LD-01 | [optional] 
**groups** | [**[Group]**](Group.md) | List of 0 or more Group types with data, grouping multiple shipments together. Mandatory for multicollo shipments. Please see Guidelines (Multiple shipments) for more information. | [optional] 
**iDType** | **Number** | Type of the ID document. Mandatory for ID Check products. See Products for possible values | [optional] 
**iDNumber** | **String** | Document number of the ID document. Mandatory for ID Check products | [optional] 
**iDExpiration** | **String** | Expiration date of the ID document. Mandatory for ID Check products | [optional] 
**productCodeCollect** | **Number** | Second product code of a shipment | [optional] 
**productCodeDelivery** | **String** | Product code of the shipment  | [default to &#39;3085&#39;]
**productOptions** | [**[ProductOption]**](ProductOption.md) | Product options for the shipment, mandatory for certain products, see the Products page of this webservice | [optional] 
**receiverDateOfBirth** | **String** | Date of birth. Mandatory for Age check products | [optional] 
**reference** | **String** | Your own reference of the shipment. Mandatory for Extra@Home shipments; for E@H this is used to create your order number, so this should be unique for each request. | [optional] 
**referenceCollect** | **String** | Additional reference of the collect order of the shipment | [optional] 
**remark** | **String** | Remark of the shipment. | [optional] 
**returnBarcode** | **String** | Return barcode of the shipment. Mandatory for Label in the Box (return label) shipments. | [optional] 
**returnReference** | **String** | Return reference of the shipment | [optional] 
**timeslotID** | **String** | ID of the chosen timeslot as returned by the timeslot webservice | [optional] 


