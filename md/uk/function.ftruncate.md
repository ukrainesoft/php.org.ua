- [«ftell](function.ftell.md)
- [fwrite »] (function.fwrite.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Урізує файл до вказаної довжини

# ftruncate

(PHP 4, PHP 5, PHP 7, PHP 8)

ftruncate — Урізує файл до вказаної довжини

### Опис

**ftruncate**(resource `$stream`, int `$size`): bool

Приймає файловий покажчик `stream` та урізає відповідний файл до
розміру `size`.

### Список параметрів

`stream`
Вказівник файлу.

> **Примітка**:
>
> `stream` має бути відкритим для запису.

`size`
Розмір файлу, до якого він буде обрізаний.

> **Примітка**:
>
> Якщо `size` більше поточного розміру файлу, файл буде доповнений
> нульовими байтами.
>
> Якщо `size` менше поточного розміру файлу, файл буде обрізаний до
> цього розміру.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад обрізання файлу**

` <?php$filename u003d 'lorem_ipsum.txt';$handle u003dfopen($filename, 'r+');ftruncate($handle, rand(1, filesize($filename)));rewind($handle);echo fread($handle, filesize($filename));fclose($handle);?> `

### Примітки

> **Примітка**:
>
> Файловий покажчик *не* змінюється.

### Дивіться також

- [fopen()](function.fopen.md) - Відкриває файл або URL
- [fseek()](function.fseek.md) - Встановлює зміщення у файловому
вказівнику
