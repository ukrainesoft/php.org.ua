- [«Collator::getErrorCode](collator.geterrorcode.md)
- [Collator::getLocale »](collator.getlocale.md)

- [PHP Manual](index.md)
- [Collator](class.collator.md)
- Отримує текст для останньої помилки коду Collator

# Collator::getErrorMessage

#collator_get_error_message

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

Collator::getErrorMessage -- collator_get_error_message -- Отримує текст
для коду останньої помилки Collator

### Опис

Об'єктно-орієнтований стиль

public **Collator::getErrorMessage**(): string\|false

Процедурний стиль

**collator_get_error_message**([Collator](class.collator.md)
`$object`): string\|false

Отримує повідомлення про останню помилку.

### Список параметрів

`object`
Об'єкт [Collator](class.collator.md).

### Значення, що повертаються

Опис помилки, повернутий останнім викликом функції API Collator або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **collator_get_error_message()****

` <?php$coll u003d collator_create( 'lt' );if( collator_compare( $coll, 'y', 'k' ) u003du003du003du003dfalse ) {    echo collator_get_error_message($);

### Дивіться також

- [collator_get_error_code()](collator.geterrorcode.md) - Отримує
останній код помилки Collator
