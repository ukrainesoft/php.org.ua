- [« openssl_pkey_get_public](function.openssl-pkey-get-public.md)
- [openssl_private_decrypt »](function.openssl-private-decrypt.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Генерує новий закритий ключ

#openssl_pkey_new

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_new — Генерує новий закритий ключ

### Опис

**openssl_pkey_new**(?array `$options` u003d **`null`**):
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|false

**openssl_pkey_new()** створює новий закритий ключ. Як отримати
відкриту частину ключа показано на прикладі нижче.

> **Примітка**: Для коректної роботи цієї функції має існувати
> правильний `openssl.cnf`. Для більш детальної інформації дивіться
> зауваження під розділом установки (openssl.installation.md).

### Список параметрів

`options`
Ви можете налаштувати параметри генерації ключа (наприклад, вказати число
біт) за допомогою `options`. Дивіться опис функції
[openssl_csr_new()](function.openssl-csr-new.md) для детальної
інформації про `options`.

### Значення, що повертаються

Повертає екземпляр
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md), або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.0.0 | У разі успішного виконання функція повертає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше повертався ресурс ([resource](language.types.resource.md)) типу OpenSSL key. |
| 7.1.0 | Доданий ключ `curve_name` до option для забезпечення можливості створення EC ключів. |

### Приклади

**Приклад #1 Отримати відкриту частину ключа із закритого ключа**

` <?php$private_key u003d openssl_pkey_new();$public_key_pem u003d openssl_pkey_get_details($private_key)['key'];echo$public_key_pem;$public_keyu003du003dopenssl_p$

Результатом виконання цього прикладу буде щось подібне:

-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArZFsmN2P6rx1Xt7YV95o
gcdlal0k3ryiIhFNzjwtRNNTXfEfBr6lUuaIJYQ8/XqEBX0hpcfuuF6tTRlonA3t
WLME0QFD93YVsAaXcy76YqjjqcRRodIBphAbYyyMI/lXkQAdn7kbAmr7neSOsMYJ
El9Wo4Hl4oG6e52ZnYHyqW9dxh4hX93eupR2TmcCdVf+r9xoHewP0KJYSHt7vDUX
AQlWYcQiWHIadFsmL0orr6mutlXFReoHbesgKY9/3YLOu0JfxflSjIZ2JeL1NTl1
MsmODsUwgAUrwnWKKx+eQUP5g3GnSB3dPkRh9zRVRiLNWbCugyjrf3e6DgQWrW7j
pwIDAQAB
-----END PUBLIC KEY-----
resource(5) of type (OpenSSL key)
