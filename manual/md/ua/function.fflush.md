- [«feof](function.feof.md)
- [fgetc »] (function.fgetc.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- скидає буфер виводу у файл

# fflush

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

fflush — Скидає буфер виводу у файл

### Опис

**fflush**(resource `$stream`): bool

Ця функція здійснює скидання буферизованих даних у файл,
який вказує `stream`.

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

**Приклад #1 Приклад запису файлу за допомогою **fflush()****

` <?php$filename u003d 'bar.txt';$file u003dfopen($filename, 'r+');rewind($file);fwrite($file, 'Foo');fflush($file);ftruncate( $file, ftell($file));fclose($file);?> `

### Дивіться також

- [clearstatcache()](function.clearstatcache.md) - Очищує кеш
стану файлів
- [fwrite()](function.fwrite.md) - Бінарно-безпечний запис у файл
