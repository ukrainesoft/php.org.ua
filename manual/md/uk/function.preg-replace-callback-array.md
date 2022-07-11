- [«preg_quote](function.preg-quote.md)
- [preg_replace_callback »](function.preg-replace-callback.md)

- [PHP Manual](index.md)
- [Функції PCRE](ref.pcre.md)
- Виконує пошук та заміну за регулярним виразом з використанням
функцій зворотного виклику

# preg_replace_callback_array

(PHP 7, PHP 8)

preg_replace_callback_array — Пошук та заміна за регулярним
висловлювання з використанням функцій зворотного виклику

### Опис

**preg_replace_callback_array**(
array `$pattern`,
string\|array `$subject`,
int `$limit` u003d -1,
int `&$count` u003d **`null`**,
int `$flags` u003d 0
): string\|array\|null

Поведінка цієї функції схожа на
[preg_replace_callback()](function.preg-replace-callback.md), за
за винятком того, що для кожного шаблону використовується своя функція
зворотного дзвінка.

### Список параметрів

`pattern`
Асоціативний масив, що зв'язує шаблони регулярного вираження (ключі)
та [callable](language.types.callable.md) (значення).

`subject`
Рядок, в якому буде здійснюватися пошук та заміна.

`limit`
Максимальна кількість замін для кожного шаблону в рядку `subject`. за
замовчуванням `-1` (без обмежень).

`count`
Якщо заданий, то у вказану змінну буде записано кількість
зроблених замін.

`flags`
`flags` може бути комбінацією прапорів **`PREG_OFFSET_CAPTURE`** та
**`PREG_UNMATCHED_AS_NULL`**, які впливають на формат масиву
збігів. Дивіться опис [preg_match()](function.preg-match.md)
для більш детальної інформації.

### Значення, що повертаються

**preg_replace_callback_array()** повертає масив, якщо параметр
`subject` є масивом і рядок, якщо рядком. В разі
виникнення помилки повертається **`null`**

Якщо збіги знайдені, буде повернено новий рядок, а якщо ні, то
вихідна `subject`.

### Помилки

Якщо переданий шаблон регулярного виразу не компілюється
допустиме регулярне вираження, видається помилка рівня **`E_WARNING`**.

### Список змін

| Версія | Опис |
|--------|----------------------------|
| 7.4.0 | Доданий параметр `flags`. |

### Приклади

**Приклад #1 Приклад використання **preg_replace_callback_array()****

` <?php$subject u003d 'Aaaaaa Bbb';preg_replace_callback_array(    [        '~[a]+~i' u003d> function ($match) {            echo 'Найдено ', strlen($match[0]), ' совпадений "a "', PHP_EOL;        },        '~[b]+~i' u003d> function ($match) {            echo 'Найдено ', strlen($match[0]), ' совпадений "b"', PHP_EOL;        }    ], $subject);?> `

Результат виконання цього прикладу:

Знайдено 6 збігів "a"
Знайдено 3 збігів "b"

### Дивіться також

- [Шаблони PCRE](pcre.pattern.md)
- [preg_replace_callback()](function.preg-replace-callback.md) -
Виконує пошук за регулярним виразом та заміною з використанням
callback-функції
- [preg_quote()](function.preg-quote.md) - Екранує символи в
регулярних виразах
- [preg_replace()](function.preg-replace.md) - Пошук та
заміну за регулярним виразом
- [preg_last_error()](function.preg-last-error.md) - Повертає код
помилки виконання останнього регулярного вираження PCRE
- [Анонімні функції](functions.anonymous.md)
