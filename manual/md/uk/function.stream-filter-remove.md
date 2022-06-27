- [«stream_filter_register](function.stream-filter-register.md)
- [stream_get_contents »](function.stream-get-contents.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Видалити фільтр із потоку

#stream_filter_remove

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

stream_filter_remove — Видалити фільтр із потоку

### Опис

**stream_filter_remove**(resource `$stream_filter`): bool

Видаляє потоковий фільтр, раніше доданий до потоку за допомогою функції
[stream_filter_prepend()](function.stream-filter-prepend.md) або
[stream_filter_append()](function.stream-filter-append.md). Будь-які
дані, що залишилися у внутрішньому буфері фільтра, будуть відправлені в
наступний фільтр до його видалення.

### Список параметрів

`stream_filter`
Поточний фільтр видалення.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Динамічна зміна фільтрів потоку**

` <?php/* Відкриття тестового файлу для читання і записи */$fp u003dfopen("test.txt", "rw");$rot13_filter u003d stream_filter_append($fp,_3 $fp, "This is ");stream_filter_remove($rot13_filter);fwrite($fp, "a test
");rewind($fp);fpassthru($fp);fclose($fp);?> `

Результат виконання цього прикладу:

Guvf vf a test

### Дивіться також

- [stream_filter_register()](function.stream-filter-register.md) -
Реєструє потоковий фільтр, визначений користувачем
- [stream_filter_append()](function.stream-filter-append.md) -
Прикріпити фільтр до потоку
- [stream_filter_prepend()](function.stream-filter-prepend.md) -
Прикріплює фільтр до потоку
