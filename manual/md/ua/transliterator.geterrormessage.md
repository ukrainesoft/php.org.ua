- [« Transliterator::getErrorCode](transliterator.geterrorcode.md)
- [Transliterator::listIDs »](transliterator.listids.md)

- [PHP Manual](index.md)
- [Transliterator](class.transliterator.md)
- Отримати останнє повідомлення про помилку

# Transliterator::getErrorMessage

# transliterator_get_error_message

(PHP 5 u003d 5.4.0, PHP 7, PHP 8, PECL intl u003d 2.0.0)

Transliterator::getErrorMessage -- transliterator_get_error_message --
Отримати останнє повідомлення про помилку

### Опис

Об'єктно-орієнтований стиль

public **Transliterator::getErrorMessage**(): string\|false

Процедурний стиль

**transliterator_get_error_message**([Transliterator](class.transliterator.md)
`$transliterator`): string\|false

Повертає останнє повідомлення про помилку.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`transliterator`

### Значення, що повертаються

Повідомлення про помилку або **`false`**, якщо помилок не було або якщо
отримати його не вдалося.

### Дивіться також

- [Transliterator::getErrorCode()](transliterator.geterrorcode.md) -
Отримати код останньої помилки
- [Transliterator::listIDs()](transliterator.listids.md) - Отримати
ідентифікатори транслітератора
