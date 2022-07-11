- [«Прапори/Константи CMS](openssl.cms.flags.md)
- [Алгоритми шифрування »](openssl.ciphers.md)

- [PHP Manual](index.md)
- [Предвизначені константи](openssl.constants.md)
- Алгоритми підпису

## Алгоритми підпису

**`OPENSSL_ALGO_DSS1`** (int)

**`OPENSSL_ALGO_SHA1`** (int)
Використовується як стандартний алгоритм для функцій
[openssl_sign()](function.openssl-sign.md) та
[openssl_verify()](function.openssl-verify.md).

**`OPENSSL_ALGO_SHA224`** (int)

**`OPENSSL_ALGO_SHA256`** (int)

**`OPENSSL_ALGO_SHA384`** (int)

**`OPENSSL_ALGO_SHA512`** (int)

**`OPENSSL_ALGO_RMD160`** (int)

**`OPENSSL_ALGO_MD5`** (int)

**`OPENSSL_ALGO_MD4`** (int)

**`OPENSSL_ALGO_MD2`** (int)
Ця константа доступна, лише якщо PHP скомпільовано за допомогою MD2.
Для цього потрібно передати -DHAVE_OPENSSL_MD2_H CFLAG при компіляції PHP
та увімкнути md2 при компіляції OpenSSL 1.0.0+.
