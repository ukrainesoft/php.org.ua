- [« Transliterator::createInverse](transliterator.createinverse.md)
- [Transliterator::getErrorMessage
»](transliterator.geterrormessage.md)

- [PHP Manual](index.md)
- [Transliterator](class.transliterator.md)
- Отримати код останньої помилки

# Transliterator::getErrorCode

# transliterator_get_error_code

(PHP 5 u003d 5.4.0, PHP 7, PHP 8, PECL intl u003d 2.0.0)

Transliterator::getErrorCode -- transliterator_get_error_code — Отримати
код останньої помилки

### Опис

Об'єктно-орієнтований стиль

public **Transliterator::getErrorCode**(): int\|false

Процедурний стиль

**transliterator_get_error_code**([Transliterator](class.transliterator.md)
`$transliterator`): int\|false

Повертає код останньої помилки.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`transliterator`

### Значення, що повертаються

Код помилки або **`false`**, якщо помилок не було або якщо отримати його не
вдалося.

### Дивіться також

- [Transliterator::getErrorMessage()](transliterator.geterrormessage.md) -
Отримати останнє повідомлення про помилку
- [Transliterator::listIDs()](transliterator.listids.md) - Отримати
ідентифікатори транслітератора
