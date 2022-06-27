- [«Collator::create](collator.create.md)
- [Collator::getErrorCode »](collator.geterrorcode.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Отримує значення атрибуту зіставлення

# Collator::getAttribute

#collator_get_attribute

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::getAttribute -- collator_get_attribute — Отримує значення
атрибуту зіставлення

### Опис

Об'єктно-орієнтований стиль

public **Collator::getAttribute**(int `$attribute`): int\|false

Процедурний стиль

**collator_get_attribute**([Collator](class.collator.md) `$object`,
int `$attribute`): int\|false

Отримує значення цілісного атрибуту зіставника.

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

`attribute`
Атрибут, для якого потрібно отримати значення.

### Значення, що повертаються

Значення атрибуту або **false** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **collator_get_attribute()****

`<?php$coll u003d collator_create( 'en_CA' );$val u003d collator_get_attribute( $coll, Collator::NUMERIC_COLLATION );if( $val u003du003du003du003dfalse ){     |

### Дивіться також

- [Константи
[Collator](class.collator.md)](class.collator.md#intl.collator-constants)
- [collator_set_attribute()](collator.setattribute.md) -
Встановлює атрибут зіставлення
- [collator_get_strength()](collator.getstrength.md) - Отримує
поточну силу зіставлення
