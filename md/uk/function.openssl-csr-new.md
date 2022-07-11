- [« openssl_csr_get_subject](function.openssl-csr-get-subject.md)
- [openssl_csr_sign »](function.openssl-csr-sign.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Генерує CSR

#openssl_csr_new

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_csr_new - Генерує CSR

### Опис

**openssl_csr_new**(
array `$distinguished_names`,
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md)
`&$private_key`,
?array `$options` u003d **`null`**,
?array `$extra_attributes` u003d **`null`**
):
[OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md)\|false

**openssl_csr_new()** створює новий запит на підпис сертифіката
(Certificate Signing Request або CSR) базуючись на інформації
вказаною у параметрі `distinguished_names`.

> **Примітка**: Для коректної роботи цієї функції має існувати
> правильний `openssl.cnf`. Для більш детальної інформації дивіться
> зауваження під розділом установки (openssl.installation.md).

### Список параметрів

`distinguished_names`
Унікальне ім'я (Distinguished Name) або поля суб'єкта для використання
у сертифікаті.

`private_key`
Параметр `private_key` повинен бути заданий закритим ключем раніше
згенерованою функцією
[openssl_pkey_new()](function.openssl-pkey-new.md) (або отриманий з
за допомогою будь-якої іншої функції сімейства openssl_pkey). Відповідна
відкрита частина ключа буде використана для підписання CSR.

`options`
За замовчуванням для ініціалізації запиту використовується інформація з вашого
системного `openssl.conf`. Ви можете вказати секцію конфігураційного
файлу шляхом завдання ключа `config_section_section` у `options`. Також ви
можете задати альтернативний файл конфігурації openssl шляхом завдання
ключа `config` значенням шляху до нього. Відповідність ключів, зазначених у
`options` ключам з `openssl.conf` представлено нижче.

| Ключ `options` | Тип | Відповідність у `openssl.conf` | Опис |
|--------------------|--------|-------------------- ------------|------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------|
| digest_alg | string | default_md | Один з методів [openssl_get_md_methods()](function.openssl-get-md-methods.md) |
| x509_extensions | string | x509_extensions | Визначає, яке розширення має використовуватись для створення сертифіката x509 |
| req_extensions | string | req_extensions | Визначає, яке розширення має використовуватися створення CSR |
| private_key_bits | int | default_bits | Задає, скільки біт має використовуватись для генерації закритого ключа |
| private_key_type | int | none | Задає тип закритого ключа, що створюється. Одна з констант: **`OPENSSL_KEYTYPE_DSA`**, **`OPENSSL_KEYTYPE_DH`**, **`OPENSSL_KEYTYPE_RSA`** або **`OPENSSL_KEYTYPE_EC`**. За промовчанням **`OPENSSL_KEYTYPE_RSA`**. |
| encrypt_key | bool | encrypt_key | Чи повинен шифруватися (паролем) ключ, що експортується? |
| encrypt_key_cipher | int | none | Один з [констант шифрів](openssl.ciphers.md). |
| curve_name | string | none | Один з [openssl_get_curve_names()](function.openssl-get-curve-names.md). |
| config | string | N/A | Шлях до альтернативного конфігураційного файлу openssl.conf. |

**Перевизначення конфігурації**

`extra_attributes`
`extra_attributes` використовується для вказівки додаткових опцій для
CSR. І `distinguished_names`, і `extra_attributes`
асоціативними масивами, ключі яких перетворюються на OI-и та
застосовуються до відповідних частин запиту.

### Значення, що повертаються

Повертає CSR або **false** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `csr` тепер приймає екземпляр [OpenSSLCertificateSigningRequest](class.opensslcertificatesigningrequest.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509 CSR. |
| 8.0.0 | `private_key` тепер приймає екземпляр [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL key. |
| 7.1.0 | Параметр `options` тепер підтримує `curve_name`. |

### Приклади

**Приклад #1 Створення самопідписаного сертифіката**

` <?php// для сервера сертификации SSL, commonName является доменным именем// для сертификатов S/MIME, commonName является владельцем расположения адреса email// и поля идентификации относятся к владельцу домена или электронной почты,// подлежащим защите$dn u003d array (    "countryName" u003d> "GB",    "stateOrProvinceName" u003d> "Somerset",    "localityName" u003d> "Glastonbury",    "organizationName" u003d> "The Brain Room Limited",    "organizationalUnitName" u003d> "PHP Documentation Team" ,    "commonName" u003d> "Wez Furlong",    "emailAddress" u003d> "wez@example.com");// Создание пары закрытый/открытый ключ$privkey u003d openssl_pkey_new(array(    "private_key_bits" u003d> 2048,    "private_key_type" u003d> OPENSSL_KEYTYPE_RSA,));// Создание CSR$csr u003d openssl_csr_new($dn, $privkey, array('digest_alg' u003d> 'sha256'));// Создание самоподписанного сертификата со сроком жизни 365 дней$x509 u003d openssl_csr_sign( $csr, null, $privkey, $daysu003d365, array('digest_alg' u003d> 'sha256'));// Збереження закритого ключа, CSR і самопідписаного сертифікатаopenssl_csr_export($csr, $csrout) and var_dump($csrout);openssl_x509_export($x509, $certout) and var_dump($certout);openssl_pkey_export($prips / Покажемо виниклі помилки, якщо вони булиwhile (($e u003d openssl_error_string()) !u003du003d false) {    echo $e . "
";}?> `

**Приклад #2 Створення самопідписаного ECC сертифіката (починаючи з PHP
7.1.0)**

`<?php$subject u003d array(    "commonName" u003d> "docs.php.net",);// Створення пари закритий/відкритий ключ$private_key u003d OPES_ _ > 'prime256v1',));// Створення CSR$csr u003d openssl_csr_new($subject, $private_key, array('digest_alg' u003d> 'sha384'));// Створення| null, $private_key, $daysu003d365, array('digest_alg' u003d> 'sha384'));openssl_x509_export_to_file($x509, 'ecc-cert.pem');openssl_pkey_ex' ;?> `

### Дивіться також

- [openssl_csr_sign()](function.openssl-csr-sign.md) - Підписати CSR
за допомогою іншого сертифіката (або їм же) та створити сертифікат
