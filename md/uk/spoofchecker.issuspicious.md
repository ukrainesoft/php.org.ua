- [«Spoofchecker::\_\_construct](spoofchecker.construct.md)
- [Spoofchecker::setAllowedLocales
»](spoofchecker.setallowedlocales.md)

- [PHP Manual](index.md)
- [Spoofchecker](class.spoofchecker.md)
- Перевіряє, чи текст містить підозрілі символи

# Spoofchecker::isSuspicious

(PHP 5 u003d 5.4.0, PHP 7, PHP 8, PECL intl u003d 2.0.0)

Spoofchecker::isSuspicious — Перевіряє, чи текст містить підозрілі
символи

### Опис

public **Spoofchecker::isSuspicious**(string `$string`, int
`&$errorCode` u003d **`null`**): bool

Перевіряє, чи текст містить підозрілі символи, які візуально
ідентичні, але є символами Unicode з іншого мовного
набір.

### Список параметрів

`string`
Рядок для перевірки.

`errorCode`
Цей параметр передається за посиланням та заповнюється цілим числом (int),
що містить помилку, якщо така є.

### Значення, що повертаються

Повертає **`true`**, якщо містить підозрілі символи та
**`false`**, якщо ні.

### Приклади

**Приклад #1 Приклад використання **Spoofchecker::isSuspicious()****

` <?php$checker u003d new Spoofchecker();$checker->isSuspicious('google.com'); // false: тільки символи ASCII$checker->isSuspicious('Рaypal.com'); // true// Перша буква з кириличного набору, а не звичайна латинська "P" `
