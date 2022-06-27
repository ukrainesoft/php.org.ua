- [«openssl_open](function.openssl-open.md)
- [openssl_pkcs12_export_to_file
»](function.openssl-pkcs12-export-to-file.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Генерує рядки PKCS5 v2 PBKDF2

# openssl_pbkdf2

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

openssl_pbkdf2 — Генерує рядки PKCS5 v2 PBKDF2

### Опис

**openssl_pbkdf2**(
string `$password`,
string `$salt`,
int `$key_length`,
int `$iterations`,
string `$digest_algo` u003d "sha1"
): string\|false

**openssl_pbkdf2()** обчислює PBKDF2 (Password-Based Key Derivation
Function 2), функцію деривації ключа, визначену PKCS5 v2.

### Список параметрів

`password`
Пароль, з якого буде згенеровано ключ.

`salt`
PBKDF2 рекомендує використовувати криптографічну сіль як мінімум 64
біта (8 байт) завдовжки.

`key_length`
Довжина ключа, що генерується.

`iterations`
Кількість ітерацій. [» NIST рекомендує як мінімум
10,000](https://pages.nist.gov/800-63-3/sp800-63b.md#sec5).

`digest_algo`
Опціональний алгоритм хешування отриманий з
[openssl_get_md_methods()](function.openssl-get-md-methods.md). за
замовчуванням SHA-1.

### Значення, що повертаються

Повертає необроблений бінарний рядок або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання openssl_pbkdf2()**

`<?php$password u003d 'yOuR-pAs5w0rd-hERe';$salt u003d openssl_random_pseudo_bytes(12);$keyLength u003d 40;$iterations u003d 10000;$generated_key $ $ 'sha256');echo bin2hex($generated_key)."
";echo base64_encode($generated_key)."
";?> `

### Дивіться також

- [hash_pbkdf2()](function.hash-pbkdf2.md) - Формування ключа
PBKDF2 для заданих вхідних даних
- [openssl_get_md_methods()](function.openssl-get-md-methods.md) -
Отримати список доступних методів хешування
