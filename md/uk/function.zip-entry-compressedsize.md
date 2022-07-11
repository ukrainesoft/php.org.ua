- [«zip_entry_close](function.zip-entry-close.md)
- [zip_entry_compressionmethod
»](function.zip-entry-compressionmethod.md)

- [PHP Manual](index.md)
- [Функції Zip](ref.zip.md)
- Повертає стислий розмір файлу для дескриптора директорії

#zip_entry_compressedsize

(PHP 4 \>u003d 4.1.0, PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.0.0)

zip_entry_compressedsize — Повертає стислий розмір файлу
дескриптора директорії

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**zip_entry_compressedsize**(resource `$zip_entry`): int\|false

Повертає стислий розмір заданого дескриптора директорії.

### Список параметрів

`zip_entry`
Дескриптор директорії, що повертається функцією
[zip_read()](function.zip-read.md).

### Значення, що повертаються

Стиснутий розмір дескриптора директорії або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------|
| 8.0.0 | Функція застаріла на користь Object API, дивіться [ZipArchive::statIndex()](ziparchive.statindex.md). |

### Дивіться також

- [zip_open()](function.zip-open.md) - Відкриває ZIP-архів
- [zip_read()](function.zip-read.md) - Зчитує наступний запис у
ZIP-архіві
