- [«
SolrClientException::getInternalInfo](solrclientexception.getinternalinfo.md)
- [SolrServerException::getInternalInfo
»](solrserverexception.getinternalinfo.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrServerException

# Клас SolrServerException

(PECL Solr \>u003d 1.1.0, \>u003d2.0.0)

## Вступ

Виняток, що виникає у разі виникнення помилки на сервері
Solr.

## Огляд класів

class **SolrServerException** extends
[SolrException](class.solrexception.md) {

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

protected int `$sourceline`;

protected string `$sourcefile`;

protected string `$zif_name`;

/\* Методи \*/

public [getInternalInfo](solrserverexception.getinternalinfo.md)():
array

/\* Наслідувані методи \*/

final public [Exception::getMessage](exception.getmessage.md)():
string

final public [Exception::getPrevious](exception.getprevious.md)():
?[Throwable](class.throwable.md)

final public [Exception::getCode](exception.getcode.md)(): int

final public [Exception::getFile](exception.getfile.md)(): string

final public [Exception::getLine](exception.getline.md)(): int

final public [Exception::getTrace](exception.gettrace.md)(): array

final public
[Exception::getTraceAsString](exception.gettraceasstring.md)(): string

public [Exception::\_\_toString](exception.tostring.md)(): string

private [Exception::\_\_clone](exception.clone.md)(): void

public
[SolrException::getInternalInfo](solrexception.getinternalinfo.md)():
array

}

## Зміст

- [SolrServerException::getInternalInfo](solrserverexception.getinternalinfo.md)
— Повертає внутрішню інформацію про те, де було викинуто
виняток
