- [«SolrClient::getOptions](solrclient.getoptions.md)
- [SolrClient::ping »](solrclient.ping.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- дефрагментує індекс

# SolrClient::optimize

(PECL solr \> u003d 0.9.2)

SolrClient::optimize — Дефрагментує індекс

### Опис

public **SolrClient::optimize**(int `$maxSegments` u003d 1, bool
`$softCommit` u003d **`true`**, bool `$waitSearcher` u003d **`true`**):
[SolrUpdateResponse](class.solrupdateresponse.md)

Дефрагментує індекс для швидкого пошуку.

### Список параметрів

`maxSegments`
Оптимізується до максимальної кількості сегментів. Починаючи із Solr 1.3

`softCommit`
Оновлює 'view' індексу продуктивніше, але без гарантій
'on-disk'. (Solr4.0+)

`waitSearcher`
Блокувати доти, доки не відкриється нова пошукова система і не
буде зареєстровано як основну пошукову систему, зробивши зміни
видимими.

### Значення, що повертаються

Повертає SolrUpdateResponse у разі успішного виконання або
викидає виняток у разі помилки.

### Помилки

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.

### Примітки

**Увага**

PECL Solr \>u003d 2.0 підтримує тільки Solr Server \>u003d 4.0

До PECL Solr 2.0 метод використовувався прийому аргументів " int
$maxSegments, bool $waitFlush, bool $waitSearcher".

### Дивіться також

- [SolrClient::commit()](solrclient.commit.md) - Завершує все
додавання/видалення, зроблені в індексі
- [SolrClient::rollback()](solrclient.rollback.md) - Відкочує все
додавання/видалення, зроблені в індекс з моменту останньої фіксації
