- [«zip_entry_read](function.zip-entry-read.md)
- [zip_read »](function.zip-read.md)

- [PHP Manual](index.md)
- [Функції Zip](ref.zip.md)
- Відкриває ZIP-архів

#zip_open

(PHP 4 \>u003d 4.1.0, PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.0.0)

zip_open - Відкриває ZIP-архів

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**zip_open**(string `$filename`): resource\|int\|false

Відкриває ZIP-архів для читання.

### Список параметрів

`filename`
Ім'я файлу ZIP-архіву для відкриття.

### Значення, що повертаються

Повертає посилання на ресурс для подальшого використання з функціями
[zip_read()](function.zip-read.md) та
[zip_close()](function.zip-close.md) або повертає номер помилки,
якщо `filename` не існує або у разі іншої помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --|
| 8.0.0 | Функція застаріла на користь Object API дивіться [ZipArchive::open()](ziparchive.open.md). |

### Дивіться також

- [zip_read()](function.zip-read.md) - Зчитує наступний запис у
ZIP-архіві
- [zip_close()](function.zip-close.md) - Закриває дескриптор
ZIP-архіву
