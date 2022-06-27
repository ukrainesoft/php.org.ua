- [« sodium_add](function.sodium-add.md)
- [sodium_bin2base64 »](function.sodium-bin2base64.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Перетворює рядок у кодуванні base64 у необроблений двійковий файл

# sodium_base642bin

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_base642bin — Перетворює рядок у кодуванні base64 в
необроблений двійковий файл

### Опис

**sodium_base642bin**(string `$string`, int `$id`, string `$ignore` u003d
""): string

Перетворює рядок у кодуванні base64 у необроблений двійковий файл. В
на відміну від [base64_decode()](function.base64-decode.md),
**sodium_base642bin()** є постійним за часом (властивість,
яке важливо для будь-якого коду, який стосується криптографічних
вхідних даних, таких як прості тексти або ключі) і підтримує
кілька наборів символів.

### Список параметрів

`string`
Рядок (string); Закодований рядок.

`id`
- **`SODIUM_BASE64_VARIANT_ORIGINAL`** для стандартного
(`A-Za-z0-9/\+`). Кодування Base64.
- **`SODIUM_BASE64_VARIANT_ORIGINAL_NO_PADDING`** для стандартного
(`A-Za-z0-9/\+`) Кодування Base64 без додаткових символів `u003d`.
- **`SODIUM_BASE64_VARIANT_URLSAFE`** для URL-безпечного
(`A-Za-z0-9\-_`). Кодування Base64.
- **`SODIUM_BASE64_VARIANT_URLSAFE_NO_PADDING`** for URL-safe
(`A-Za-z0-9\-_`). Кодування Base64 без додаткових символів `u003d`.

`ignore`
Символи, які слід ігнорувати під час перетворення (наприклад,
символи пробілу).

### Значення, що повертаються

Перетворений рядок.
