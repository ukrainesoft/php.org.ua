- [«eio_symlink](function.eio-symlink.md)
- [eio_sync »](function.eio-sync.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Синхронізує сегмент файлу із даними файлу на зовнішньому сховищі

#eio_sync_file_range

(PECL eio \>u003d 0.0.1dev)

eio_sync_file_range — Синхронізує сегмент файлу з даними файлу на
зовнішньому сховищі

### Опис

**eio_sync_file_range**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd`,
int `$offset`,
int `$nbytes`,
int `$flags`,
int `$pri` u003d EIO_PRI_DEFAULT,
[callable](language.types.callable.md) `$callback` u003d NULL,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$data u003d NULL
): resource

**eio_sync_file_range()** здійснює необхідні перевірки та дії
при синхронізації відкритого файлу `fd` з дисковою підсистемою.

### Список параметрів

`fd`
Файловий описувач

`offset`
Початкова позиція, з якою проводитиметься синхронізація

`nbytes`
Задає довжину сегмента файлу в байтах, яку потрібно
синхронізувати. Якщо `nbytes` дорівнює нулю, будуть синхронізовані всі
дані від `offset` до кінця файла.

`flags`
Бітова маска. Може включати комбінацію з наступних значень:
**`EIO_SYNC_FILE_RANGE_WAIT_BEFORE`**, **`EIO_SYNC_FILE_RANGE_WRITE`**,
**`EIO_SYNC_FILE_RANGE_WAIT_AFTER`**. Ці прапори мають те ж саме
призначення, що й аналогічні константи *SYNC_FILE_RANGE\_\**
(дивіться сторінку керівництва `SYNC_FILE_RANGE(2)`).

`pri`
Пріоритет запитів: **`EIO_PRI_DEFAULT`**, **`EIO_PRI_MIN`**,
**`EIO_PRI_MAX`**, або **`null`**. Якщо переданий **`null`**, то `pri`
встановлюється у **`EIO_PRI_DEFAULT`**.

`callback`
Функція callback викликається при завершенні запиту. Вона повинна
задовольняти наступний прототип:

` void callback(mixed $data, int $result[, resource $req]);'

`data`
є даними користувача, переданими в запиті.

`result`
містить результуюче значення, що залежить від запиту; зазвичай це
значення, яке повертається відповідним системним викликом.

`req`
є опціональним запитуваним ресурсом, який може
використовуватися з такими функціями як
[eio_get_last_error()](function.eio-get-last-error.md)

`data`
Дані, які потрібно передати функції `callback`.

### Значення, що повертаються

**eio_sync_file_range()** повертає ресурс запиту у разі успішного
виконання або **`false`** у разі виникнення помилки.
