- [«Collator::\_\_construct](collator.construct.md)
- [Collator::getAttribute »](collator.getattribute.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Створює новий екземпляр Collator

# Collator::create

#collator_create

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::create -- collator_create — Створює новий екземпляр Collator

### Опис

Об'єктно-орієнтований стиль

public static **Collator::create**(string `$locale`):
?[Collator](class.collator.md)

Процедурний стиль

**collator_create**(string `$locale`): ?[Collator](class.collator.md)

Рядки порівнюватимуться з використанням уже вказаних параметрів.

### Список параметрів

`locale`
Локаль, що містить необхідні правила зіставлення. Можуть бути
передані спеціальні значення для мовних стандартів, якщо для
мовного стандарту передано порожній рядок (string), будуть
використовувати правила зіставлення мовних стандартів за промовчанням.
Якщо передається значення "root", будуть використовуватися правила
[» UCA](http://www.unicode.org/reports/tr10/).

### Значення, що повертаються

Повертає новий екземпляр [Collator](class.collator.md) або
**`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **collator_create()****

` <?php$coll u003d collator_create( 'en_US' );if( !isset( $coll ) ) {    printf( "Не удалося створити Collator: %s
", intl_get_error_message() );   exit( 1 );}?> `

### Дивіться також

- [Collator::\_\_construct()](collator.construct.md) - Створює новий
екземпляр Collator
