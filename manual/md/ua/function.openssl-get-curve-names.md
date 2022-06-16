- [«
openssl_get_cipher_methods](function.openssl-get-cipher-methods.md)
- [openssl_get_md_methods »](function.openssl-get-md-methods.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Список доступних імен кривих для ECC

# openssl_get_curve_names

(PHP 7 \>u003d 7.1.0, PHP 8)

openssl_get_curve_names — Список доступних імен кривих для ECC

### Опис

**openssl_get_curve_names**(): array\|false

Повертає список доступних імен кривих для використання в
еліптичної криптографії (ECC) для операцій з відкритим/закритим
ключем. Дві найбільш стандартизовані/підтримувані криві:
*prime256v1* (NIST P-256) та *secp384r1* (NIST P-384).

| AES розмір симетричного ключа (біти) | Розмір ключа RSA та DSA (Біти) | Розмір ключа ECC (Біти) |
|---------------------------------------|--------- ----------------------|-------------------------|
| 80 | 1024 | 160 |
| 112 | 2048 | 224 |
| 128 | 3072 | 256 |
| 192 | 7680 | 384 |
| 256 | 15360 | 512 |

**Наближені еквівалентності розмірів ключів AES, RSA, DSA та ECC**

[» NIST рекомендує використовувати криві ECC як мінімум 256
біт](http://dx.doi.org/10.6028/NIST.SP.800-57pt1r4).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив із доступними іменами кривих або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **openssl_get_curve_names()****

` <?php$curve_names u003d openssl_get_curve_names();print_r($curve_names);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> secp112r1
[1] u003d> secp112r2
[2] u003d> secp128r1
[3] u003d> secp128r2
[4] u003d> secp160k1
[5] u003d> secp160r1
[6] u003d> secp160r2
[7] u003d> secp192k1
[8] u003d> secp224k1
[9] u003d> secp224r1
[10] u003d> secp256k1
[11] u003d> secp384r1
[12] u003d> secp521r1
[13] u003d> prime192v1
[14] u003d> prime192v2
[15] u003d> prime192v3
[16] u003d> prime239v1
[17] u003d> prime239v2
[18] u003d> prime239v3
[19] u003d> prime256v1
[20] u003d> sect113r1
[21] u003d> sect113r2
[22] u003d> sect131r1
[23] u003d> sect131r2
[24] u003d> sect163k1
[25] u003d> sect163r1
[26] u003d> sect163r2
[27] u003d> sect193r1
[28] u003d> sect193r2
[29] u003d> sect233k1
[30] u003d> sect233r1
[31] u003d> sect239k1
[32] u003d> sect283k1
[33] u003d> sect283r1
[34] u003d> sect409k1
[35] u003d> sect409r1
[36] u003d> sect571k1
[37] u003d> sect571r1
[38] u003d> c2pnb163v1
[39] u003d> c2pnb163v2
[40] u003d> c2pnb163v3
[41] u003d> c2pnb176v1
[42] u003d> c2tnb191v1
[43] u003d> c2tnb191v2
[44] u003d> c2tnb191v3
[45] u003d> c2pnb208w1
[46] u003d> c2tnb239v1
[47] u003d> c2tnb239v2
[48] u003d> c2tnb239v3
[49] u003d> c2pnb272w1
[50] u003d> c2pnb304w1
[51] u003d> c2tnb359v1
[52] u003d> c2pnb368w1
[53] u003d> c2tnb431r1
[54] u003d> wap-wsg-idm-ecid-wtls1
[55] u003d> wap-wsg-idm-ecid-wtls3
[56] u003d> wap-wsg-idm-ecid-wtls4
[57] u003d> wap-wsg-idm-ecid-wtls5
[58] u003d> wap-wsg-idm-ecid-wtls6
[59] u003d> wap-wsg-idm-ecid-wtls7
[60] u003d> wap-wsg-idm-ecid-wtls8
[61] u003d> wap-wsg-idm-ecid-wtls9
[62] u003d> wap-wsg-idm-ecid-wtls10
[63] u003d> wap-wsg-idm-ecid-wtls11
[64] u003d> wap-wsg-idm-ecid-wtls12
[65] u003d> Oakley-EC2N-3
[66] u003d> Oakley-EC2N-4
[67] u003d> brainpoolP160r1
[68] u003d> brainpoolP160t1
[69] u003d> brainpoolP192r1
[70] u003d> brainpoolP192t1
[71] u003d> brainpoolP224r1
[72] u003d> brainpoolP224t1
[73] u003d> brainpoolP256r1
[74] u003d> brainpoolP256t1
[75] u003d> brainpoolP320r1
[76] u003d> brainpoolP320t1
[77] u003d> brainpoolP384r1
[78] u003d> brainpoolP384t1
[79] u003d> brainpoolP512r1
[80] u003d> brainpoolP512t1
)
