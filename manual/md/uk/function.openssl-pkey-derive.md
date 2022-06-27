- [« openssl_pkcs7_verify](function.openssl-pkcs7-verify.md)
- [openssl_pkey_export_to_file
»](function.openssl-pkey-export-to-file.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- обчислює загальний секрет для відкритого значення віддаленого та
локального ключа DH або ECDH

# openssl_pkey_derive

(PHP 7 \>u003d 7.3.0, PHP 8)

openssl_pkey_derive — Обчислює загальний секрет відкритого значення
віддаленого та локального ключа DH або ECDH

### Опис

**openssl_pkey_derive**([OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$public_key`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)\|[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$private_key`, int `$key_length` u003d 0): string\|false

**openssl_pkey_derive()** приймає набір з `public_key` та
`private_key` і породжує загальний секрет ключів DH або EC.

### Список параметрів

`public_key`
Відкритий ключ для виводу. Список допустимих значень дивіться у розділі
[Параметри ключа/сертифіката](openssl.certparams.md).

`private_key`
Закритий ключ для виводу. Список допустимих значень дивіться у розділі
[Параметри ключа/сертифіката](openssl.certparams.md).

`key_length`
Встановлює бажану довжину секрету, якщо значення не
одно нулю.

### Значення, що повертаються

Зроблений секрет у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **openssl_pkey_derive()****

` <?php// Загрузка закрытого ключа$priv u003d openssl_pkey_get_private("-----BEGIN PRIVATE KEY-----MIICJgIBADCCARcGCSqGSIb3DQEDATCCAQgCggEBAJLxRCaZ933uW+AXmabHFDDyupojBIRlbmQLJZfigDaSA1f9YOTsIv+WwVFTX/J1mtCyx9uBcz0Nt2kmVwxWuc2fVtCEMPsmLsVXX7xRUFLpyX1Y1IYGBVXQOoOvLWYQjpZgnx47Pkh1Ok1+smffztfC0DCNt4KorWrbsPcmqBejXHN79KvWFjZmXOksRiNu/Bn76RiqvofC4z8Ri3kHXQG2197JGZzzFXHadGC3xbkg8UxsNbYhVMKbm0iANfafUH7/hoS9UjAVQYtvwe7YNiW/HnyfVCrKwcc7sadd8Iphh+3lf5P1AhaQEAMytanrzq9RDXKBxuvpSJifRYasZYsCAQIEggEEAoIBAGwAYC2E81Y1U2Aox0U7u1+vBcbht/OO87tutMvc4NTLf6NLPHsWcPqBixs+ 3rSn4fADzAIvdLBmogjtiIZoB6qyHrllF/2xwTVGEeYaZIupQH3bMK2b6eUvnpuu4Ytksiz6VpXBBRMrIsj3frM+zUtnq8vKUr+TbjV2qyKR8l3eNDwzqz30dlbKh9kIhZafclHfRVfyp+fVSKPfgrRAcLUgAbsVjOjPeJ90xQ4DTMZ6vjiv6tHMhkSjJIcGhRtSBzVF/cT38GyCeTmiIA/dRz2d70lWrqDQCdp9ArijgnpjNKAAulSYCirnMsGZTDGmLOHg4xOZ5FEAzZI2sFNLlcwu003d-----END PRIVATE KEY-----");// Загрузка открытого ключа$pub u003d openssl_pkey_get_public("-----BEGIN PUBLIC KEY- ----MIICJDCCARcGCSqGSIb3DQEDATCCAQgCggEBAJLxRCaZ933uW+AX mabHFDDyupojBIRlbmQLJZfigDaSA1f9YOTsIv+WwVFTX/J1mtCyx9uBcz0Nt2kmVwxWuc2fVtCEMPsmLsVXX7xRUFLpyX1Y1IYGBVXQOoOvLWYQjpZgnx47Pkh1Ok1+smffztfC0DCNt4KorWrbsPcmqBejXHN79KvWFjZmXOksRiNu/Bn76RiqvofC4z8Ri3kHXQG2197JGZzzFXHadGC3xbkg8UxsNbYhVMKbm0iANfafUH7/hoS9UjAVQYtvwe7YNiW/HnyfVCrKwcc7sadd8Iphh+3lf5P1AhaQEAMytanrzq9RDXKBxuvpSJifRYasZYsCAQIDggEFAAKCAQAiCSBpxvGgsTorxAWtcAlSmzAJnJxFgSPef0g7OjhESytnc8G2QYmxovMt5KVergcitztWh08hZQUdAYm4rI+zMlAFDdN8LWwBT/mGKSzRkWeprd8E7mvyucqC1YXCMqmIwPySvLQUB/Dl8kgau7BLAnIJm8VP+MVrn8g9gghD0qRCgPgtEaDVvocfgnOU43rhKnIgO0cHOKtw2qybSFB8QuZrYugq4j8Bwkrzh6rdMMeyMl/ej5Ajc0wamOzuBDtXt0T9+Fx3khHaowjCc7xJZRgZCxg43SbqMWJ9lUg94I7+LTX61GyvdtlkbGbtoDOnxeNnN93gwQZngGYZYciu-----END PUBLIC KEY-----");// Выводит шестнадцатеричную версию виробленого ключаecho bin2hex(openssl_pkey_derive($pub,$priv)); `
