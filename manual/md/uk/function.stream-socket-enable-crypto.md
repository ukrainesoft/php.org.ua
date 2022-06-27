- [«stream_socket_client](function.stream-socket-client.md)
- [stream_socket_get_name »](function.stream-socket-get-name.md)

- [PHP Manual](index.md)
- [Функції для роботи з потоками](ref.stream.md)
- Вмикає або вимикає шифрування на вже підключеному сокеті

#stream_socket_enable_crypto

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

stream_socket_enable_crypto — Вмикає або вимикає шифрування вже
підключеному сокеті

### Опис

**stream_socket_enable_crypto**(
resource `$stream`,
bool `$enable`,
?int `$crypto_method` u003d **`null`**,
?resource `$session_stream` u003d **`null`**
): int\|bool

Вмикає або вимикає шифрування на потоці.

Після налаштування шифрування, криптографія може бути включена або
динамічно вимкнено за допомогою передачі значення **`true`** або
**`false`** параметру `enable`.

### Список параметрів

`stream`
Потоковий ресурс.

`enable`
Увімкнути/вимкнути криптографію на потоці.

`crypto_method`
Увімкніть шифрування на потоці. Допустимі методи

- **`STREAM_CRYPTO_METHOD_SSLv2_CLIENT`**
- **`STREAM_CRYPTO_METHOD_SSLv3_CLIENT`**
- **`STREAM_CRYPTO_METHOD_SSLv23_CLIENT`**
- **`STREAM_CRYPTO_METHOD_ANY_CLIENT`**
- **`STREAM_CRYPTO_METHOD_TLS_CLIENT`**
- **`STREAM_CRYPTO_METHOD_TLSv1_0_CLIENT`**
- **`STREAM_CRYPTO_METHOD_TLSv1_1_CLIENT`**
- **`STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT`**
- **`STREAM_CRYPTO_METHOD_SSLv2_SERVER`**
- **`STREAM_CRYPTO_METHOD_SSLv3_SERVER`**
- **`STREAM_CRYPTO_METHOD_SSLv23_SERVER`**
- **`STREAM_CRYPTO_METHOD_ANY_SERVER`**
- **`STREAM_CRYPTO_METHOD_TLS_SERVER`**
- **`STREAM_CRYPTO_METHOD_TLSv1_0_SERVER`**
- **`STREAM_CRYPTO_METHOD_TLSv1_1_SERVER`**
- **`STREAM_CRYPTO_METHOD_TLSv1_2_SERVER`**

Якщо не вказано, то буде використано параметр crypto_method з SSL
контексту потоку.

`session_stream`
Використовувати в потоці налаштування `session_stream`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, **`false`**, якщо
не вдалося встановити шифрування або `0`, якщо недостатньо даних і ви
повинні спробувати ще раз (тільки для сокетів, що не блокують).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------|
| 8.0.0 | `session_stream` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **stream_socket_enable_crypto()****

` <?php$fp u003d stream_socket_client("tcp://myproto.example.com:31337", $errno, $errstr, 30);if (!$fp) {    die("Не можу $|| errno)");}/* Включити шифрування для етапу входу в систему */stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_SSLv23_CLIENT);fwrite$"
");fwrite($fp, "PASS секрет
");/* Вимкнути шифрування для всього остального */stream_socket_enable_crypto($fp, false);while ($motd u003d fgets($fp)) {    echo $motd;}f;

Результатом виконання цього прикладу буде щось подібне:

### Дивіться також

- [Функції OpenSSL](ref.openssl.md)
- [Список підтримуваних транспортних протоколів](transports.md)
