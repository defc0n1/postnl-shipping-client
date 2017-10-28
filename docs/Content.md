# PostnlShippingClient.Content

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of goods | [default to &#39;Powdered milk&#39;]
**EAN** | **String** | A unique code for a product. Together with HS number this is mandatory for product code 4992. | [optional] 
**productURL** | **String** | Webshop URL of the product which is being shipped. Mandatory for product code 4992 | [optional] 
**quantity** | **String** | Quantity of items in description | [default to &#39;2&#39;]
**weight** | **String** | Net weight of goods in gram(gr) | [default to &#39;2600&#39;]
**value** | **String** | Commercial (customs) value of goods. | [default to &#39;20.00&#39;]
**hSTariffNr** | **String** | First 6 numbers of Harmonized System Code | [optional] [default to &#39;100878&#39;]
**countryOfOrigin** | **String** | Origin country code | [optional] [default to &#39;NL&#39;]


