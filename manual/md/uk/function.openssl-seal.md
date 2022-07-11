- [«
openssl_random_pseudo_bytes](function.openssl-random-pseudo-bytes.md)
- [openssl_sign »](function.openssl-sign.md)

- [PHP Manual](index.md)
- [Функції OpenSSL](ref.openssl.md)
- Запечатати (зашифрувати) дані

# openssl_seal

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

openssl_seal — Запечатати (зашифрувати) дані

### Опис

**openssl_seal**(
string `$data`,
string `&$sealed_data`,
array `&$encrypted_keys`,
array `$public_key`,
string `$cipher_algo`,
string `&$iv` u003d **`null`**
): int\|false

**openssl_seal()** запечатує (шифрує) `data`, використовуючи метод
`cipher_algo` зі згенерованим випадково секретним ключем. Ключ буде
зашифрований кожним відкритим ключем, вказаним у масиві `public_key`, та
кожен зашифрований ключ буде розміщений в `encrypted_keys`. Тобто ви
можете надіслати запечатані дані відразу кільком одержувачам.
Кожен отримувач повинен отримати як запечатані дані, так і
зашифрований відповідним відкритим ключем ключ для їхнього відкриття.

### Список параметрів

`data`
Запечатувані дані.

`sealed_data`
Запечатані дані.

`encrypted_keys`
Масив зашифрованих ключів.

`public_key`
Масив екземплярів
[OpenSSLAsymmetricKey](class.opensslasymmetrickey.md), що містять
відкриті ключі.

`cipher_algo`
Метод шифрування.

**Застереження**
Значення за умовчанням (RC4) вважається небезпечним. Наполегливо
рекомендується явно вказувати метод безпечного шифрування.

`iv`
Ініціалізуючий вектор.

### Значення, що повертаються

Повертає довжину запечатаних даних або ** false **. У разі успішного
виконання в `sealed_data` будуть міститися запечатані дані, а в
`encrypted_keys` зашифровані ключі.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------|
| 8.0.0 | `public_key` тепер приймає масив (array) екземплярів [OpenSSLAsymmetricKey](class.opensslasymmetrickey.md); раніше приймався масив (array) ресурсів ([resource](language.types.resource.md)) типу OpenSSL key. |
| 8.0.0 | `cipher_algo` більше не є необов'язковим параметром. |
| 8.0.0 | `iv` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **openssl_seal()****

` <?php// $data містить дані для запечатування// витягуємо відкриті ключи одержувачів і підготовлюємо их$fp u003d fopen("/src/openssl-0.9.6/demos/ ma; $cert u003d fread($fp, 8192);fclose($fp);$pk1 u003d openssl_get_publickey($cert);// повторюємо для другого одержувача$fp u003d fopen("/src/openssl-0/9. /cert.pem", "r");$cert u003d fread($fp, 8192);fclose($fp);$pk2 u003d openssl_get_publickey($cert);// задаємо метод$method u003d 'AES256';// генерируем IV$ivLength u003d openssl_cipher_iv_length( $method );$iv u003d openssl_random_pseudo_bytes( $ivLength, $strong );if (! $strong) { error_log('Инициализирующий вектор может быть не крипографически сильным!');}// запечатываем сообщение, тільки власники $pk1 і $pk2 зможуть його роздрукувати,// використовуючи ключи $ekeys[0] і $ekeys[1] відповідно.openssl_seal($data, $sealed, $$ , $iv);// звільняємо ресурси ключівopenssl_free_key($pk1);openssl_free_key($pk2);?> `

### Дивіться також

- [openssl_open()](function.openssl-open.md) - Відкрити запечатані
дані
