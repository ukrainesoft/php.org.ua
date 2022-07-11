- [«
openssl_get_cert_locations](function.openssl-get-cert-locations.md)
- [openssl_get_curve_names »](function.openssl-get-curve-names.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Отримати список доступних алгоритмів шифрування

# openssl_get_cipher_methods

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

openssl_get_cipher_methods — Отримати список доступних алгоритмів
шифрування

### Опис

**openssl_get_cipher_methods**(bool `$aliases` u003d **`false`**): array

Повертає перелік доступних алгоритмів шифрування.

### Список параметрів

`aliases`
Якщо хочете включити псевдоніми шифрів у масив, що повертається, то
встановіть цей параметр значення **`true`**.

### Значення, що повертаються

Масив доступних методів шифрування. Зверніть увагу, що до
OpenSSL 1.1.1 методи шифрування поверталися у верхньому та нижньому
регістрі; з OpenSSL 1.1.1 повертаються лише малі варіанти.

### Приклади

**Приклад #1 Приклад використання **openssl_get_cipher_methods()****

Показує, як можуть виглядати доступні шифри та їхні псевдоніми.

` <?php$ciphers             u003d openssl_get_cipher_methods();$ciphers_and_aliases u003d openssl_get_cipher_methods(true);$cipher_aliases      u003d array_diff($ciphers_and_aliases, $ciphers);//Режим ECB следует избегать$ciphers u003d array_filter( $ciphers, function($n) { return stripos($n,"ecb")u003du003du003dFALSE; } );//По крайньому мірі, на початку серпня 2016 року наступні методи оголошені слабкими:$ciphers u003d      stripos($c,"des")u003du003du003dFALSE; } );$ciphers u003d array_filter( $ciphers, function($c) { return stripos($c,"rc2")u003du003du003dFALSE; } );$ ciphers u003d array_filter( $ciphers, function($c) { return stripos($c,"rc4")u003du003du003dFALSE; } );$ciphers u003d array_filter( $ciphers, function($c)$ | ,"md5")u003du003du003dFALSE; } );$cipher_aliases u003d array_filter($cipher_aliases,function($c) { return stripos($c,"des")u003du003du003dFALSE; } );$cipher_alies $cipher_aliases,function($c) { return stripos($c,"rc2")u003du003du003dFALSE; } );print_r($ciphers);print_r($cipher_aliases);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d> aes-128-cbc
[1] u003d> aes-128-cbc-hmac-sha1
[2] u003d> aes-128-cbc-hmac-sha256
[3] u003d> aes-128-ccm
[4] u003d> aes-128-cfb
[5] u003d> aes-128-cfb1
[6] u003d> aes-128-cfb8
[7] u003d> aes-128-ctr
[9] u003d> aes-128-gcm
[10] u003d> aes-128-ocb
[11] u003d> aes-128-ofb
[12] u003d> aes-128-xts
[13] u003d> aes-192-cbc
[14] u003d> aes-192-ccm
[15] u003d> aes-192-cfb
[16] u003d> aes-192-cfb1
[17] u003d> aes-192-cfb8
[18] u003d> aes-192-ctr
[20] u003d> aes-192-gcm
[21] u003d> aes-192-ocb
[22] u003d> aes-192-ofb
[23] u003d> aes-256-cbc
[24] u003d> aes-256-cbc-hmac-sha1
[25] u003d> aes-256-cbc-hmac-sha256
[26] u003d> aes-256-ccm
[27] u003d> aes-256-cfb
[28] u003d> aes-256-cfb1
[29] u003d> aes-256-cfb8
[30] u003d> aes-256-ctr
[32] u003d> aes-256-gcm
[33] u003d> aes-256-ocb
[34] u003d> aes-256-ofb
[35] u003d> aes-256-xts
[36] u003d> aria-128-cbc
[37] u003d> aria-128-ccm
[38] u003d> aria-128-cfb
[39] u003d> aria-128-cfb1
[40] u003d> aria-128-cfb8
[41] u003d> aria-128-ctr
[43] u003d> aria-128-gcm
[44] u003d> aria-128-ofb
[45] u003d> aria-192-cbc
[46] u003d> aria-192-ccm
[47] u003d> aria-192-cfb
[48] u003d> aria-192-cfb1
[49] u003d> aria-192-cfb8
[50] u003d> aria-192-ctr
[52] u003d> aria-192-gcm
[53] u003d> aria-192-ofb
[54] u003d> aria-256-cbc
[55] u003d> aria-256-ccm
[56] u003d> aria-256-cfb
[57] u003d> aria-256-cfb1
[58] u003d> aria-256-cfb8
[59] u003d> aria-256-ctr
[61] u003d> aria-256-gcm
[62] u003d> aria-256-ofb
[63] u003d> bf-cbc
[64] u003d> bf-cfb
[66] u003d> bf-ofb
[67] u003d> camellia-128-cbc
[68] u003d> camellia-128-cfb
[69] u003d> camellia-128-cfb1
[70] u003d> camellia-128-cfb8
[71] u003d> camellia-128-ctr
[73] u003d> camellia-128-ofb
[74] u003d> camellia-192-cbc
[75] u003d> camellia-192-cfb
[76] u003d> camellia-192-cfb1
[77] u003d> camellia-192-cfb8
[78] u003d> camellia-192-ctr
[80] u003d> camellia-192-ofb
[81] u003d> camellia-256-cbc
[82] u003d> camellia-256-cfb
[83] u003d> camellia-256-cfb1
[84] u003d> camellia-256-cfb8
[85] u003d> camellia-256-ctr
[87] u003d> camellia-256-ofb
[88] u003d> cast5-cbc
[89] u003d> cast5-cfb
[91] u003d> cast5-ofb
[92] u003d> chacha20
[93] u003d> chacha20-poly1305
[111] u003d> id-aes128-CCM
[112] u003d> id-aes128-GCM
[113] u003d> id-aes128-wrap
[114] u003d> id-aes128-wrap-pad
[115] u003d> id-aes192-CCM
[116] u003d> id-aes192-GCM
[117] u003d> id-aes192-wrap
[118] u003d> id-aes192-wrap-pad
[119] u003d> id-aes256-CCM
[120] u003d> id-aes256-GCM
[121] u003d> id-aes256-wrap
[122] u003d> id-aes256-wrap-pad
[124] u003d> idea-cbc
[125] u003d> idea-cfb
[127] u003d> idea-ofb
[137] u003d> seed-cbc
[138] u003d> seed-cfb
[140] u003d> seed-ofb
[141] u003d> sm4-cbc
[142] u003d> sm4-cfb
[143] u003d> sm4-ctr
[145] u003d> sm4-ofb
)
Array
(
[36] u003d> aes128
[37] u003d> aes128-wrap
[38] u003d> aes192
[39] u003d> aes192-wrap
[40] u003d> aes256
[41] u003d> aes256-wrap
[69] u003d> aria128
[70] u003d> aria192
[71] u003d> aria256
[72] u003d> bf
[77] u003d> blowfish
[99] u003d> camellia128
[100] u003d> camellia192
[101] u003d> camellia256
[102] u003d> cast
[103] u003d> cast-cbc
[146] u003d> idea
[164] u003d> seed
[169] u003d> sm4
)

### Дивіться також

- [openssl_get_md_methods()](function.openssl-get-md-methods.md) -
Отримати список доступних методів хешування
