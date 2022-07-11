- [«Collator::getSortKey](collator.getsortkey.md)
- [Collator::setAttribute »](collator.setattribute.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Отримує поточну силу зіставлення

# Collator::getStrength

#collator_get_strength

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::getStrength -- collator_get_strength — Отримує поточну силу
зіставлення

### Опис

Об'єктно-орієнтований стиль

public **Collator::getStrength**(): int

Процедурний стиль

**collator_get_strength**([Collator](class.collator.md) `$object`):
int

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

### Значення, що повертаються

Повертає поточну силу зіставлення або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **collator_get_strength()****

` <?php$coll     u003d collator_create( 'en_US' );$strength u003d collator_get_strength( $coll );?> `

### Дивіться також

- [Константи
[Collator](class.collator.md)](class.collator.md#intl.collator-constants)
- [collator_set_strength()](collator.setstrength.md) - Встановлює
силу зіставлення
- [collator_get_attribute()](collator.getattribute.md) - Отримує
значення атрибуту зіставлення
