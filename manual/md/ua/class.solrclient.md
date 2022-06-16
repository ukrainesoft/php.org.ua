- [«SolrObject::offsetUnset](solrobject.offsetunset.md)
- [SolrClient::addDocument »](solrclient.adddocument.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrClient

# Клас SolrClient

(PECL solr \> u003d 0.9.2)

## Вступ

Використовується для надсилання запитів на сервер Solr. В даний час
клонування та серіалізація екземплярів SolrClient не підтримується.

## Огляд класів

final class **SolrClient** {

/\* Константи \*/

const int `SEARCH_SERVLET_TYPE` u003d 1;

const int `UPDATE_SERVLET_TYPE` u003d 2;

const int `THREADS_SERVLET_TYPE` u003d 4;

const int `PING_SERVLET_TYPE` u003d 8;

const int `TERMS_SERVLET_TYPE` u003d 16;

const int `SYSTEM_SERVLET_TYPE` u003d 32;

const string `DEFAULT_SEARCH_SERVLET` u003d select;

const string `DEFAULT_UPDATE_SERVLET` u003d update;

const string `DEFAULT_THREADS_SERVLET` u003d admin/threads;

const string `DEFAULT_PING_SERVLET` u003d admin/ping;

const string `DEFAULT_TERMS_SERVLET` u003d terms;

const string `DEFAULT_SYSTEM_SERVLET` u003d admin/system;

/\* Методи \*/

public [\_\_construct](solrclient.construct.md)(array
`$clientOptions`)

public
[addDocument](solrclient.adddocument.md)([SolrInputDocument](class.solrinputdocument.md)
`$doc`, bool `$overwrite` u003d **`true`**, int `$commitWithin` u003d 0):
[SolrUpdateResponse](class.solrupdateresponse.md)

public [addDocuments](solrclient.adddocuments.md)(array `$docs`, bool
`$overwrite` u003d **`true`**, int `$commitWithin` u003d 0): void

public [commit](solrclient.commit.md)(bool `$softCommit` u003d
**`false`**, bool `$waitSearcher` u003d **`true`**, bool `$expungeDeletes` u003d
**`false`**): [SolrUpdateResponse](class.solrupdateresponse.md)

public [deleteById](solrclient.deletebyid.md)(string `$id`):
[SolrUpdateResponse](class.solrupdateresponse.md)

public [deleteByIds](solrclient.deletebyids.md)(array `$ids`):
[SolrUpdateResponse](class.solrupdateresponse.md)

public [deleteByQueries](solrclient.deletebyqueries.md)(array
`$queries`): [SolrUpdateResponse](class.solrupdateresponse.md)

public [deleteByQuery](solrclient.deletebyquery.md)(string `$query`):
[SolrUpdateResponse](class.solrupdateresponse.md)

public [getById](solrclient.getbyid.md)(string `$id`):
[SolrQueryResponse](class.solrqueryresponse.md)

public [getByIds](solrclient.getbyids.md)(array `$ids`):
[SolrQueryResponse](class.solrqueryresponse.md)

public [getDebug](solrclient.getdebug.md)(): string

public [getOptions](solrclient.getoptions.md)(): array

public [optimize](solrclient.optimize.md)(int `$maxSegments` u003d 1, bool
`$softCommit` u003d **`true`**, bool `$waitSearcher` u003d **`true`**):
[SolrUpdateResponse](class.solrupdateresponse.md)

public [ping](solrclient.ping.md)():
[SolrPingResponse](class.solrpingresponse.md)

public
[query](solrclient.query.md)([SolrParams](class.solrparams.md)
`$query`): [SolrQueryResponse](class.solrqueryresponse.md)

public [request](solrclient.request.md)(string `$raw_request`):
[SolrUpdateResponse](class.solrupdateresponse.md)

public [rollback](solrclient.rollback.md)():
[SolrUpdateResponse](class.solrupdateresponse.md)

public [setResponseWriter](solrclient.setresponsewriter.md)(string
`$responseWriter`): void

public [setServlet](solrclient.setservlet.md)(int `$type`, string
`$value`): bool

public [system](solrclient.system.md)(): void

public [threads](solrclient.threads.md)(): void

public [\_\_destruct](solrclient.destruct.md)()

}

## Зумовлені константи

**`SolrClient::SEARCH_SERVLET_TYPE`**
Використовується для оновлення сервлета пошуку.

**`SolrClient::UPDATE_SERVLET_TYPE`**
Використовується для оновлення сервлета оновлення.

**`SolrClient::THREADS_SERVLET_TYPE`**
Використовується для оновлення сервлета потоків.

**`SolrClient::PING_SERVLET_TYPE`**
Використовується для оновлення сервлета ping.

**`SolrClient::TERMS_SERVLET_TYPE`**
Використовується для оновлення термінів сервлет.

**`SolrClient::SYSTEM_SERVLET_TYPE`**
Використовується для отримання системної інформації із системного сервлета.

**`SolrClient::DEFAULT_SEARCH_SERVLET`**
Це початкове значення для пошуку сервлета.

**`SolrClient::DEFAULT_UPDATE_SERVLET`**
Це початкове значення для сервлета оновлення.

**`SolrClient::DEFAULT_THREADS_SERVLET`**
Це початкове значення сервлета потоків.

**`SolrClient::DEFAULT_PING_SERVLET`**
Це початкове значення для ping сервлета.

**`SolrClient::DEFAULT_TERMS_SERVLET`**
Це початкове значення для термінів сервлет, які використовуються для
TermsComponent

**`SolrClient::DEFAULT_SYSTEM_SERVLET`**
Це початкове значення для системного сервлета, що використовується для
отримання інформації про сервер Solr.

## Зміст

- [SolrClient::addDocument](solrclient.adddocument.md) — Додає
документ в індекс
- [SolrClient::addDocuments](solrclient.adddocuments.md) — Додає
колекцію екземплярів SolrInputDocument в індекс
- [SolrClient::commit](solrclient.commit.md) - Завершує все
додавання/видалення, зроблені в індексі
- [SolrClient::\_\_construct](solrclient.construct.md) - Конструктор
об'єкта SolrClient
- [SolrClient::deleteById](solrclient.deletebyid.md) — Видаляє за
ідентифікатору
- [SolrClient::deleteByIds](solrclient.deletebyids.md) — Видаляє за
ідентифікаторам
- [SolrClient::deleteByQueries](solrclient.deletebyqueries.md) -
Видаляє всі документи, що відповідають будь-якому запиту.
- [SolrClient::deleteByQuery](solrclient.deletebyquery.md) — Видаляє
всі документи, що відповідають заданому запиту
- [SolrClient::\_\_destruct](solrclient.destruct.md) - Деструктор
SolrClient
- [SolrClient::getById](solrclient.getbyid.md) — Отримує документ
за ідентифікатором. Використовує Solr Realtime Get (RTG)
- [SolrClient::getByIds](solrclient.getbyids.md) — Отримує
документи щодо їх ідентифікаторів. Використовує Solr Realtime Get (RTG)
- [SolrClient::getDebug](solrclient.getdebug.md) — Повертає дані
налагодження для останньої спроби підключення
- [SolrClient::getOptions](solrclient.getoptions.md) — Повертає
внутрішні параметри клієнта
- [SolrClient::optimize](solrclient.optimize.md) - Дефрагментує
індекс
- [SolrClient::ping](solrclient.ping.md) — Перевіряє, чи працює
сервер Solr
- [SolrClient::query](solrclient.query.md) — Надсилає запит на
сервер
- [SolrClient::request](solrclient.request.md) - Відправляє
необроблений запит на оновлення
- [SolrClient::rollback](solrclient.rollback.md) - Відкочує все
додавання/видалення, зроблені в індекс з моменту останньої фіксації
- [SolrClient::setResponseWriter](solrclient.setresponsewriter.md) -
Встановлює письменник відповіді, що використовується для підготовки відповіді
Solr
- [SolrClient::setServlet](solrclient.setservlet.md) — Змінює
вказаний тип сервлету на нове значення
- [SolrClient::system](solrclient.system.md) — Отримує інформацію про
сервері Solr
- [SolrClient::threads](solrclient.threads.md) — Перевірка статусу
тим
