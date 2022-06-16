- [«finfo_close](function.finfo-close.md)
- [finfo_open »](function.finfo-open.md)

- [PHP Manual](index.md)
- [Функції модуля Fileinfo](ref.fileinfo.md)
- Повертає інформацію про файл

# finfo_file

# finfo::file

(PHP \>u003d 5.3.0, PHP 7, PHP 8, PECL fileinfo \>u003d 0.1.0)

finfo_file -- finfo::file — Повертає інформацію про файл

### Опис

Процедурний стиль

[finfo_file](finfo.file.md)(
[finfo](class.finfo.md) `$finfo`,
string `$filename`,
int `$flags` u003d **`FILEINFO_NONE`**,
?resource `$context` u003d **`null`**
): string\|false

Об'єктно-орієнтований стиль

public [finfo::file](finfo.file.md)(string `$filename`, int `$flags` u003d
**`FILEINFO_NONE`**, ?resource `$context` u003d **`null`**): string\|false

Функція використовується для отримання інформації щодо файлу.

### Список параметрів

`finfo`
Примірник [finfo](class.finfo.md), що повертається функцією
[finfo_open()](function.finfo-open.md).

`filename`
Назва файлу, що перевіряється.

`flags`
Одна або кілька об'єднаних через бінарне АБО [констант
Fileinfo](fileinfo.constants.md).

`context`
Для опису `contexts`, дивіться [Функції для роботи з
потоками] (ref.stream.md).

### Значення, що повертаються

Повертає текстовий опис вмісту файлу `filename` або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------------------------|
| 8.1.0 | Параметр `finfo` тепер чекає на екземпляр [finfo](class.finfo.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | 'context' тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання [finfo_file()](finfo.file.md)**

`<?php$finfou003du003dfinfo_open(FILEINFO_MIME_TYPE); // повертає mime-типforeach (glob("*") as $filename) {    echo finfo_file($finfo, $filename) . "
";}finfo_close($finfo);?> `

Результатом виконання цього прикладу буде щось подібне:

text/html
image/gif
application/vnd.ms-excel

### Дивіться також

- [finfo_buffer()](finfo.buffer.md) - Псевдонім finfo_buffer()
