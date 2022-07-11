- [«fstat](function.fstat.md)
- [ftell »] (function.ftell.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Синхронізує зміни у файлі (включаючи метадані)

#fsync

(PHP 8 \>u003d 8.1.0)

fsync — Синхронізує зміни у файлі (включаючи метадані)

### Опис

**fsync**(resource `$stream`): bool

Функція синхронізує зміни у файлі, включаючи його метадані. Вона
схожа на [fflush()](function.fflush.md), але також дає
інструкції операційної системи про запис на накопичувач.

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

**Приклад #1 Приклад використання **fsync()****

` <?php$file u003d 'test.txt';$stream u003dfopen($file, 'w');fwrite($stream, 'тестові дані');fwrite($stream, "
");fwrite($stream, 'додаткові дані');fsync($stream);fclose($stream);?> `

### Дивіться також

- [fdatasync()](function.fdatasync.md) - Синхронізує дані (але
не метадані) з файлом
- [fflush()](function.fflush.md) - Скидає буфер виводу у файл
