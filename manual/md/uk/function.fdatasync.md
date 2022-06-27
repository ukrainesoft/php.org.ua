- [«fcclose](function.fclose.md)
- [feof »] (function.feof.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Синхронізує дані (але не метадані) із файлом

#fdatasync

(PHP 8 \>u003d 8.1.0)

fdatasync — Синхронізує дані (але не метадані) з файлом

### Опис

**fdatasync**(resource `$stream`): bool

Функція синхронізує вміст `stream` з накопичувачем, як і
[fsync()](function.fsync.md), але не синхронізує метадані файлу.
Варто звернути увагу, що ця функція фактично відрізняється лише
у системах POSIX. У Windows вона є псевдонімом
[fsync()](function.fsync.md).

### Список параметрів

`stream`
Вказівник на файл повинен бути коректним і вказувати на файл успішно
відкритий функціями [fopen()](function.fopen.md) або
[fsockopen()](function.fsockopen.md) (і все ще не закритий функцією
[fclose()](function.fclose.md)).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **fdatasync()****

` <?php$file u003d 'test.txt';$stream u003dfopen($file, 'w');fwrite($stream, 'тестові дані');fwrite($stream, "
");fwrite($stream, 'додаткові дані');fdatasync($stream);fclose($stream);?> `

### Дивіться також

- [fflush()](function.fflush.md) - Скидає буфер виводу у файл
- [fsync()](function.fsync.md) - Синхронізує зміни у файлі
(включаючи метадані)
