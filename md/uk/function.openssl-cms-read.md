- [« openssl_cms_encrypt](function.openssl-cms-encrypt.md)
- [openssl_cms_sign »](function.openssl-cms-sign.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Експортує файл CMS до масиву сертифікатів PEM

# openssl_cms_read

(PHP 8)

openssl_cms_read — Експортує файл CMS до масиву сертифікатів PEM

### Опис

**openssl_cms_read**(string `$input_filename`, array `&$certificates`):
bool

Працює аналогічно
[openssl_pkcs7_read()](function.openssl-pkcs7-read.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`input_filename`

`certificates`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
