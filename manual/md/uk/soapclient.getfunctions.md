- [« SoapClient::\_\_getCookies](soapclient.getcookies.md)
- [SoapClient::\_\_getLastRequest »](soapclient.getlastrequest.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Повертає список доступних SOAP-функцій

# SoapClient::\_\_getFunctions

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_getFunctions — Повертає список доступних SOAP-функцій

### Опис

public **SoapClient::\_\_getFunctions**(): ?array

Повертає масив функцій, описаних у WSDL для веб-служби.

> **Примітка**:
>
> Ця функція працює лише у режимі WSDL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array) прототипів функцій SOAP з описом типу, що повертається
значення, ім'я функції та типи параметрів.

### Приклади

**Приклад #1 Приклад використання **SoapClient::\_\_getFunctions()****

` <?php$client u003d new SoapClient('http://soap.amazon.com/schemas3/AmazonWebServices.wsdl');var_dump($client->__getFunctions());?> `

Результат виконання цього прикладу:

array(26) {
[0]u003d>
string(70) "ProductInfo KeywordSearchRequest(KeywordRequest $KeywordSearchRequest)"
[1]u003d>
string(79) "ProductInfo TextStreamSearchRequest(TextStreamRequest $TextStreamSearchRequest)"
[2]u003d>
string(64) "ProductInfo PowerSearchRequest(PowerRequest $PowerSearchRequest)"
...
[23] u003d>
string(107) "ShoppingCart RemoveShoppingCartItemsRequest(RemoveShoppingCartItemsRequest $RemoveShoppingCartItemsRequest)"
[24] u003d>
string(107) "ShoppingCart ModifyShoppingCartItemsRequest(ModifyShoppingCartItemsRequest $ModifyShoppingCartItemsRequest)"
[25] u003d>
string(118) "GetTransactionDetailsResponse GetTransactionDetailsRequest(GetTransactionDetailsRequest $GetTransactionDetailsRequest)"
}

### Дивіться також

- [SoapClient::\_\_construct()](soapclient.construct.md) -
Конструктор класу SoapClient
