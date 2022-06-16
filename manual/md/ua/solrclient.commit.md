- [« SolrClient::addDocuments](solrclient.adddocuments.md)
- [SolrClient::\_\_construct »](solrclient.construct.md)

- [PHP Manual](index.md)
- [SolrClient](class.solrclient.md)
- Завершує всі додавання/видалення, зроблені в індексі

# SolrClient::commit

(PECL solr \> u003d 0.9.2)

SolrClient::commit — Завершує всі додавання/видалення, зроблені в
індексі

### Опис

public **SolrClient::commit**(bool `$softCommit` u003d **`false`**, bool
`$waitSearcher` u003d **`true`**, bool `$expungeDeletes` u003d **`false`**):
[SolrUpdateResponse](class.solrupdateresponse.md)

Метод завершує всі додавання/видалення, зроблені в індексі.

### Список параметрів

`softCommit`
Оновлює 'view' індексу продуктивніше, але без гарантій
'on-disk'. (Solr4.0+)

М'яка фіксація виконується набагато швидше, оскільки вона робить
видимі лише зміни індексу, а не файли індексу fsync і не
записує новий дескриптор індексу. У разі збою JVM або втрати
харчування зміни, що відбулися після останньої жорсткої фіксації, будуть
втрачені. Колекції пошуку, які мають вимоги до роботи у режимі,
близьким до реального часу (які хочуть, щоб зміни індексу були
швидко видно для пошуку), захочуть частіше виконувати м'яку фіксацію, а
жорстку фіксацію рідше.

`waitSearcher`
Блокувати доти, доки не відкриється нова пошукова система і не
буде зареєстровано як основну пошукову систему, зробивши зміни
видимими.

`expungeDeletes`
Об'єднати сегменти із видаленнями. (Solr1.4+)

### Значення, що повертаються

Повертає об'єкт [SolrUpdateResponse](class.solrupdateresponse.md)
або викидає виняток у разі помилки.

### Помилки

Викидає [SolrClientException](class.solrclientexception.md), якщо
клієнт відмовив чи виникла проблема із підключенням.

Викидає [SolrServerException](class.solrserverexception.md), якщо
сервер Solr не зміг обробити запит.

### Список змін

| Версія | Опис |
|------------------------|------------------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------|
| PECL solr 1.1.0, 2.0.0 | Видалено $maxSegments |
| PECL solr 2.0.0b | Зміни API: SolrClient::commit (\[ int $maxSegments u003d 0 \[, bool $softCommit u003d false \[, bool $waitSearcher u003d true\[, bool $expungeDeletes u003d false \]\]\] ) |
| PECL solr 0,9.2 | Сигнатура: SolrClient::commit (\[ int $maxSegments u003d 1 \[, bool $waitFlush u003d true \[, bool $waitSearcher u003d true \]\]\] ). $waitFlush: Блокувати, доки зміни індексу не будуть скинуті на диск. |

### Примітки

**Увага**

PECL Solr \>u003d 2.0 підтримує тільки Solr Server \>u003d 4.0

### Дивіться також

- [SolrClient::optimize()](solrclient.optimize.md) - Дефрагментує
індекс
- [SolrClient::rollback()](solrclient.rollback.md) - Відкочує все
додавання/видалення, зроблені в індекс з моменту останньої фіксації
