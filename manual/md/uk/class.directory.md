- [«Зумовлені константи](dir.constants.md)
- [Directory::close »](directory.close.md)

- [PHP Manual](index.md)
- [Каталоги](book.dir.md)
- Клас Directory

# Клас Directory

(PHP 4, PHP 5, PHP 7, PHP 8)

## Вступ

Примірники класу **Directory** створюються за допомогою виклику функції
[dir()](function.dir.md), а не за допомогою оператора
[new](language.oop5.basic.md#language.oop5.basic.new).

## Огляд класів

class **Directory** {

/\* Властивості \*/

public readonly string `$path`;

public readonly resource `$handle`;

/\* Методи \*/

public [close](directory.close.md)(): void

public [read](directory.read.md)(): string\|false

public [rewind](directory.rewind.md)(): void

}

## Властивості

`path`
Каталог, який було відкрито.

`handle`
Може бути використано з іншими функціями каталогів, такими як
[readdir()](function.readdir.md),
[rewinddir()](function.rewinddir.md) та
[closedir()](function.closedir.md).

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------------|
| 8.1.0 | Властивості `path` та `handle` тепер доступні тільки для читання. |

## Зміст

- [Directory::close](directory.close.md) - Закриває дескриптор
каталогу
- [Directory::read](directory.read.md) — Отримує елемент із
дескриптора каталогу
- [Directory::rewind](directory.rewind.md) — Переміщення дескриптора
каталогу на початок каталогу
