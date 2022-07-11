- [« DateTime::createFromInterface](datetime.createfrominterface.md)
- [DateTime::modify »](datetime.modify.md)

- [PHP Manual](index.md)
- [DateTime](class.datetime.md)
- Повертає попередження та помилки

# DateTime::getLastErrors

# date_get_last_errors

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DateTime::getLastErrors -- date_get_last_errors — Повертає
попередження та помилки

### Опис

Об'єктно-орієнтований стиль

public static **DateTime::getLastErrors**(): array\|false

Процедурний стиль

[date_get_last_errors](function.date-get-last-errors.md)():
array\|false

Подібний методу
[DateTimeImmutable::getLastErrors()](datetimeimmutable.getlasterrors.md),
крім роботи з об'єктом [DateTime](class.datetime.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив містить інформацію про помилки та попередження або
**`false`**, якщо немає ні попереджень, ні помилок.

### Дивіться також

- [DateTimeImmutable::getLastErrors()](datetimeimmutable.getlasterrors.md) -
Повертає попередження та помилки
