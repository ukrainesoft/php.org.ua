- [«
SolrServerException::getInternalInfo](solrserverexception.getinternalinfo.md)
- [SolrIllegalArgumentException::getInternalInfo
»](solrillegalargumentexception.getinternalinfo.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrIllegalArgumentException

# Клас SolrIllegalArgumentException

(PECL solr \> u003d 0.9.2)

## Вступ

Викидається, коли методу передається неприпустимий чи некоректний
аргумент.

## Огляд класів

class **SolrIllegalArgumentException** extends
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

public
[getInternalInfo](solrillegalargumentexception.getinternalinfo.md)():
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

- [SolrIllegalArgumentException::getInternalInfo](solrillegalargumentexception.getinternalinfo.md)
— Повертає внутрішню інформацію про те, де було викинуто
виняток
