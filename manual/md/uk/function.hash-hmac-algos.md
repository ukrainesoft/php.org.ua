- [«hash_hkdf](function.hash-hkdf.md)
- [hash_hmac_file »](function.hash-hmac-file.md)

- [PHP Manual](index.md)
- [Функції Hash](ref.hash.md)
- Повертає список зареєстрованих алгоритмів хешування,
застосовних для hash_hmac

#hash_hmac_algos

(PHP 7 \>u003d 7.2.0, PHP 8)

hash_hmac_algos — Повертає список зареєстрованих алгоритмів
хешування, що застосовуються для hash_hmac

### Опис

**hash_hmac_algos**(): array

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає індексований масив зі списком підтримуваних функцією
[hash_hmac()](function.hash-hmac.md) алгоритмів хешування.

### Приклади

**Приклад #1 Приклад використання **hash_hmac_algos()****

`<?phpprint_r(hash_hmac_algos()); `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> md2
[1] u003d> md4
[2] u003d> md5
[3] u003d> sha1
[4] u003d> sha224
[5] u003d> sha256
[6] u003d> sha384
[7] u003d> sha512/224
[8] u003d> sha512/256
[9] u003d> sha512
[10] u003d> sha3-224
[11] u003d> sha3-256
[12] u003d> sha3-384
[13] u003d> sha3-512
[14] u003d> ripemd128
[15] u003d> ripemd160
[16] u003d> ripemd256
[17] u003d> ripemd320
[18] u003d> whirlpool
[19] u003d> tiger128,3
[20] u003d> tiger160,3
[21] u003d> tiger192,3
[22] u003d> tiger128,4
[23] u003d> tiger160,4
[24] u003d> tiger192,4
[25] u003d> snefru
[26] u003d> snefru256
[27] u003d> gost
[28] u003d> gost-crypto
[29] u003d> haval128,3
[30] u003d> haval160,3
[31] u003d> haval192,3
[32] u003d> haval224,3
[33] u003d> haval256,3
[34] u003d> haval128,4
[35] u003d> haval160,4
[36] u003d> haval192,4
[37] u003d> haval224,4
[38] u003d> haval256,4
[39] u003d> haval128,5
[40] u003d> haval160,5
[41] u003d> haval192,5
[42] u003d> haval224,5
[43] u003d> haval256,5
)

### Примітки

> **Примітка**:
>
> До PHP 7.2.0 єдиним варіантом отримати список підтримуваних
> алгоритмів було викликати функцію
> [hash_algos()](function.hash-algos.md), яка також повертала
> алгоритми, що не підтримуються [hash_hmac()](function.hash-hmac.md).

### Дивіться також

- [hash_hmac()](function.hash-hmac.md) - Генерація хеш-коду на
основі ключа, використовуючи метод HMAC
- [hash_algos()](function.hash-algos.md) - Повертає список
зареєстрованих алгоритмів хешування
