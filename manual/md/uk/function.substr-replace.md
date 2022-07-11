- [«substr_count](function.substr-count.md)
- [substr »](function.substr.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Замінює частину рядка

# substr_replace

(PHP 4, PHP 5, PHP 7, PHP 8)

substr_replace — Замінює частину рядка

### Опис

**substr_replace**(
array\|string `$string`,
array\|string `$replace`,
array\|int `$offset`,
array\|int\|null `$length` u003d **`null`**
): string\|array

**substr_replace()** замінює частину рядка `string`, що починається з
символу з порядковим номером `offset` та (необов'язковою) довжиною
`length`, рядком `replace` і повертає результат.

### Список параметрів

`string`
Вхідний рядок.

Також можна вказати масив рядків, у цьому випадку заміни відбуватимуться
з кожним наданим рядком. В цьому випадку параметри `replace`,
`offset` і `length` можуть бути як скалярними значеннями - у цьому випадку
ці значення будуть застосовані до кожного рядка, так і масивами - у цьому
у разі відповідні елементи масивів будуть застосовані до кожної
наданому рядку.

`replace`
Рядок заміни.

`offset`
Якщо `offset` позитивний, заміна починається з символу з порядковим
номером `offset` рядки `string`.

Якщо `offset` негативний, заміна починається з символу з порядковим
номером `offset`, рахуючи від кінця рядка `string`.

`length`
Якщо аргумент позитивний, то він є довжиною замінної
підстроки в рядку `string`. Якщо цей аргумент є негативним, він
визначає кількість символів від кінця рядка `string`, на яких
закінчується заміна. Цей аргумент необов'язковий і за умовчанням дорівнює
strlen(`string`);, тобто заміна до кінця рядка `string`. Зрозуміло,
якщо `length` дорівнює нулю, то це еквівалентно вставці `replace` в
`string` на вказаній позиції `offset`.

### Значення, що повертаються

Повертає результуючий рядок. Якщо `string` є масивом, то
повертає масив.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --|
| 8.0.0 | `length` тепер припускає значення null. |

### Приклади

**Приклад #1 Простий приклад використання **substr_replace()****

` <?php$var u003d 'ABCDEFGH:/MNRPQR/';echo "Оригінал: $var<hr />
";/* Обидві наступних рядки замінюють всю рядок $var на 'bob'. */echo substr_replace($var, 'bob', 0) . "<br />
";echo substr_replace($var, 'bob', 0, strlen($var)) . "<br />
";/* Вставляє 'bob' в початок $var. */echo substr_replace($var, 'bob', 0, 0) . "<br />
";/* Обидві наступних рядки замінюють 'MNRPQR' в $var на 'bob'. */echo substr_replace($var, 'bob', 10, -1) . "<br />
";echo substr_replace($var, 'bob', -7, -1) . "<br />
";/* Видаляє 'MNRPQR' із $var. */echo substr_replace($var, '', 10, -1) . "<br />
";?> `

**Приклад #2 Використання **substr_replace()** для одночасної
множинної заміни рядків**

` <?php$input u003d array('A: XXX', 'B: XXX', 'C: XXX');// Простий випадок: замінюємо XXX на YYY в кожній рядку.echo implode('; ; $input, 'YYY', 3, 3))."
";// Більш складний випадок з унікальними замінами.$replace u003d array('AAA', BBB', 'CCC');echo implode('; ', substr_replace($input, $replace, ) "
";// Зміни з різними кількістю символів.$length u003d array(1, 2, 3);echo implode('; ', substr_replace($input, $replace, 3, $length))."
";?> `

Результат виконання цього прикладу:

A: YYY; B: YYY; C: YYY
A: AAA; B: BBB; C: CCC
A: AAAXX; B: BBBX; C: CCC

### Примітки

> **Примітка**: Ця функція безпечна для обробки даних у двійковій
> Формі.

### Дивіться також

- [str_replace()](function.str-replace.md) - Замінює всі входження
рядки пошуку на рядок заміни
- [substr()](function.substr.md) - Повертає підрядок
- [Доступ до символу в рядку та його
зміна](language.types.string.md#language.types.string.substr)
