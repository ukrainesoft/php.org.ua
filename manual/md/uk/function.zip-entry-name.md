- [«zip_entry_filesize](function.zip-entry-filesize.md)
- [zip_entry_open »](function.zip-entry-open.md)

- [PHP Manual](index.md)
- [Функції Zip](ref.zip.md)
- Отримує ім'я дескриптора директорії

#zip_entry_name

(PHP 4 \>u003d 4.1.0, PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.0.0)

zip_entry_name — Отримує ім'я дескриптора директорії

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**zip_entry_name**(resource `$zip_entry`): string\|false

Повертає ім'я дескриптора директорії.

### Список параметрів

`zip_entry`
Дескриптор директорії, що повертається функцією
[zip_read()](function.zip-read.md).

### Значення, що повертаються

Ім'я дескриптора директорії або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------|
| 8.0.0 | Функція застаріла на користь Object API, дивіться [ZipArchive::statIndex()](ziparchive.statindex.md). |

### Дивіться також

- [zip_open()](function.zip-open.md) - Відкриває ZIP-архів
- [zip_read()](function.zip-read.md) - Зчитує наступний запис у
ZIP-архіві
