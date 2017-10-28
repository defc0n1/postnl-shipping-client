# PostnlShippingClient.Address

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressType** | **String** | Type of the address. This is a code. You can find the possible values at Guidelines | [default to &#39;02&#39;]
**area** | **String** | Area of the address | [optional] 
**buildingname** | **String** | Building name of the address | [optional] 
**city** | **String** | City of the address | [default to &#39;Hoofddorp&#39;]
**companyName** | **String** | This field has a dependency with the field Name. One of both fields must be filled mandatory; using both fields is also allowed. Mandatory when AddressType is 09. | [optional] [default to &#39;PostNL&#39;]
**countrycode** | **String** | The ISO2 country codes | [default to &#39;NL&#39;]
**department** | **String** | Send to specific department of a company.  | [optional] 
**doorcode** | **String** | Door code of address. Mandatory for some international shipments. | [optional] 
**firstName** | **String** | Remark: please add FirstName and Name (lastname) of the receiver to improve the parcel tracking experience of your customer.  | [optional] [default to &#39;Peter&#39;]
**floor** | **String** | Send to specific floor of a company | [optional] 
**houseNr** | **String** | Mandatory for shipments to Benelux. Max. length is 5 characters (only for Benelux addresses). For Benelux addresses,this field should always be numeric. | [optional] [default to &#39;42&#39;]
**houseNrExt** | **String** | House number extension  | [optional] 
**name** | **String** | Last name of person. This field has a dependency with the field CompanyName. One of both fields must be filled mandatory; using both fields is also allowed. Remark: please add FirstName and Name (lastname) of the receiver to improve the parcel tracking experience of your customer.  | [optional] [default to &#39;de Ruiter&#39;]
**region** | **String** | Region of the address | [optional] 
**street** | **String** | This field has a dependency with the field StreetHouseNrExt. One of both fields must be filled mandatory; using both fields is also allowed.  | [optional] [default to &#39;Siriusdreef&#39;]
**streetHouseNrExt** | **String** | Combination of Street, HouseNr and HouseNrExt. Please see Guidelines for the explanation. | [optional] 
**zipcode** | **String** | Zipcode of the address. Mandatory for shipments to Benelux. Max length (NL) 6 characters,(BE;LU) 4 numeric characters | [optional] [default to &#39;2132WT&#39;]


