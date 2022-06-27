- [«finfo_set_flags](function.finfo-set-flags.md)
- [finfo »](class.finfo.md)

- [PHP Manual](index.md)
- [Функції модуля Fileinfo](ref.fileinfo.md)
- Визначає MIME-тип вмісту файлу

# mime_content_type

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

mime_content_type — Визначає MIME-тип вмісту файлу

### Опис

**mime_content_type**(resource\|string `$filename`): string\|false

Повертає MIME-тип вмісту файлу, використовуючи визначення
інформацію з файлу `magic.mime`.

### Список параметрів

`filename`
Шлях до файлу, що перевіряється.

### Значення, що повертаються

Повертає тип вмісту у форматі MIME, наприклад `text/plain` або
`application/octet-stream` або **`false`** у разі виникнення
помилки.

### Помилки

У разі невдалого завершення роботи генерується помилка рівня
**`E_WARNING`**.

### Приклади

**Приклад #1 Приклад **mime_content_type()****

`<?phpecho mime_content_type('php.gif') . "
";echo mime_content_type('test.php');?> `

Результат виконання цього прикладу:

image/gif
text/plain

### Дивіться також

- [finfo_file()](finfo.file.md) - Псевдонім finfo_file()
- [finfo_buffer()](finfo.buffer.md) - Псевдонім finfo_buffer()
