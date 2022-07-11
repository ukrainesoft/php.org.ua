- [«fdf_next_field_name](function.fdf-next-field-name.md)
- [fdf_open »](function.fdf-open.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Читає FDF документ з рядка

#fdf_open_string

(PHP 4 \>u003d 4.3.0, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_open_string — Читає документ FDF з рядка

### Опис

**fdf_open_string**(string `$fdf_data`): resource

Зчитує дані форми з рядка.

Ви можете використовувати **fdf_open_string()** разом із `$HTTP_FDF_DATA`
для обробки введення форми FDF від віддаленого клієнта.

### Список параметрів

`fdf_data`
Дані, повернені з PDF форми або створені за допомогою
[fdf_create()](function.fdf-create.md) та
[fdf_save_string()](function.fdf-save-string.md).

### Значення, що повертаються

Повертає дескриптор FDF документа або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Доступ до даних форми**

` <?php$fdf u003d fdf_open_string($HTTP_FDF_DATA);/* ... */fdf_close($fdf);?> `

### Дивіться також

- [fdf_open()](function.fdf-open.md) - Відкриває документ FDF
- [fdf_close()](function.fdf-close.md) - Закриває FDF-документ
- [fdf_create()](function.fdf-create.md) - Створює новий документ
FDF
- [fdf_save_string()](function.fdf-save-string.md) - Повертає
документ FDF у вигляді рядка
