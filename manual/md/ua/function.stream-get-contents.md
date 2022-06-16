- [«stream_filter_remove](function.stream-filter-remove.md)
- [stream_get_filters »](function.stream-get-filters.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Читає частину потоку, що залишилася, в рядок

#stream_get_contents

(PHP 5, PHP 7, PHP 8)

stream_get_contents — Читає частину потоку, що залишилася, в рядок

### Опис

**stream_get_contents**(resource `$stream`, ?int `$length` u003d **`null`**,
int `$offset` u003d -1): string\|false

Схожа на функцію
[file_get_contents()](function.file-get-contents.md), за винятком
того, що **stream_get_contents()** працює з уже відкритим ресурсом
потоку і повертає решту вмісту в рядок розміром до
`length` байт і починаючи із зазначеного зміщення `offset`.

### Список параметрів

`stream` (resource)
Ресурс потоку (наприклад, отриманий за допомогою функції
[fopen()](function.fopen.md))

`length` (int)
Максимальна кількість байт для читання. Типово **`null`**
(прочитати весь буфер, що залишився).

`offset` (int)
Перейти до вказаного усунення перед читанням. Якщо це число
негативне, то перехід не відбудеться і читання почнеться з поточної
позиції.

### Значення, що повертаються

Повертає рядок або **false** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --|
| 8.0.0 | `length` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **stream_get_contents()****

`<?phpif ($stream u003dfopen('http://www.example.com', 'r')) {    // вивести всю сторінку починаючи зі зміщення 10    echo stream_get  fclose($stream);}if ($stream u003d fopen('http://www.example.net', 'r')) {    // вивести перші 5 байт    echo stream_get_contents($stream, fclose($stream);}?> `

### Примітки

> **Примітка**: Ця функція безпечна для обробки даних у двійковій
> Формі.

### Дивіться також

- [fgets()](function.fgets.md) - Читає рядок із файлу
- [fread()](function.fread.md) - Бінарно-безпечне читання файлу
- [fpassthru()](function.fpassthru.md) - Виводить всі, що залишилися.
дані з файлового покажчика
