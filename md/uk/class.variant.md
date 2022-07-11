- [« dotnet::\_\_construct](dotnet.construct.md)
- [variant::\_\_construct »](variant.construct.md)

- [PHP Manual](index.md)
- [COM] (book.com.md)
- Клас variant

# Клас variant

(PHP 4 \>u003d 4.1.0, PHP 5, PHP 7, PHP 8)

## Вступ

VARIANT – це еквівалент zval для COM; це структура, яка може
містити значення різних допустимих типів. Клас variant входить у
модуль COM і дозволяє більше контролювати значення, що передаються від
PHP COM і назад.

## Огляд класів

class **variant** {

/\* Методи \*/

public
[\_\_construct](variant.construct.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value` u003d **`null`**, int `$type` u003d **`VT_EMPTY`**, int `$codepage` u003d
**`CP_ACP`**)

}

## Приклади variant

**Приклад #1 Приклад використання variant**

`<?php$v u003d new variant(42);print "Тип — " . variant_get_type($v) . "<br/>";print "Значення — " . $v . "<br/>";?> `

> **Примітка**:
>
> Коли повертається значення або витягається властивість, variant
> перетворюється на значення PHP тільки якщо є прямий зв'язок між
> типами, що призведе до втрати інформації. У всіх інших випадках
> результат повертається як екземпляра класу variant. Ви можете
> примусово вказати PHP конвертувати значення в типи PHP використовуючи
> оператор приведення типів або перетворювати їх у рядок,
> Використовуючи функцію [print](function.print.md). Ви можете використовувати
> безліч функцій класу для арифметичних операцій без наведення
> значень до типів PHP із ризиком втрати інформації.

Також дивіться [variant_get_type()](function.variant-get-type.md).

## Зміст

- [variant::\_\_construct](variant.construct.md) - Конструктор
класу variant
