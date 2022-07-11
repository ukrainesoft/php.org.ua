- [«
sodium_crypto_generichash](function.sodium-crypto-generichash.md)
- [sodium_crypto_kdf_keygen »](function.sodium-crypto-kdf-keygen.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Витягти підрозділ

# sodium_crypto_kdf_derive_from_key

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_kdf_derive_from_key — Витягти підрозділ

### Опис

**sodium_crypto_kdf_derive_from_key**(
int `$subkey_length`,
int `$subkey_id`,
string `$context`,
string `$key`
): string

Отримує підрозділ із кореневого ключа та додаткового контексту.

Схожа на [hash_hkdf()](function.hash-hkdf.md).

### Список параметрів

`subkey_length`
Довжина ключа, що повертається (у байтах)

`subkey_id`
Повернути підключення n із заданого кореневого ключа. Корисно для пошуку.

`context`
Контекст, що залежить від програми.

`key`
Кореневий ключ, з якого отримано підключення.

### Значення, що повертаються

Рядок псевдовипадкових (необроблених двійкових) байтів.
