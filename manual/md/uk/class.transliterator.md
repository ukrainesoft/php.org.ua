- [«Spoofchecker::setChecks](spoofchecker.setchecks.md)
- [Transliterator::\_\_construct »](transliterator.construct.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас Transliterator

# Клас Transliterator

(PHP 5 u003d 5.4.0, PHP 7, PHP 8, PECL intl u003d 2.0.0)

## Вступ

Цей клас надає функціональність транслітерації рядків.

## Огляд класів

class **Transliterator** {

/\* Константи \*/

const int `FORWARD` u003d 0;

const int `REVERSE` u003d 1;

/\* Властивості \*/

public string `$id`;

/\* Методи \*/

final private [\_\_construct](transliterator.construct.md)()

public static [create](transliterator.create.md)(string `$id`, int
`$direction` u003d Transliterator::FORWARD):
?[Transliterator](class.transliterator.md)

public static
[createFromRules](transliterator.createfromrules.md)(string `$rules`,
int `$direction` u003d Transliterator::FORWARD):
?[Transliterator](class.transliterator.md)

public [createInverse](transliterator.createinverse.md)():
?[Transliterator](class.transliterator.md)

public [getErrorCode](transliterator.geterrorcode.md)(): int\|false

public [getErrorMessage](transliterator.geterrormessage.md)():
string\|false

public static [listIDs](transliterator.listids.md)(): array\|false

public [transliterate](transliterator.transliterate.md)(string
`$string`, int `$start` u003d 0, int `$end` u003d -1): string\|false

}

## Властивості

`id`

## Зумовлені константи

**`Transliterator::FORWARD`**

**`Transliterator::REVERSE`**

## Зміст

- [Transliterator::\_\_construct](transliterator.construct.md) -
Приватний конструктор
- [Transliterator::create](transliterator.create.md) — Створити
транслітератор
- [Transliterator::createFromRules](transliterator.createfromrules.md)
- Створити транслітератор на основі правил
- [Transliterator::createInverse](transliterator.createinverse.md)
Створити інвертований транслітератор
- [Transliterator::getErrorCode](transliterator.geterrorcode.md) -
Отримати код останньої помилки
- [Transliterator::getErrorMessage](transliterator.geterrormessage.md)
— Отримати останнє повідомлення про помилку
- [Transliterator::listIDs](transliterator.listids.md) — Отримати
ідентифікатори транслітератора
- [Transliterator::transliterate](transliterator.transliterate.md) -
Транслітерувати рядок
