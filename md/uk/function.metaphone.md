- [«md5](function.md5.md)
- [money_format »](function.money-format.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Повертає ключ metaphone для рядка

# metaphone

(PHP 4, PHP 5, PHP 7, PHP 8)

metaphone — Повертає ключ metaphone для рядка

### Опис

**metaphone**(string `$string`, int `$max_phonemes` u003d 0): string

Повертає ключ metaphone для рядка `string`.

Подібно до функції [soundex()](function.soundex.md), metaphone повертає
однакове значення для слів, що мають подібну вимову. Ця функція
точніша, ніж [soundex()](function.soundex.md), тому що враховує
основні правила вимови англійської. Довжина повертається
рядки не фіксовано.

Функція metaphone була написана Lawrence Philips <lphilips at verity
dot com\> і описана в книзі \["Practical Algorithms for Programmers",
Binstock & Rex, Addison Wesley, 1995].

### Список параметрів

`string`
Вхідний рядок.

`max_phonemes`
Цей параметр виставляє обмеження в `max_phonemes` *символів* на
довжину ключа, що повертається metaphone. Проте результуючі фонеми завжди
транскрибуються повністю, тому довжина результуючого рядка може
бути трохи більше, ніж `phonemes`. Значення за замовчуванням `0` означає
відсутність обмежень.

### Значення, що повертаються

Повертає ключ metaphone у вигляді рядка.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------------|
| 8.0.0 | Функція повертала **`false`** у разі виникнення помилки. |

### Приклади

**Приклад #1 Простий приклад використання **metaphone()****

` <?phpvar_dump(metaphone('programming'));var_dump(metaphone('programmer'));?> `

Результат виконання цього прикладу:

string(7) "PRKRMNK"
string(6) "PRKRMR"

**Приклад #2 Використання параметра `max_phonemes`**

` <?phpvar_dump(metaphone('programming', 5));var_dump(metaphone('programmer', 5));?> `

Результат виконання цього прикладу:

string(5) "PRKRM"
string(5) "PRKRM"

**Приклад #3 Використання параметра `max_phonemes`**

У цьому прикладі **metaphone()** пропонується створити рядок із п'яти
символів, але для цього потрібно розділити останню фонему (''x''
передбачається перетворити на ``KS'`), тому функція повертає
рядок із шести символів.

` <?phpvar_dump(metaphone('Asterix', 5));?> `

Результат виконання цього прикладу:

string(6) "ASTRKS"
