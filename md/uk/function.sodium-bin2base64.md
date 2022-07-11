- [« sodium_base642bin](function.sodium-base642bin.md)
- [sodium_bin2hex »](function.sodium-bin2hex.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Кодує необроблений двійковий рядок за допомогою base64

# sodium_bin2base64

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_bin2base64 — Кодує необроблений двійковий рядок за допомогою
base64

### Опис

**sodium_bin2base64**(string `$string`, int `$id`): string

Перетворює необроблений двійковий рядок у рядок у кодуванні base64.
На відміну від [base64_encode()](function.base64-encode.md),
**sodium_bin2base64()** є постійною за часом (властивість,
яке важливо для будь-якого коду, який стосується криптографічних
вхідних даних, таких як прості тексти або ключі), та підтримує
кілька наборів символів.

### Список параметрів

`string`
Необроблений двійковий рядок.

`id`
- **`SODIUM_BASE64_VARIANT_ORIGINAL`** для стандартного
(`A-Za-z0-9/\+`) Кодування Base64.
- **`SODIUM_BASE64_VARIANT_ORIGINAL_NO_PADDING`** for standard
(`A-Za-z0-9/\+`) Кодування Base64 без додаткових символів `u003d`.
- **`SODIUM_BASE64_VARIANT_URLSAFE`** для URL-безпечного
(`A-Za-z0-9\-_`) Кодування Base64.
- **`SODIUM_BASE64_VARIANT_URLSAFE_NO_PADDING`** для URL-безпечного
(`A-Za-z0-9\-_`) Кодування Base64 без додаткових символів `u003d`.

### Значення, що повертаються

Рядок у кодуванні Base64.
