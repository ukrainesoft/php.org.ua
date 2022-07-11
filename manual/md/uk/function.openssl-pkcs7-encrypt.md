- [« openssl_pkcs7_decrypt](function.openssl-pkcs7-decrypt.md)
- [openssl_pkcs7_read »](function.openssl-pkcs7-read.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Шифрує повідомлення S/MIME

#openssl_pkcs7_encrypt

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_pkcs7_encrypt — Шифрує повідомлення S/MIME

### Опис

**openssl_pkcs7_encrypt**(
string `$input_filename`,
string `$output_filename`,
[OpenSSLCertificate](class.opensslcertificate.md)\|array\|string
`$certificate`,
?array `$headers`,
int `$flags` u003d 0,
int `$cipher_algo` u003d **`OPENSSL_CIPHER_AES_128_CBC`**
): bool

**openssl_pkcs7_encrypt()** читає повідомлення з файлу `input_filename`,
шифрує його за допомогою 40-бітного RC2 шифру таким чином, що
розшифрувати його можуть лише одержувачі, вказаними в `certificate`.

### Список параметрів

`input_filename`

`output_filename`

`certificate`
Масив або одиничний сертифікат X.509.

`headers`
`headers` задається масивом заголовків, які будуть додані на початок
повідомлення перед шифруванням.

`headers` може бути як асоціативним масивом, де як ключі
використовуються імена заголовків, або індексованим масивом, що містить
повні рядки заголовків.

`flags`
`flags` використовується для налаштування процесу шифрування. Дивіться
[Константи PKCS7](openssl.pkcs7.flags.md).

`cipher_algo`
Один з [констант шифрів](openssl.ciphers.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------|
| 8.1.0 | Алгоритм шифрування за замовчуванням ('cipher_algo') тепер є AES-128-CBC (**'OPENSSL_CIPHER_AES_128_CBC`**). Раніше використовувався алгоритм PKCS7/CMS (**OPENSSL_CIPHER_RC2_40**). |
| 8.0.0 | `certificate` тепер приймає екземпляр [OpenSSLCertificate](class.opensslcertificate.md); раніше приймався ресурс ([resource](language.types.resource.md)) типу OpenSSL X.509 CSR. |

### Приклади

**Приклад #1 Приклад використання **openssl_pkcs7_encrypt()****

`<?php// Повідомлення, ви хочете зашифрувати і надіслати своєму секретному// агенту з позивним Козодою. У вас є сертифікат у файлі nighthawk.pem $ data u003du003d<<<EODКозодою,Цілком! Після прочитання спалити! Вороги наближаються! Зв'язковий з новим підробленим паспортомбуде ждати тебе завтра в кафе в 8.30 ранку.Пароль - "У вас ус відклеївся! );// записуємо повідомлення в файл$fp u003d fopen("msg.txt", "w");fwrite($fp, $data);fclose($fp);// шифруємоif (openssl_pkcs7" , "enc.txt", $key,    array("To" u003d> "nighthawk@example.com", // ассоциативный синтаксис          "From: HQ <hq@example.com>", // индексированный синтаксис          "Subject" u003d > "ТЕРМІНОВО!!! ВАЖЛИВО!!!"))) {    // повідомлення зашифроване - відправляємо!! exec(ini_get("sendmail_path") . " < enc.txt");}?> `
