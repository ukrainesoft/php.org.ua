- [«diskfreespace](function.diskfreespace.md)
- [fdatasync»](function.fdatasync.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Закриває відкритий дескриптор файлу

# fclose

(PHP 4, PHP 5, PHP 7, PHP 8)

fclose — Закриває відкритий дескриптор файлу

### Опис

**fclose**(resource `$stream`): bool

Функція закриває файл, який вказує дескриптор `stream`.

### Список параметрів

`stream`
Дескриптор повинен бути коректним і вказувати на файл, відкритий раніше
за допомогою функції [fopen()](function.fopen.md) або
[fsockopen()](function.fsockopen.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Простий приклад використання функції **fclose()****

` <?php$handle u003dfopen('somefile.txt', 'r');fclose($handle);?> `

### Дивіться також

- [fopen()](function.fopen.md) - Відкриває файл або URL
- [fsockopen()](function.fsockopen.md) - Відкриває з'єднання з
інтернет-сокетом або доменним сокетом Unix
