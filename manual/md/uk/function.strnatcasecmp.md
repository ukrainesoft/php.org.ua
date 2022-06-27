- [«strlen](function.strlen.md)
- [strnatcmp »](function.strnatcmp.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Порівняння рядків без урахування регістру з використанням алгоритму
"natural order"

#strnatcasecmp

(PHP 4, PHP 5, PHP 7, PHP 8)

strnatcasecmp — Порівняння рядків без урахування регістру з використанням
алгоритму "natural order"

### Опис

**strnatcasecmp**(string `$string1`, string `$string2`): int

Ця функція реалізує алгоритм порівняння, який упорядковує
алфавітно-цифрові рядки подібно до того, як це зробив би людина. Ця
функція подібна до [strnatcmp()](function.strnatcmp.md), за винятком
те, що порівняння відбувається без урахування регістру символів. Для
отримання додаткової інформації дивіться [Natural Order String
Comparison](https://github.com/sourcefrog/natsort).

### Список параметрів

`string1`
Перший рядок.

`string2`
Другий рядок.

### Значення, що повертаються

Подібно до інших функцій порівняння рядків, ця функція повертає
негативне число, якщо `string1` менше `string2`, позитивне
число, якщо `string1` більше `string2`, і 0, якщо рядки дорівнюють.

### Приклади

**Приклад #1 Приклад використання **strnatcasecmp()****

` <?phpvar_dump(strnatcasecmp('Apple', 'Banana'));var_dump(strnatcasecmp('Banana', 'Apple'));var_dump(strnatcasecmp('apple', 'Apple'));?> `

Результат виконання цього прикладу:

int(-1)
int(1)
int(0)

### Дивіться також

- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
- [strcmp()](function.strcmp.md) - Бінарно-безпечне порівняння
рядків
- [strcasecmp()](function.strcasecmp.md) - Бінарно-безпечне
порівняння рядків без урахування регістру
- [substr()](function.substr.md) - Повертає підрядок
- [stristr()](function.stristr.md) - Реєстронезалежний варіант
функції strstr
- [strncasecmp()](function.strncasecmp.md) - Бінарно-безпечне
порівняння перших n символів рядків без урахування регістру
- [strncmp()](function.strncmp.md) - Бінарно-безпечне порівняння
перших n символів рядків
- [strstr()](function.strstr.md) - Знаходить перше входження
підрядки
- [setlocale()](function.setlocale.md) - Встановлює налаштування
локалі
