- [«
SoapClient::\_\_getLastResponseHeaders](soapclient.getlastresponseheaders.md)
- [SoapClient::\_\_setCookie »](soapclient.setcookie.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Повертає список SOAP-типів

# SoapClient::\_\_getTypes

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_getTypes — Повертає список типів SOAP

### Опис

public **SoapClient::\_\_getTypes**(): ?array

Повертає масив типів, описаних у WSDL для веб-служби.

> **Примітка**:
>
> Ця функція працює лише у режимі WSDL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array) SOAP-типів з докладним описом всіх структур та типів.

### Приклади

**Приклад #1 Приклад використання **SoapClient::\_\_getTypes()****

` <?php$client u003d new SoapClient('http://soap.amazon.com/schemas3/AmazonWebServices.wsdl');var_dump($client->__getTypes());?> `

Результат виконання цього прикладу:

array(88) {
[0]u003d>
string(30) "ProductLine ProductLineArray[]"
[1]u003d>
string(85) "struct ProductLine {
string Mode;
string RelevanceRank;
ProductInfo ProductInfo;
}"
[2]u003d>
string(105) "struct ProductInfo {
string TotalResults;
string TotalPages;
string ListName;
DetailsArray Details;
}"
...
[85] u003d>
string(32) "ShortSummary ShortSummaryArray[]"
[86] u003d>
string(121) "struct GetTransactionDetailsRequest {
string tag;
string devtag;
string key;
OrderIdArray OrderIds;
string locale;
}"
[87] u003d>
string(75) "struct GetTransactionDetailsResponse {
ShortSummaryArray ShortSummaries;
}"
}

### Дивіться також

- [SoapClient::\_\_construct()](soapclient.construct.md) -
Конструктор класу SoapClient
