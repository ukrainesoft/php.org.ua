- [« openssl_spki_export](function.openssl-spki-export.md)
- [openssl_spki_verify »](function.openssl-spki-verify.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Створення нового підписаного відкритого ключа із викликом

#openssl_spki_new

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

openssl_spki_new — Створення нового відкритого підписаного ключа з
викликом

### Опис

**openssl_spki_new**([OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)
`$private_key`, string `$challenge`, int `$digest_algo` u003d
**`OPENSSL_ALGO_MD5`**): string\|false

Створює новий підписаний відкритий ключ із викликом, використовуючи вказаний
алгоритм хешування.

### Список параметрів

`private_key`
`private_key` задається секретним ключем, створеним раніше функцією
[openssl_pkey_new()](function.openssl-pkey-new.md) (або отриманий
іншим чином). Відповідна відкрита частина ключа буде використана
для підпису CSR.

`challenge`
Виклик, пов'язаний із SPKAC

`digest_algo`
Алгоритм хешування. Дивіться openssl_get_md_method().

### Значення, що повертаються

Повертає підписаний відкритий ключ із рядком виклику або **`false`** в
у разі виникнення помилки.

### Помилки

Викликає помилку рівня **`E_WARNING`**, якщо вказано некоректний
алгоритм у `digest_algo`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------------|
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL key. |

### Приклади

**Приклад #1 Приклад використання **openssl_spki_new()****

Створює новий SPKAC з використанням стандартного алгоритму (MD5)

`<?php$pkey u003d openssl_pkey_new('secret password');$spkac u003d openssl_spki_new($pkey, 'testing');if ($spkac !u003du003d NULL) {                  вдалася";}?> `

Результатом виконання цього прикладу буде щось подібне:

MIICRzCCAS8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDM3V3sS4o4
mB9dczziRnjGAmSp+JwPrHoYMAFGvDNmZGyiWfU586X4BKs++BAj7e/FsAfno0Hd
hN9FwpCNFSox30L03nQvLYJE7f/WqigwBeMRT7Op/xvFks4sT70xP2HRYv4KqP9a
WRcKU6cFH8VxhFhqM2txEIxZKdFLaL28yT7bEDmcglf4JLDdgNMb9rET1dkgtKE6
dOaJHPGjf1uvnOH4YwkQr7n4sLUR3Kdbh0ZJAFuQVDZulo+LLzxBBkqJJcB6FhF+
oXCdHTKZnqAhpWDz+NXYytAmevab6IYm5TWPWsJUv1YKJA5lg2mXbbloIZlN9Mgc
i9fi03bdw+crAgMBAAEWB3Rlc3RpbmcwDQYJKoZIhvcNAQEEBQADggEBALyUvP/o
pPSoWBlorFyZ2RnGwKf9qMpE0q2IJP7G3oDR4LyK/m933DUiZ+YnqThrH/CWb4Ek
y5I3OCyl3S4wCuU1ibZZwDVwYShr5ELp0J9PEf7qMQZOhNsizoC7k+Czb2xB6hYW
sKfsfTKm3cXBtH3fdgc/Z1Z7VSWnAzYo38snqm72NTf5yFRnrQdphNNXi+kn1zHA
lxXRyFDXHOcYsOnwAWfyXFA4QDHQ0ezz0UoCY8gJXovcZb4GRYqOLUAsF2HcNboy
29WN8VqE29sL9QxVZFlwMcqyoLcNnyw38GvNvAGqSvzzbnEFP2MAQXJVe0H0hdp/
MML5G2iNVgNozAou003d

### Дивіться також

- [openssl_spki_verify()](function.openssl-spki-verify.md) -
Перевіряє підписаний відкритий ключ та виклик
- [openssl_spki_export_challenge()](function.openssl-spki-export-challenge.md) -
Експорт виклику, пов'язаного з підписаним ключем та викликом
- [openssl_spki_export()](function.openssl-spki-export.md) - Експорт
відкритого ключа у форматі PEM з підписаного відкритого ключа з
викликом
- [openssl_get_md_methods()](function.openssl-get-md-methods.md) -
Отримати список доступних методів хешування
- [openssl_csr_new()](function.openssl-csr-new.md) - Генерує CSR
- [openssl_csr_sign()](function.openssl-csr-sign.md) - Підписати CSR
за допомогою іншого сертифіката (або їм же) та створити сертифікат
