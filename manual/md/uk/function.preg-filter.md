- [« Функції PCRE](ref.pcre.md)
- [preg_grep »](function.preg-grep.md)

- [PHP Manual](index.md)
- [Функції PCRE](ref.pcre.md)
- Здійснює пошук та заміну за регулярним виразом

# preg_filter

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

preg_filter — Здійснює пошук та заміну за регулярним виразом

### Опис

**preg_filter**(
string\|array `$pattern`,
string\|array `$replacement`,
string\|array `$subject`,
int `$limit` u003d -1,
int `&$count` u003d **`null`**
): string\|array\|null

Функція **preg_filter()** ідентична до функції
[preg_replace()](function.preg-replace.md) за винятком того, що
повертає ті значення (можливо, перетворені), у яких
знайдено збіг. Докладніше про роботу функції читайте у документації до
[preg_replace()](function.preg-replace.md).

### Список параметрів

Параметри описані в документації для функції
[preg_replace()](function.preg-replace.md).

### Значення, що повертаються

Повертає масив (array), якщо аргумент `subject` має тип array або
рядок (string) в іншому випадку.

Якщо збігів не знайдено або виникла помилка, повертається порожній
масив (array), коли `subject` має тип array або **`null`**
інакше.

### Помилки

Якщо переданий шаблон регулярного виразу не компілюється
допустиме регулярне вираження, видається помилка рівня **`E_WARNING`**.

### Приклади

**Приклад #1 Приклад для порівняння функцій **preg_filter()** та
[preg_replace()](function.preg-replace.md)**

` <?php$subject u003d array('1', 'а', '2', 'б', '3', 'А', 'Б', '4');$pattern u003d array('/\ d/', '/[а-я]/', '/[1а]/');$replace u003d array('А:$0', 'Б:$0', 'В:$0');echo "preg_filter повертає
";print_r(preg_filter($pattern, $replace, $subject));echo "preg_replace повертає
";print_r(preg_replace($pattern, $replace, $subject)));?> `

Результат виконання цього прикладу:

preg_filter повертає
Array
(
[0] u003d> А:В:1
[1] u003d> Б:В:а
[2] u003d> А:2
[3] u003d> Б:б
[4] u003d> А:3
[7] u003d> А:4
)
preg_replace повертає
Array
(
[0] u003d> А:В:1
[1] u003d> Б:В:а
[2] u003d> А:2
[3] u003d> Б:б
[4] u003d> А:3
[5] u003d> А
[6] u003d> Б
[7] u003d> А:4
)

### Дивіться також

- [Шаблони PCRE](pcre.pattern.md)
- [preg_quote()](function.preg-quote.md) - Екранує символи в
регулярних виразах
- [preg_replace()](function.preg-replace.md) - Пошук та
заміну за регулярним виразом
- [preg_replace_callback()](function.preg-replace-callback.md) -
Виконує пошук за регулярним виразом та заміною з використанням
callback-функції
- [preg_grep()](function.preg-grep.md) - Повертає масив
входжень, які відповідають шаблону
- [preg_last_error()](function.preg-last-error.md) - Повертає код
помилки виконання останнього регулярного вираження PCRE
