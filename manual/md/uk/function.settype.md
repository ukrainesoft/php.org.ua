- [«serialize](function.serialize.md)
- [strval »](function.strval.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Задає тип змінної

# settype

(PHP 4, PHP 5, PHP 7, PHP 8)

settype — Задає тип змінної

### Опис

**settype**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`, string `$type`): bool

Задає тип `type` змінної `var`.

### Список параметрів

`var`
Перетворена змінна.

`type`
Допустимими значеннями параметра `type` є:

- "boolean" або "bool"
- "integer" або "int"
- "float" або "double"
- "string"
- "array"
- "object"
- "null"

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **settype()****

`<?php$foo u003d "5bar"; // рядок$bar u003d true; // Бульове значення settype ($ foo, "integer"); // $foo тепер 5   (ціле)settype($bar, "string"); // $bar тепер "1" (рядок)?> `

### Примітки

> **Примітка**:
>
> Максимальне значення для "int" дорівнює **`PHP_INT_MAX`**.

### Дивіться також

- [gettype()](function.gettype.md) - Повертає тип змінної
- [Приведення
типів](language.types.type-juggling.md#language.types.typecasting)
- [Маніпуляції з типами](language.types.type-juggling.md)
