- [«SolrClient::commit](solrclient.commit.md)
- [SolrClient::deleteById »](solrclient.deletebyid.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Конструктор об'єкта SolrClient

# SolrClient::\_\_construct

(PECL solr \> u003d 0.9.2)

SolrClient::\_\_construct — Конструктор об'єкта SolrClient

### Опис

public **SolrClient::\_\_construct**(array `$clientOptions`)

Конструктор об'єкта SolrClient

### Список параметрів

`clientOptions`
Масив, що містить один із таких ключів:

``` parameterscode
- secure (Логічне значення, яке вказує, чи слід підключатися у безпечному режимі)
- hostname (Ім'я хоста для сервера Solr)
- port (Номер порту)
- path (Шлях до Solr)
- wt (Ім'я автора відповіді, наприклад xml, json)
- login (Ім'я користувача, яке використовується для HTTP-автентифікації, якщо є)
- password (Пароль HTTP-автентифікації)
- proxy_host (Ім'я хоста для проксі-сервера, якщо є)
- proxy_port (Порт проксі)
- proxy_login (Ім'я користувача проксі)
- proxy_password (Пароль проксі)
- timeout (Максимальний час у секундах, дозволений для операції передачі даних http. За замовчуванням 30 секунд)
- ssl_cert (Ім'я файлу у форматі PEM, що містить закритий ключ + закритий сертифікат (об'єднані в цьому порядку))
- ssl_key (Ім'я файлу лише для файлу закритого ключа у форматі PEM)
- ssl_keypassword (Пароль для закритого ключа)
- ssl_cainfo (Ім'я файлу, що містить один або кілька сертифікатів CA для перевірки однорангового вузла)
- ssl_capath (Ім'я каталогу, що містить кілька сертифікатів CA для перевірки однорангового вузла)

Зверніть увагу: якщо файл ssl_cert містить лише приватний сертифікат, вам необхідно вказати окремий файл ssl_key.

Параметр ssl_keypassword необхідний, якщо встановлено параметри ssl_cert або ssl_key.
````

### Помилки

Викидає
[SolrIllegalArgumentException](class.solrillegalargumentexception.md)
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SolrClient::\_\_construct()****

` <?php$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,    'path'     u003d> SOLR_PATH_TO_SOLR,    'wt'       u003d> ' xml',);$clientu003d SoleClient($options);$docu003dNew SolrInputDocument();$doc->addField('id', 334455);$doc->addField('cat', 'Software') ;$doc->addField('cat', 'Lucene');$updateResponse u003d $client->addDocument($doc);?> `

Результатом виконання цього прикладу буде щось подібне:

### Дивіться також

- [SolrClient::getOptions()](solrclient.getoptions.md) - Повертає
внутрішні параметри клієнта
