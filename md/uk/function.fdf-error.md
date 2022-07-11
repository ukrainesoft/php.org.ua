- [«fdf_errno](function.fdf-errno.md)
- [fdf_get_ap »](function.fdf-get-ap.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Повертає опис помилки для коду помилки FDF

#fdf_error

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_error — Повертає опис помилки для коду помилки FDF

### Опис

**fdf_error**(int `$error_code` u003d -1): string

Отримує текстовий опис коду помилки FDF, вказаного в error_code.

### Список параметрів

`error_code`
Код помилки отриманий за допомогою [fdf_errno()](function.fdf-errno.md).
Якщо не вказано, функція використовує код внутрішньої помилки, встановлений
останньою операцією.

### Значення, що повертаються

Повертає повідомлення про помилку у вигляді рядка або рядка `no error`, якщо
помилки немає.

### Дивіться також

- [fdf_errno()](function.fdf-errno.md) - Повертає код помилки для
останньої операції FDF
