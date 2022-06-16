- [«stream_filter_append](function.stream-filter-append.md)
- [stream_filter_register »](function.stream-filter-register.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Прикріплює фільтр до потоку

#stream_filter_prepend

(PHP 4 \>u003d 4.3.0, PHP 5, PHP 7, PHP 8)

stream_filter_prepend — Прикріплює фільтр до потоку

### Опис

**stream_filter_prepend**(
resource `$stream`,
string `$filtername`,
int `$read_write` u003d ?,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$params` u003d ?
): resource

Додає `filtername` до списку фільтрів, прикріплених до потоку
`stream`.

### Список параметрів

`stream`
Цільовий потік.

`filtername`
Назва потоку.

`read_write`
За замовчуванням функція **stream_filter_prepend()** буде прикріплювати
фільтр до `ланцюжка фільтрів читання`, якщо файл був відкритий для читання
(тобто режим файлу: `r`, та/або `+`). Фільтр також буде прикріплений до
`ланцюжку фільтрів запису`, якщо файл був відкритий для запису (тобто режим
файлу: `w`, `a`, та/або `+`). Константи **`STREAM_FILTER_READ`**,
**`STREAM_FILTER_WRITE`** та/або **`STREAM_FILTER_ALL`** також можуть бути
передані в параметрі read_write, щоб перевизначити цю поведінку.
Дивіться функцію
[stream_filter_append()](function.stream-filter-append.md) для прикладу
використання цього параметра.

`params`
Цей фільтр буде доданий із зазначеними параметрами `params` до *початку*
списку і, таким чином, буде викликано першим під час потокових
операцій. Щоб додати фільтр до кінця списку, використовуйте
[stream_filter_append()](function.stream-filter-append.md).

### Значення, що повертаються

Повертає ресурс у разі успішного виконання або **`false`** у разі
виникнення помилки. Ресурс повинен бути використаний для посилання на цей
екземпляр фільтра під час виклику
[stream_filter_remove()](function.stream-filter-remove.md).

Поверне **`false`**, якщо `stream` не є ресурсом або якщо
`filtername` не знайдено.

### Примітки

> **Примітка**: **При використанні фільтрів користувача**
> Спочатку має бути викликана функція
> [stream_filter_register()](function.stream-filter-register.md) для
> того, щоб зареєструвати бажаний фільтр користувача на ім'я
> `filtername`.

> **Примітка**: Поточні дані читаються з ресурсів (як локальних,
> так віддалених) по шматках, і будь-які незатребувані дані зберігаються
> у внутрішніх буферах. Коли новий фільтр додається на початок потоку,
> дані у внутрішніх буферах, які вже були оброблені через інші
> фільтри, *не* будуть оброблені через новий фільтр. Це відрізняється від
> поведінки функції
> [stream_filter_append()](function.stream-filter-append.md).

> **Примітка**: Коли фільтр додається для читання та запису, створюються
> два екземпляри фільтра. Функція
> [stream_filter_append()](function.stream-filter-append.md) має
> бути викликана двічі з **`STREAM_FILTER_READ`** та
> **`STREAM_FILTER_WRITE`** щоб отримати обидва ресурси фільтра.

### Дивіться також

- [stream_filter_register()](function.stream-filter-register.md) -
Реєструє потоковий фільтр, визначений користувачем
- [stream_filter_append()](function.stream-filter-append.md) -
Прикріпити фільтр до потоку
