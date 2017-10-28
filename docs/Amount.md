# PostnlShippingClient.Amount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amountType** | **String** | Amount type. This is a code. Possible values are:  01 &#x3D; Cash on delivery (COD) 02 &#x3D; Insured value 04 mandatory for Commercial route China. 12 mandatory for Inco terms DDP Commercial route China. | [default to &#39;01&#39;]
**accountName** | **String** | Name of bank account owner  | [optional] 
**BIC** | **String** | BIC number,optional for COD shipments (mandatory for bank account number other than originating in The Netherlands) | [optional] 
**currency** | **String** | Currency code according ISO 4217. E.g. EUR | [optional] [default to &#39;EUR&#39;]
**IBAN** | **String** | IBAN bank account number,mandatory for COD shipments. Dutch IBAN numbers are 18 characters  | [optional] 
**reference** | **String** | Personal payment reference  | [optional] 
**transactionNumber** | **String** | Transaction number | [optional] 
**value** | **String** | Money value in EUR (unless value Currency is specified for another currency). Value format (N6.2): #####0.00 (2 digits behind decimal dot) Mandatory for COD and Insured products | [default to &#39;100.00&#39;]


