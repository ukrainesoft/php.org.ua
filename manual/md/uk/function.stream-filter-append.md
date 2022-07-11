- [«stream_copy_to_stream](function.stream-copy-to-stream.md)
- [stream_filter_prepend »](function.stream-filter-prepend.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Прикріпити фільтр до потоку

#stream_filter_append

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

stream_filter_append — Прикріпити фільтр до потоку

### Опис

**stream_filter_append**(
resource `$stream`,
string `$filtername`,
int `$read_write` u003d ?,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$params` u003d ?
): resource

Додає `filtername` до списку фільтрів, прикріплених до `stream`.

### Список параметрів

`stream`
Цільовий потік.

`filtername`
Назва фільтра.

`read_write`
За замовчуванням **stream_filter_append()** буде кріпити фільтр до
`ланцюжку фільтрів читання`, якщо файл був відкритий для читання (тобто режим
файлу: `r`, та/або `+`). Фільтр також буде прикріплений до
`ланцюжку фільтрів запису`, якщо файл був відкритий для запису (тобто режим
файлу: `w`, `a`, та/або `+`). Константи **`STREAM_FILTER_READ`**,
**`STREAM_FILTER_WRITE`** та/або **`STREAM_FILTER_ALL`** також можуть бути
передані в параметрі read_write, щоб перевизначити цю поведінку.

`params`
Цей фільтр буде доданий із зазначеними `params` до *кінця* списку та,
таким чином, буде викликано останнім у списку потокових операцій. Щоб
додати фільтр на початок списку, використовуйте
[stream_filter_prepend()](function.stream-filter-prepend.md).

### Значення, що повертаються

Повертає ресурс у разі успішного виконання або **`false`** при
невдачі. Ресурс повинен бути використаний для посилання на цей примірник
фільтра під час виклику
[stream_filter_remove()](function.stream-filter-remove.md).

Поверне **`false`**, якщо `stream` не є ресурсом або якщо
`filtername` не знайдено.

### Приклади

**Приклад #1 Контроль застосування фільтрів**

` <?php/* Відкриваємо тестовий файл для читання і записи */$fp u003d fopen('test.txt', 'w+'); /stream_filter_append($fp, "string.rot13", STREAM_FILTER_WRITE);/* Запишемо простий рядок в файл * вона будеперетворена при допомоги ROT13 s t 
");/* Назад к началу файла */rewind($fp);/* Прочитаем содержимое файла. * Если фильтр также был бы прикреплён к * цепочке фильтров чтения, мы бы увидели * преобразованный при помощи ROT13 текст в исходном состоянии */ fpassthru($fp);fclose($fp);/* Очікуваний висновок  ---------------Guvf vf n grfg */?> `

### Примітки

> **Примітка**: **При використанні фільтрів користувача**
> Спочатку має бути викликана функція
> [stream_filter_register()](function.stream-filter-register.md) для
> того, щоб зареєструвати бажаний фільтр користувача на ім'я
> `filtername`.

> **Примітка**: Поточні дані читаються з ресурсів (як локальних,
> так віддалених) по шматках, і будь-які незатребувані дані зберігаються
> у внутрішніх буферах. Коли новий фільтр додається до кінця потоку,
> дані у внутрішніх буферах обробляються через новий фільтр. Це
> відрізняється від поведінки функції
> [stream_filter_prepend()](function.stream-filter-prepend.md).

> **Примітка**: Коли фільтр додається для читання та запису, створюються
> два екземпляри фільтра. Функція **stream_filter_append()** має бути
> викликана двічі з **`STREAM_FILTER_READ`** та **`STREAM_FILTER_WRITE`**
> щоб отримати обидва ресурси фільтра.

### Дивіться також

- [stream_filter_register()](function.stream-filter-register.md) -
Реєструє потоковий фільтр, визначений користувачем
- [stream_filter_prepend()](function.stream-filter-prepend.md) -
Прикріплює фільтр до потоку
- [stream_get_filters()](function.stream-get-filters.md) - Отримати
список зареєстрованих фільтрів
