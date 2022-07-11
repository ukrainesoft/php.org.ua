- [«Spoofchecker](class.spoofchecker.md)
- [Spoofchecker::\_\_construct »](spoofchecker.construct.md)

- [PHP Manual](index.md)
- [Spoofchecker](class.spoofchecker.md)
- Перевірити, чи є рядки підозрілими

# Spoofchecker::areConfusable

(PHP 5 u003d 5.4.0, PHP 7, PHP 8, PECL intl u003d 2.0.0)

Spoofchecker::areConfusable — Перевірити, чи є рядки
підозрілими

### Опис

public **Spoofchecker::areConfusable**(string `$string1`, string
`$string2`, int `&$errorCode` u003d **`null`**): bool

Перевіряє, наскільки легко переплутати два рядки.

### Список параметрів

`string1`
Перший рядок.

`string2`
Другий рядок.

`errorCode`
Цей параметр передається за посиланням та заповнюється цілим числом (int),
що містить помилку, якщо така є.

### Значення, що повертаються

Повертає **`true`**, якщо два рядки легко переплутати та **`false`**,
якщо ні.

### Приклади

**Приклад #1 Приклад використання **Spoofchecker::areConfusable()****

` <?php$checker u003d new Spoofchecker();$checker->areConfusable('google.com', 'goog1e.com'); // true// Англійську рядкову "l" легко переплутати з цифрою 1$checker->areConfusable('google.com', 'g00g1e.com'); // false// Ніль (0) складно переплутати з рядковою "o" `
