- [« Приклад використання Tidy](tidy.examples.basic.md)
- [tidy::body »](tidy.body.md)

- [PHP Manual](index.md)
- [Tidy](book.tidy.md)
- Клас tidy

# Клас [tidy](class.tidy.md)

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

## Вступ

HTML-сайт в HTML-файлі, виявлений Tidy.

## Огляд класів

class **tidy** {

/\* Властивості \*/

public ?string `$errorBuffer` u003d null;

public ?string `$value` u003d null;

/\* Методи \*/

public [\_\_construct](tidy.construct.md)(
?string `$filename` u003d **`null`**,
array\|string\|null `$config` u003d **`null`**,
?string `$encoding` u003d **`null`**,
bool `$useIncludePath` u003d **`false`**
)

public [body](tidy.body.md)(): ?[tidyNode](class.tidynode.md)

public [cleanRepair](tidy.cleanrepair.md)(): bool

public [diagnose](tidy.diagnose.md)(): bool

**tidy_get_error_buffer**([tidy](class.tidy.md) `$tidy`):
string\|false

public [getConfig](tidy.getconfig.md)(): array

public [getHtmlVer](tidy.gethtmlver.md)(): int

public [getOpt](tidy.getopt.md)(string $option): string\|int\|bool

public [getOptDoc](tidy.getoptdoc.md)(string `$option`): string\|false

public [getRelease](tidy.getrelease.md)(): string

public [getStatus](tidy.getstatus.md)(): int

public [head](tidy.head.md)(): ?[tidyNode](class.tidynode.md)

public [html](tidy.md.md)(): ?[tidyNode](class.tidynode.md)

public [isXhtml](tidy.isxhtml.md)(): bool

public [isXml](tidy.isxml.md)(): bool

public [parseFile](tidy.parsefile.md)(
string `$filename`,
array\|string\|null `$config` u003d **`null`**,
?string `$encoding` u003d **`null`**,
bool `$useIncludePath` u003d **`false`**
): bool

**tidy_parse_file**(
string `$filename`,
array\|string\|null `$config` u003d **`null`**,
?string `$encoding` u003d **`null`**,
bool `$useIncludePath` u003d **`false`**
): [tidy](class.tidy.md)\|false

public [parseString](tidy.parsestring.md)(string `$string`,
array\|string\|null `$config` u003d **`null`**, ?string `$encoding` u003d
**`null`**): bool

**tidy_parse_string**(string `$string`, array\|string\|null `$config` u003d
**`null`**, ?string `$encoding` u003d **`null`**):
[tidy](class.tidy.md)\|false

public static [repairFile](tidy.repairfile.md)(
string `$filename`,
array\|string\|null `$config` u003d **`null`**,
?string `$encoding` u003d **`null`**,
bool `$useIncludePath` u003d **`false`**
): string\|false

public static [repairString](tidy.repairstring.md)(string `$string`,
array\|string\|null `$config` u003d **`null`**, ?string `$encoding` u003d
**`null`**): string\|false

public [root](tidy.root.md)(): ?[tidyNode](class.tidynode.md)

}

## Властивості

`value`
HTML-подання вузла, включаючи навколишні теги.

## Зміст

- [tidy::body](tidy.body.md) — Повертає об'єкт tidyNode, починаючи з
тега \<body\> розібраного tidy-дерева
- [tidy::cleanRepair](tidy.cleanrepair.md) — Виконати налаштовану
очищення та відновлення розібраної розмітки
- [tidy::\_\_construct](tidy.construct.md) - Створює новий
tidy-об'єкт
- [tidy::diagnose](tidy.diagnose.md) — Запуск настроєної
діагностики для розібраної та відновленої розмітки
- [tidy::$errorBuffer](tidy.props.errorbuffer.md) — Повертає
попередження та помилки, що виникли при розборі зазначеного документа
- [tidy::getConfig](tidy.getconfig.md) — Отримує поточну
конфігурацію Tidy
- [tidy::getHtmlVer](tidy.gethtmlver.md) — Отримує виявлену
HTML версію для зазначеного документа
- [tidy::getOpt](tidy.getopt.md) — Повертає значення вказаного
параметра конфігурації для документа tidy
- [tidy::getOptDoc](tidy.getoptdoc.md) — Повертає опис для
опції із зазначеною назвою
- [tidy::getRelease](tidy.getrelease.md) — Отримати дату випуску
(версію) для бібліотеки Tidy
- [tidy::getStatus](tidy.getstatus.md) — набуває статусу вказаного
документа
- [tidy::head](tidy.head.md) — Повертає об'єкт tidyNode, починаючи з
тега \<head\> розібраного tidy-дерева
- [tidy::html](tidy.md.md) — Повертає об'єкт tidyNode, починаючи з
тега \<html\> розібраного tidy-дерева
- [tidy::isXhtml](tidy.isxhtml.md) - Визначає, чи є
документ XHTML-документом
- [tidy::isXml](tidy.isxml.md) — Визначає, чи є документ
загальним XML-документом (не HTML/XHTML)
- [tidy::parseFile](tidy.parsefile.md) — Розбір розмітки у файлі або
URI
- [tidy::parseString](tidy.parsestring.md) — Розбір документа,
зберігається у рядку
- [tidy::repairFile](tidy.repairfile.md) — Відновлює розмітку
файлу і повертає його у вигляді рядка
- [tidy::repairString](tidy.repairstring.md) - Відновлює
рядок, використовуючи наскільки можна конфігураційний файл
- [tidy::root](tidy.root.md) — Повертає об'єкт tidyNode,
представляє вершину розібраного tidy-дерева
