- [«quotemeta](function.quotemeta.md)
- [setlocale »](function.setlocale.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Видаляє прогалини (або інші символи) з кінця рядка

# rtrim

(PHP 4, PHP 5, PHP 7, PHP 8)

rtrim — Видалення пробілів (або інших символів) з кінця рядка

### Опис

**rtrim**(string `$string`, string `$characters` u003d "
\x00"):
string

Ця функція повертає рядок `string` з віддаленими з кінця рядка
пробільні (або інші) символи.

Якщо другий параметр не передано, **rtrim()** видаляє такі символи:

- "" (ASCII `32` (`0x20`)), звичайний пробіл.
- "" (ASCII `9` (`0x09`)), символ табуляції.
- "
(ASCII `10` (`0x0A`)), символ перекладу рядка.
- "(ASCII `13` (`0x0D`)), символ повернення каретки.
- "" (ASCII `0` (`0x00`)), `NULL`-байт.
- "" (ASCII `11` (`0x0B`)), вертикальна табуляція.

### Список параметрів

`string`
Вхідний рядок.

`characters`
За допомогою параметра `characters` можна також вказати символи, що видаляються.
Просто перерахуйте всі символи, які ви бажаєте видалити. Можна вказати
конструкцію `..` для позначення діапазону символів.

### Значення, що повертаються

Повертає модифікований рядок.

### Приклади

**Приклад #1 Приклад використання **rtrim()****

` <?php$text u003d " These are a few words :) ...  ";$binary u003d "\x09Example string\x0A";$hello u003du003d""Hello World";var_dump($text, $ ;print "
";$trimmed u003d rtrim($text);var_dump($trimmed);$trimmed u003d rtrim($text, "  .");var_dump($trimmed);$trimmed u003d rtrim($hello, "Hdle");var_dump ($trimmed);// удаляємо керуючі ASCII-символи з кінця $binary// (від 0 до 31 включно)$clean u003d rtrim($binary, "\x00..\x1F"); > `

Результат виконання цього прикладу:

string(32) " There are a few words :) ... "
string(16) " Example string
"
string(11) "Hello World"

string(30) " There are a few words :) ..."
string(26) " There are a few words :)"
string(9) "Hello Wor"
string(15) " Example string"

### Дивіться також

- [trim()](function.trim.md) - Видаляє пробіли (або інші символи)
з початку та кінця рядка
- [ltrim()](function.ltrim.md) - Видаляє пробіли (або інші)
символи) з початку рядка
