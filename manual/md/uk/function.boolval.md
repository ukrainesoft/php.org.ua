- [« Функції для роботи зі змінними](ref.var.md)
- [debug_zval_dump »](function.debug-zval-dump.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Повертає логічне значення змінної

# boolval

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

boolval - Повертає логічне значення змінної

### Опис

**boolval**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Повертає значення типу bool, релевантне переданому значенню `value`.

### Список параметрів

`value`
Скалярне значення, яке слід привести до типу bool.

### Значення, що повертаються

Приведене до типу bool значення 'value'.

### Приклади

**Приклад #1 Приклад використання **boolval()****

` <?phpecho '0:        '.(boolval(0) ? 'true' : 'false')."
";echo '42:       '.(boolval(42) ? 'true' : 'false')."
";echo '0.0:      '.(boolval(0.0) ? 'true' : 'false')."
";echo '4.2:      '.(boolval(4.2) ? 'true' : 'false')."
";echo '"":       '.(boolval("") ? 'true' : 'false')."
";echo '"string": '.(boolval("string") ? 'true' : 'false')."
";echo '"0":      '.(boolval("0") ? 'true' : 'false')."
";echo '"1":      '.(boolval("1") ? 'true' : 'false')."
";echo '[1, 2]:   '.(boolval([1, 2]) ? 'true' : 'false')."
";echo '[]:       '.(boolval([]) ? 'true' : 'false')."
";echo 'stdClass: '.(boolval(new stdClass) ? 'true' : 'false')."
";?> `

Результат виконання цього прикладу:

0: false
42: true
0.0: false
4.2: true
"": false
"string": true
"0": false
"1": true
[1, 2]: true
[]: false
stdClass: true

### Дивіться також

- [floatval()](function.floatval.md) - Повертає значення
змінною у вигляді числа з плаваючою точкою
- [intval()](function.intval.md) - Повертає ціле значення
змінної
- [strval()](function.strval.md) - Повертає строкове значення
змінної
- [settype()](function.settype.md) - Задає тип змінної
- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
- [Перетворення типів](language.types.type-juggling.md)
