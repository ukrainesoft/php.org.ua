- [«strncmp](function.strncmp.md)
- [strpos »](function.strpos.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Шукає у рядку будь-який символ із заданого набору

#strpbrk

(PHP 5, PHP 7, PHP 8)

strpbrk — Шукає у рядку будь-який символ із заданого набору

### Опис

**strpbrk**(string `$string`, string `$characters`): string\|false

**strpbrk()** шукає у рядку `string` символи з набору `characters`.

### Список параметрів

`string`
Рядок, в якому проводиться пошук `characters`.

`characters`
Цей параметр чутливий до регістру.

### Значення, що повертаються

Повертає рядок, починаючи зі знайденого символу, або **`false`**, якщо
він був знайдений.

### Приклади

**Приклад #1 Приклад використання **strpbrk()****

` <?php$text u003d 'This is a Simple text.';// Цей код видасть "is is a Simple text.", т.к. символ 'i' зустрінеться ранішеecho strpbrk($text, 'mi');//Цей код видасть'"Simple text." символи чутливі до реєструecho strpbrk($text, 'S');?> `

### Дивіться також

- [strpos()](function.strpos.md) - Повертає позицію першого
входження підрядки
- [strstr()](function.strstr.md) - Знаходить перше входження
підрядки
- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
