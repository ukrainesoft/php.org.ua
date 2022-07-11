- [«SolrClient::getDebug](solrclient.getdebug.md)
- [SolrClient::optimize »](solrclient.optimize.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Повертає внутрішні параметри клієнта

# SolrClient::getOptions

(PECL solr \> u003d 0.9.6)

SolrClient::getOptions — Повертає внутрішні параметри клієнта

### Опис

public **SolrClient::getOptions**(): array

Повертає внутрішні настройки клієнта. Дуже корисно для налагодження.
Значення, що повертаються доступні тільки для читання і можуть бути
встановлені лише під час створення екземпляра об'єкта.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив, що містить всі параметри для об'єкта SolrClient,
встановлені усередині.

### Дивіться також

- [SolrClient::\_\_construct()](solrclient.construct.md) -
Конструктор об'єкта SolrClient
