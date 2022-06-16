- [«substr](function.substr.md)
- [ucfirst »] (function.ucfirst.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Видаляє пробіли (або інші символи) з початку та кінця рядка

#trim

(PHP 4, PHP 5, PHP 7, PHP 8)

trim — Видалення пробілів (або інших символів) з початку та кінця рядка

### Опис

**trim**(string `$string`, string `$characters` u003d "
\x00"):
string

Ця функція повертає рядок `string` з віддаленими з початку та кінця
рядки пробілами. Якщо другий параметр не передано, **trim()** видаляє
такі символи:

- "" (ASCII `32` (`0x20`)), звичайний пробіл.
- "" (ASCII `9` (`0x09`)), символ табуляції.
- "
(ASCII `10` (`0x0A`)), символ перекладу рядка.
- "(ASCII `13` (`0x0D`)), символ повернення каретки.
- "" (ASCII `0` (`0x00`)), `NUL`-байт.
- "" (ASCII `11` (`0x0B`)), вертикальна табуляція.

### Список параметрів

`string`
Обрізний рядок (string).

`characters`
Можна також встановити список символів для видалення за допомогою
необов'язкового аргументу `characters`. Просто перерахуйте всі символи,
ви хочете видалити. Можна вказати конструкцію `..` для
позначення діапазону символів.

### Значення, що повертаються

Обрізний рядок.

### Приклади

**Приклад #1 Приклад використання **trim()****

` <?php$text   u003d " These are a few words :) ...  ";$binary u003d "\x09Example string\x0A";$hello  u003d "Hello World";var_dump$$$ ;print "
";$trimmed u003d trim($text);var_dump($trimmed);$trimmed u003d trim($text, "  .");var_dump($trimmed);$trimmed u003d trim($hello, "Hdle");var_dump ($trimmed);$trimmed u003d trim($hello, HdWr');var_dump($trimmed); ($binary, "\x00..\x1F");var_dump($clean);?> `

Результат виконання цього прикладу:

string(32) " There are a few words :) ... "
string(16) " Example string
"
string(11) "Hello World"

string(28) "There are a few words :) ..."
string(24) "These are a few words :)"
string(5) "o Wor"
string(9) "ello Worl"
string(14) "Example string"

**Приклад #2 Обрізання значень масиву за допомогою **trim()****

` <?phpfunction trim_value(&$value){   $value u003d trim($value);}$fruit u003d array('apple','banana ', ' cranberry ');var_dump($fruit 'trim_value');var_dump($fruit);?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
string(5) "apple"
[1]u003d>
string(7) "banana"
[2]u003d>
string(11) " cranberry "
}
array(3) {
[0]u003d>
string(5) "apple"
[1]u003d>
string(6) "banana"
[2]u003d>
string(9) "cranberry"
}

### Примітки

> **Примітка**: **Можливі трюки: видалення символів із середини
> рядки**
>
> Оскільки **trim()** видаляє символи з початку і кінця рядка string, то
> видалення (або не видалення) символів із середини рядка може ввести в
> Здивування. `trim('abc', 'bad')` видалить як 'a', так і 'b', тому що
> видалення 'a' зрушить 'b' на початок рядка, що також дозволить її
> Видалити. Ось чому це "працює", тоді як `trim('abc', 'b')`
> мабуть ні.

### Дивіться також

- [ltrim()](function.ltrim.md) - Видаляє пробіли (або інші)
символи) з початку рядка
- [rtrim()](function.rtrim.md) - Видаляє пробіли (або інші)
символи) з кінця рядка
- [str_replace()](function.str-replace.md) - Замінює всі входження
рядки пошуку на рядок заміни
