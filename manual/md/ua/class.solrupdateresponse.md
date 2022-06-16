- [«SolrQueryResponse::\_\_destruct](solrqueryresponse.destruct.md)
- [SolrUpdateResponse::\_\_construct
»](solrupdateresponse.construct.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrUpdateResponse

# Клас SolrUpdateResponse

(PECL solr \> u003d 0.9.2)

## Вступ

Відповідь на запит на оновлення.

## Огляд класів

final class **SolrUpdateResponse** extends
[SolrResponse](class.solrresponse.md) {

/\* Константи \*/

const int `PARSE_SOLR_OBJ` u003d 0;

const int `PARSE_SOLR_DOC` u003d 1;

/\* Наслідувані властивості \*/

const int `SolrResponse::PARSE_SOLR_OBJ` u003d 0;

const int `SolrResponse::PARSE_SOLR_DOC` u003d 1;

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

public [\_\_construct](solrupdateresponse.construct.md)()

public [\_\_destruct](solrupdateresponse.destruct.md)()

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

## Зумовлені константи

## Константи класу SolrUpdateResponse

**`SolrUpdateResponse::PARSE_SOLR_OBJ`**
Документи слід аналізувати як екземпляри SolrObject

**`SolrUpdateResponse::PARSE_SOLR_DOC`**
Документи слід аналізувати як екземпляри SolrDocument

## Зміст

- [SolrUpdateResponse::\_\_construct](solrupdateresponse.construct.md)
- Конструктор
- [SolrUpdateResponse::\_\_destruct](solrupdateresponse.destruct.md)
- Деструктор
