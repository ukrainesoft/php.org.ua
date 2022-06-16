- [« openssl_get_curve_names](function.openssl-get-curve-names.md)
- [openssl_get_privatekey »](function.openssl-get-privatekey.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Отримати список доступних методів хешування

# openssl_get_md_methods

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

openssl_get_md_methods — Отримати список доступних методів хешування

### Опис

**openssl_get_md_methods**(bool `$aliases` u003d **`false`**): array

Повертає список доступних методів хешування.

### Список параметрів

`aliases`
Якщо хочете, щоб до результуючого масиву були також включені
псевдоніми, то встановіть цей параметр значення **`true`**.

### Значення, що повертаються

Масив із доступними методами хешування.

### Приклади

**Приклад #1 Приклад використання **openssl_get_md_methods()****

Показує, як можуть виглядати доступні методи хешування та їх
псевдоніми.

` <?php$digests             u003d openssl_get_md_methods();$digests_and_aliases u003d openssl_get_md_methods(true);$digest_aliases      u003d array_diff($digests_and_aliases, $digests);print_r($digests);print_r($digest_aliases);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> DSA
[1] u003d> DSA-SHA
[2] u003d> MD2
[3] u003d> MD4
[4] u003d> MD5
[5] u003d> RIPEMD160
[6] u003d> SHA
[7] u003d> SHA1
[8] u003d> SHA224
[9] u003d> SHA256
[10] u003d> SHA384
[11] u003d> SHA512
[12] u003d> dsaEncryption
[13] u003d> dsaWithSHA
[14] u003d> ecdsa-with-SHA1
[15] u003d> md2
[16] u003d> md4
[17] u003d> md5
[18] u003d> ripemd160
[19] u003d> sha
[20] u003d> sha1
[21] u003d> sha224
[22] u003d> sha256
[23] u003d> sha384
[24] u003d> sha512
)
Array
(
[2] u003d> DSA-SHA1
[3] u003d> DSA-SHA1-old
[4] u003d> DSS1
[9] u003d> RSA-MD2
[10] u003d> RSA-MD4
[11] u003d> RSA-MD5
[12] u003d> RSA-RIPEMD160
[13] u003d> RSA-SHA
[14] u003d> RSA-SHA1
[15] u003d> RSA-SHA1-2
[16] u003d> RSA-SHA224
[17] u003d> RSA-SHA256
[18] u003d> RSA-SHA384
[19] u003d> RSA-SHA512
[28] u003d> dsaWithSHA1
[29] u003d> dss1
[32] u003d> md2WithRSAEncryption
[34] u003d> md4WithRSAEncryption
[36] u003d> md5WithRSAEncryption
[37] u003d> ripemd
[39] u003d> ripemd160WithRSA
[40] u003d> rmd160
[43] u003d> sha1WithRSAEncryption
[45] u003d> sha224WithRSAEncryption
[47] u003d> sha256WithRSAEncryption
[49] u003d> sha384WithRSAEncryption
[51] u003d> sha512WithRSAEncryption
[52] u003d> shaWithRSAEncryption
[53] u003d> ssl2-md5
[54] u003d> ssl3-md5
[55] u003d> ssl3-sha1
)

### Дивіться також

- [openssl_digest()](function.openssl-digest.md) - Обчислення
дайджесту
- [openssl_get_cipher_methods()](function.openssl-get-cipher-methods.md) -
Отримати список доступних алгоритмів шифрування
