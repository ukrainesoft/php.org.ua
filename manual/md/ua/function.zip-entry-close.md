- [«zip_close](function.zip-close.md)
- [zip_entry_compressedsize »](function.zip-entry-compressedsize.md)

- [PHP Manual](index.md)
- [Функції Zip](ref.zip.md)
- Закриває дескриптор директорії

#zip_entry_close

(PHP 4 \>u003d 4.1.0, PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.0.0)

zip_entry_close - Закриває дескриптор директорії

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**zip_entry_close**(resource `$zip_entry`): bool

Закриває заданий дескриптор директорії.

### Список параметрів

`zip_entry`
Дескриптор директорії, раніше відкритий функцією
[zip_entry_open()](function.zip-entry-open.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------|
| 8.0.0 | Функція застаріла на користь Object API. |

### Дивіться також

- [zip_entry_open()](function.zip-entry-open.md) - Відкриває
директорію для читання
- [zip_entry_read()](function.zip-entry-read.md) - Читає дані з
відкритого раніше дескриптора директорії
