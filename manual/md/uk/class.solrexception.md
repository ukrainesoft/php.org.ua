- [«
SolrCollapseFunction::\_\_toString](solrcollapsefunction.tostring.md)
- [SolrException::getInternalInfo
»](solrexception.getinternalinfo.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrException

# Клас SolrException

(PECL solr \> u003d 0.9.2)

## Вступ

Базовий клас для всіх винятків, які викидаються класами модуля Solr.

## Огляд класів

class **SolrException** extends [Exception](class.exception.md) {

/\* Властивості \*/

protected int `$sourceline`;

protected string `$sourcefile`;

protected string `$zif_name`;

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

public [getInternalInfo](solrexception.getinternalinfo.md)(): array

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

}

## Властивості

`sourceline`
Рядок у вихідному файлі c-space, де було згенеровано виняток

`sourcefile`
Вихідний файл c-space, де було згенеровано виняток

`zif_name`
Функція c-space, де було згенеровано виняток

## Зміст

- [SolrException::getInternalInfo](solrexception.getinternalinfo.md)
— Повертає внутрішню інформацію про те, де було викинуто
виняток
