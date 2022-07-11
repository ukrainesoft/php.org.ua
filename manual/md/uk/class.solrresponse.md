- [«SolrClient::threads](solrclient.threads.md)
- [SolrResponse::getDigestedResponse
»](solrresponse.getdigestedresponse.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrResponse

# Клас SolrResponse

(PECL solr \> u003d 0.9.2)

## Вступ

Відповідь від сервера Solr.

## Огляд класів

abstract class **SolrResponse** {

/\* Константи \*/

const int `PARSE_SOLR_OBJ` u003d 0;

const int `PARSE_SOLR_DOC` u003d 1;

/\* Властивості \*/

protected int `$http_status`;

protected int `$parser_mode`;

protected bool `$success`;

protected string `$http_status_message`;

protected string `$http_request_url`;

protected string `$http_raw_request_headers`;

protected string `$http_raw_request`;

protected string `$http_raw_response_headers`;

protected string `$http_raw_response`;

protected string `$http_digested_response`;

/\* Методи \*/

public [getDigestedResponse](solrresponse.getdigestedresponse.md)():
string

public [getHttpStatus](solrresponse.gethttpstatus.md)(): int

public [getHttpStatusMessage](solrresponse.gethttpstatusmessage.md)():
string

public [getRawRequest](solrresponse.getrawrequest.md)(): string

public [getRawRequestHeaders](solrresponse.getrawrequestheaders.md)():
string

public [getRawResponse](solrresponse.getrawresponse.md)(): string

public
[getRawResponseHeaders](solrresponse.getrawresponseheaders.md)():
string

public [getRequestUrl](solrresponse.getrequesturl.md)(): string

public [getResponse](solrresponse.getresponse.md)():
[SolrObject](class.solrobject.md)

public [setParseMode](solrresponse.setparsemode.md)(int `$parser_mode`
u003d 0): bool

public [success](solrresponse.success.md)(): bool

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
Рядок необроблених заголовків, надісланих під час запиту.

`http_raw_request`
Необроблений запит, надісланий на сервер

`http_raw_response_headers`
Заголовки відповіді сервера Solr.

`http_raw_response`
Повідомлення у відповідь від сервера.

`http_digested_response`
Відповідь у серіалізованому форматі PHP.

## Зумовлені константи

## Константи класу SolrResponse

**`SolrResponse::PARSE_SOLR_OBJ`**
Документи слід аналізувати як екземпляри SolrObject.

**`SolrResponse::PARSE_SOLR_DOC`**
Документи слід аналізувати як екземпляри SolrDocument.

## Зміст

- [SolrResponse::getDigestedResponse](solrresponse.getdigestedresponse.md)
— Повертає відповідь XML як серіалізовані дані PHP
- [SolrResponse::getHttpStatus](solrresponse.gethttpstatus.md) -
Повертає HTTP-статус відповіді
- [SolrResponse::getHttpStatusMessage](solrresponse.gethttpstatusmessage.md)
— Повертає докладнішу інформацію про статус HTTP
- [SolrResponse::getRawRequest](solrresponse.getrawrequest.md) -
Повертає необроблений запит, надісланий на сервер Solr
- [SolrResponse::getRawRequestHeaders](solrresponse.getrawrequestheaders.md)
— Повертає необроблені заголовки запиту, надіслані на
сервер Solr
- [SolrResponse::getRawResponse](solrresponse.getrawresponse.md) -
Повертає необроблену відповідь із сервера
- [SolrResponse::getRawResponseHeaders](solrresponse.getrawresponseheaders.md)
— Повертає необроблені заголовки відповіді із сервера
- [SolrResponse::getRequestUrl](solrresponse.getrequesturl.md) -
Повертає повну URL-адресу, на яку було надіслано запит
- [SolrResponse::getResponse](solrresponse.getresponse.md) -
Повертає SolrObject, що представляє відповідь XML від сервера
- [SolrResponse::setParseMode](solrresponse.setparsemode.md) -
Встановлює режим розбору
- [SolrResponse::success](solrresponse.success.md) — Чи був запит на
успішним?
