- [«fdf_set_encoding](function.fdf-set-encoding.md)
- [fdf_set_flags »](function.fdf-set-flags.md)

- [PHP Manual](index.md)
- [FDF](ref.fdf.md)
- Встановлює PDF-документ для відображення даних FDF

#fdf_set_file

(PHP 4, PHP 5 \< 5.3.0, PECL fdf SVN)

fdf_set_file — Встановлює PDF-документ для відображення даних FDF

### Опис

**fdf_set_file**(resource `$fdf_document`, string `$url`, string
`$target_frame` u003d ?): bool

Вибирає інший PDF-файл для відображення результатів форми в тій
формі, з якої він був створений.

### Список параметрів

`fdf_document`
Дескриптор документа FDF, що повертається
[fdf_create()](function.fdf-create.md),
[fdf_open()](function.fdf-open.md) or
[fdf_open_string()](function.fdf-open-string.md).

`url`
Повинна бути вказана абсолютна URL-адреса.

`target_frame`
Використовуйте цей параметр, щоб вказати кадр, у якому буде
відображається документ. Ви також можете встановити значення за замовчуванням
для цього параметра за допомогою
[fdf_set_target_frame()](function.fdf-set-target-frame.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Передача даних FDF у другу форму**

` <?php  /* Установка типу вмісту для Adobe FDF */ fdf_header(); /* Створення нового fdf */  $fdf u003d fdf_create(); /* Установка значення "bar" в поле "foo" */ fdf_set_value($fdf, "foo", "bar"); /* повідомлення клієнту, потрібно відображати дані FDF, використовуючи "fdf_form.pdf" */ fdf_set_file($fdf, "http://www.example.com/fdf_form.pdf"); /* виведення fdf */ fdf_save($fdf); /* закриття */ fdf_close($fdf);?> `

### Дивіться також

- [fdf_get_file()](function.fdf-get-file.md) - Отримує значення
ключа /F
- [fdf_set_target_frame()](function.fdf-set-target-frame.md) -
Встановлює цільовий кадр для відображення форми
