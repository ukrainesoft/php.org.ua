- [«Collator::getAttribute](collator.getattribute.md)
- [Collator::getErrorMessage »](collator.geterrormessage.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Отримує останній код помилки Collator

# Collator::getErrorCode

#collator_get_error_code

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::getErrorCode - collator_get_error_code - Отримує останній
код помилки Collator

### Опис

Об'єктно-орієнтований стиль

public **Collator::getErrorCode**(): int\|false

Процедурний стиль

**collator_get_error_code**([Collator](class.collator.md) `$object`):
int\|false

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

### Значення, що повертаються

Код помилки, повернутий останнім викликом функції API Collator або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **collator_get_error_code()****

` <?php$coll u003d collator_create( 'en_US' );if( collator_get_attribute( $coll, Collator::FRENCH_COLLATION ) u003du003du003d false )        handle_error

### Дивіться також

- [collator_get_error_message()](collator.geterrormessage.md) -
Отримує текст для останньої помилки Collator
