- [« sodium_bin2hex](function.sodium-bin2hex.md)
- [sodium_crypto_aead_aes256gcm_decrypt
»](function.sodium-crypto-aead-aes256gcm-decrypt.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Порівняти великі числа

# sodium_compare

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_compare — Порівняти великі числа

### Опис

**sodium_compare**(string `$string1`, string `$string2`): int

Порівнює два рядки, якби вони були цілими числами довільної
довжини без знака з прямим порядком байтів, без витоку з побічного
каналу.

### Список параметрів

`string1`
Лівий операнд

`string2`
Правий операнд

### Значення, що повертаються

Повертає `-1`, якщо `string1` менше `string2`.

Повертає `1`, якщо `string1` більше `string2`.

Повертає `0`, якщо рядки рівні.
