# PostnlShippingClient.Customs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **Boolean** | At least one of the three types Certificate, Invoice or License is mandatory for Commercial Goods,Commercial Sample and Returned Goods | [optional] 
**certificateNr** | **String** | Mandatory when Certificate is true.  | [optional] 
**license** | **Boolean** | At least one of the three types Certificate, Invoice or License is mandatory for Commercial Goods,Commercial Sample and Returned Goods | [optional] 
**licenseNr** | **String** | Mandatory when License is true. | [optional] 
**invoice** | **Boolean** | At least one of the three types Certificate, Invoice or License is mandatory for Commercial Goods,Commercial Sample and Returned Goods | [optional] [default to true]
**invoiceNr** | **String** | Mandatory when Invoice is true | [optional] [default to &#39;INV_0120330&#39;]
**handleAsNonDeliverable** | **Boolean** | Determines what to do when the shipment cannot be delivered the first time (if this is set to true,the shipment will be returned after the first failed attempt) | [optional] 
**currency** | **String** | Currency code,only EUR and USS are allowed | [default to &#39;EUR&#39;]
**shipmentType** | **String** | Type of shipment,possible values: Gift,Documents,Commercial Goods,Commercial Sample,Returned Goods | [optional] [default to &#39;Commercial Goods&#39;]
**content** | [**[Content]**](Content.md) |  | 


