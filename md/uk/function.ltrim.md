- [«localeconv](function.localeconv.md)
- [md5_file»](function.md5-file.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Видаляє пробіли (або інші символи) з початку рядка

# ltrim

(PHP 4, PHP 5, PHP 7, PHP 8)

ltrim — Видалення пробілів (або інших символів) з початку рядка

### Опис

**ltrim**(string `$string`, string `$characters` u003d "
\x00"):
string

Видаляє пробіли (або інші символи) з початку рядка.

### Список параметрів

`string`
Вхідний рядок.

`characters`
За допомогою параметра `characters` можна також вказати символи, що видаляються.
Просто перерахуйте всі символи, які ви бажаєте видалити. Можна вказати
конструкцію `..` для позначення діапазону символів.

### Значення, що повертаються

Ця функція повертає рядок `string` з віддаленими з початку рядка
пробілами. Якщо другий параметр не передано, **ltrim()** видаляє
такі символи:

- "" (ASCII `32` (`0x20`)), звичайний пробіл.
- "" (ASCII `9` (`0x09`)), символ табуляції.
- "
(ASCII `10` (`0x0A`)), символ перекладу рядка.
- "(ASCII `13` (`0x0D`)), символ повернення каретки.
- "" (ASCII `0` (`0x00`)), `NUL`-байт.
- "" (ASCII `11` (`0x0B`)), вертикальна табуляція.

### Приклади

**Приклад #1 Приклад використання **ltrim()****

` <?php$text u003d " These are a few words :) ...  ";$binary u003d "\x09Example string\x0A";$hello u003du003d""Hello World";var_dump($text, $ ;print "
";$trimmedu003du003dltrim($text);var_dump($trimmed);$trimmed u003d ltrim($text, "  .");var_dump($trimmed);$trimmed u003d ltrim($hello, "Hdle");var_dump ($trimmed);// удаляємо керуючі ASCII-символи початку $binary// (від 0 до 31 включно)$clean u003d ltrim($binary, "\x00..\x1F"); > `

Результат виконання цього прикладу:

string(32) " There are a few words :) ... "
string(16) " Example string
"
string(11) "Hello World"

string(30) "Це є кілька слів:) ... "
string(30) "Це є кілька слів:) ... "
string(7) "o World"
string(15) "Example string
"

### Дивіться також

- [trim()](function.trim.md) - Видаляє пробіли (або інші символи)
з початку та кінця рядка
- [rtrim()](function.rtrim.md) - Видаляє пробіли (або інші)
символи) з кінця рядка
