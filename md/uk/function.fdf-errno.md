- [«fdf_enum_values](function.fdf-enum-values.md)
- [fdf_error »](function.fdf-error.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Повертає код помилки для останньої операції FDF

#fdf_errno

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_errno — Повертає код помилки для останньої операції FDF

### Опис

**fdf_errno**(): int

Отримує код помилки, встановлений останнім викликом FDF.

Текстовий опис помилки можна отримати за допомогою
[fdf_error()](function.fdf-error.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повернення коду помилки як ціле число або нуль, якщо помилок не було.

### Дивіться також

- [fdf_error()](function.fdf-error.md) - Повертає опис помилки
для коду помилки FDF
