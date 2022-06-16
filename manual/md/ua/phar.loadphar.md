- [« Phar::isWritable](phar.iswritable.md)
- [Phar::mapPhar »](phar.mapphar.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Завантажити phar-архів із псевдонімом

# Phar::loadPhar

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::loadPhar — Завантажити phar-архів із псевдонімом

### Опис

final public static **Phar::loadPhar**(string `$filename`, ?string
`$alias` u003d **`null`**): bool

Може використовуватись для завантаження зовнішнього Phar-архіву. Те, що для
phar-архіва призначається псевдонім, що дозволяє надалі використовувати
більш короткі посилання для доступу до нього або для завантаження архівів
Phar, що містять лише дані і не призначені для виконання.

### Список параметрів

`filename`
Шлях до завантажуваного phar-архіву

`alias`
Псевдонім для доступу до архіву. Зверніть увагу, що багато хто
phar-архіви мають свій явно заданий псевдонім і при заданні нового
псевдоніма, буде викинуто виняток
[PharException](class.pharexception.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Якщо заданий параметр із псевдонімом, а архів, що завантажується, вже має
псевдонім, то буде викинуто виняток
[PharException](class.pharexception.md)

### Приклади

**Приклад #1 Приклад використання **Phar::loadPhar()****

Phar::loadPhar можна використовувати будь-де, тоді як Phar::mapPhar
тільки у завантажувачі (stub) Phar-архіву.

` <?phptry {    Phar::loadPhar('/path/to/phar.phar', 'my.phar'); echo file_get_contents('phar://my.phar/file.txt');} catch (PharException $e) {   echo $e;}?> `

### Дивіться також

- [Phar::mapPhar()](phar.mapphar.md) - Прочитати поточний запущений
phar-архів та зареєструвати його маніфест
