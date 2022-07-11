- [«SolrClient::setResponseWriter](solrclient.setresponsewriter.md)
- [SolrClient::system »](solrclient.system.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Змінює вказаний тип сервлету на нове значення

# SolrClient::setServlet

(PECL solr \> u003d 0.9.2)

SolrClient::setServlet — Змінює цей тип сервлета на новий.
значення

### Опис

public **SolrClient::setServlet**(int `$type`, string `$value`): bool

Змінює цей тип сервлета на нове значення

### Список параметрів

`type`
Одне з наступних значень:

``` parameterscode
- SolrClient::SEARCH_SERVLET_TYPE
- SolrClient::UPDATE_SERVLET_TYPE
- SolrClient::THREADS_SERVLET_TYPE
- SolrClient::PING_SERVLET_TYPE
- SolrClient::TERMS_SERVLET_TYPE
````

`value`
Нове значення для сервлету

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
