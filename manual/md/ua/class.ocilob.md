- [«OCICollection::trim](ocicollection.trim.md)
- [OCILob::append »](ocilob.append.md)

- [PHP Manual](index.md)
- [OCI8](book.oci8.md)
- Клас OCILob

# Клас OCILob

(PHP 5, PHP 7, PHP 8, PECL OCI8 \>u003d 1.1.0)

## Вступ

Функціональність OCI8 LOB для великих бінарних (BLOB) та символьних
(CLOB) об'єктів.

> **Примітка**:
>
> Клас **OCI-Lob** був перейменований на **OCILob** на PHP 8 OCI8 3.0.0 в
> відповідно до стандартів іменування PHP.

## Огляд класів

class **OCILob** {

/\* Методи \*/

public [append](ocilob.append.md)([OCILob](class.ocilob.md)
`$from`): bool

public [close](ocilob.close.md)(): bool

public [eof](ocilob.eof.md)(): bool

public [erase](ocilob.erase.md)(?int `$offset` u003d **`null`**, ?int
`$length` u003d **`null`**): int\|false

public [export](ocilob.export.md)(string `$filename`, ?int `$offset` u003d
**`null`**, ?int `$length` u003d **`null`**): bool

public [flush](ocilob.flush.md)(int `$flag` u003d 0): bool

public [free](ocilob.free.md)(): bool

public [getBuffering](ocilob.getbuffering.md)(): bool

public [import](ocilob.import.md)(string `$filename`): bool

public [load](ocilob.load.md)(): string\|false

public [read](ocilob.read.md)(int `$length`): string\|false

public [rewind](ocilob.rewind.md)(): bool

public [save](ocilob.save.md)(string `$data`, int `$offset` u003d 0): bool

public [seek](ocilob.seek.md)(int `$offset`, int `$whence` u003d
**`OCI_SEEK_SET`**): bool

public [setBuffering](ocilob.setbuffering.md)(bool `$mode`): bool

public [size](ocilob.size.md)(): int\|false

public [tell](ocilob.tell.md)(): int\|false

public [truncate](ocilob.truncate.md)(int `$length` u003d 0): bool

public [write](ocilob.write.md)(string `$data`, ?int `$length` u003d
**`null`**): int\|false

public [writeTemporary](ocilob.writetemporary.md)(string `$data`, int
`$type` u003d **`OCI_TEMP_CLOB`**): bool

}

## Зміст

- [OCILob::append](ocilob.append.md) — Додає дані з об'єкта
LOB в кінці іншого об'єкта
- [OCILob::close](ocilob.close.md) — Закриває дескриптор об'єкта
LOB
- [OCILob::eof](ocilob.eof.md) — Перевіряє, чи є вказівник
LOB на кінці об'єкту
- [OCILob::erase](ocilob.erase.md) — Очищає вказану частину об'єкта
LOB
- [OCILob::export](ocilob.export.md) — Зберігає вміст об'єкта
LOB у файл
- [OCILob::flush](ocilob.flush.md) — Очищає та записує буфер
об'єкта LOB на сервер
- [OCILob::free](ocilob.free.md) — Визволяє ресурси, пов'язані з
дескриптором LOB
- [OCILob::getBuffering](ocilob.getbuffering.md) - Повертає
поточний стан буферизації великого об'єкта (LOB)
- [OCILob::import](ocilob.import.md) — Записує вміст файлу в
об'єкт LOB
- [OCILob::load](ocilob.load.md) — Повертає вміст об'єкта LOB
- [OCILob::read](ocilob.read.md) — Повертає частину об'єкта LOB
- [OCILob::rewind](ocilob.rewind.md) — Перекладає вказівник об'єкта в
початок великого об'єкту
- [OCILob::save](ocilob.save.md) — Зберігає дані в LOB
- [OCILob::saveFile](ocilob.savefile.md) - Псевдонім OCILob::import
- [OCILob::seek](ocilob.seek.md) — Встановлює позицію внутрішнього
покажчика LOB
- [OCILob::setBuffering](ocilob.setbuffering.md) — Змінює поточне
стан буферизації великого об'єкта (LOB)
- [OCILob::size](ocilob.size.md) — Повертає розмір об'єкта LOB
- [OCILob::tell](ocilob.tell.md) — Повертає поточну позицію
внутрішнього покажчика об'єкта LOB
- [OCILob::truncate](ocilob.truncate.md) — Обрізає великий об'єкт
- [OCILob::write](ocilob.write.md) — Записує дані в об'єкт LOB
- [OCILob::writeTemporary](ocilob.writetemporary.md) - Записує
великий тимчасовий об'єкт (LOB)
- [OCILob::writeToFile](ocilob.writetofile.md) - Псевдонім
OCILob::export
