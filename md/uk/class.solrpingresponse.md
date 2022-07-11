- [«
SolrUpdateResponse::\_\_destruct](solrupdateresponse.destruct.md)
- [SolrPingResponse::\_\_construct »](solrpingresponse.construct.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrPingResponse

# Клас SolrPingResponse

(PECL solr \> u003d 0.9.2)

## Вступ

Відповідь на запит ping до сервера

## Огляд класів

final class **SolrPingResponse** extends
[SolrResponse](class.solrresponse.md) {

/\* Константи \*/

const int `PARSE_SOLR_OBJ` u003d 0;

const int `PARSE_SOLR_DOC` u003d 1;

/\* Властивості \*/

/\* Методи \*/

public [\_\_construct](solrpingresponse.construct.md)()

public [getResponse](solrpingresponse.getresponse.md)(): string

public [\_\_destruct](solrpingresponse.destruct.md)()

/\* Наслідувані методи \*/

public
[SolrResponse::getDigestedResponse](solrresponse.getdigestedresponse.md)():
string

public [SolrResponse::getHttpStatus](solrresponse.gethttpstatus.md)():
int

public
[SolrResponse::getHttpStatusMessage](solrresponse.gethttpstatusmessage.md)():
string

public [SolrResponse::getRawRequest](solrresponse.getrawrequest.md)():
string

public
[SolrResponse::getRawRequestHeaders](solrresponse.getrawrequestheaders.md)():
string

public
[SolrResponse::getRawResponse](solrresponse.getrawresponse.md)():
string

public
[SolrResponse::getRawResponseHeaders](solrresponse.getrawresponseheaders.md)():
string

public [SolrResponse::getRequestUrl](solrresponse.getrequesturl.md)():
string

public [SolrResponse::getResponse](solrresponse.getresponse.md)():
[SolrObject](class.solrobject.md)

public [SolrResponse::setParseMode](solrresponse.setparsemode.md)(int
`$parser_mode` u003d 0): bool

public [SolrResponse::success](solrresponse.success.md)(): bool

}

## Властивості

`http_status`
HTTP-статус відповіді.

`parser_mode`
Чи слід аналізувати документи solr як екземпляри SolrObject або
SolrDocument.

`success`
Чи була помилка під час запиту

`http_status_message`
Детальне повідомлення про статус http

`http_request_url`
URL запиту

`http_raw_request_headers`
Рядок необроблених заголовків, надісланих під час запиту

`http_raw_request`
Необроблений запит, надісланий на сервер

`http_raw_response_headers`
Заголовки відповіді від сервера Solr

`http_raw_response`
Відповідь у відповідь від сервера

`http_digested_response`
Відповідь у серіалізованому форматі PHP.

## Зумовлені константи

## Константи класу SolrPingResponse

**`SolrPingResponse::PARSE_SOLR_OBJ`**
Документи слід аналізувати як екземпляри SolrObject.

**`SolrPingResponse::PARSE_SOLR_DOC`**
Документи слід аналізувати як екземпляри SolrDocument.

## Зміст

- [SolrPingResponse::\_\_construct](solrpingresponse.construct.md) -
Конструктор
- [SolrPingResponse::\_\_destruct](solrpingresponse.destruct.md) -
Деструктор
- [SolrPingResponse::getResponse](solrpingresponse.getresponse.md) -
Повертає відповідь від сервера
