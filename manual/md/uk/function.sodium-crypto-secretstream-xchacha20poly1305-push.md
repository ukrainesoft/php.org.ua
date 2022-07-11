- [«
sodium_crypto_secretstream_xchacha20poly1305_pull](function.sodium-crypto-secretstream-xchacha20poly1305-pull.md)
- [sodium_crypto_secretstream_xchacha20poly1305_rekey
»](function.sodium-crypto-secretstream-xchacha20poly1305-rekey.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Шифрує фрагмент даних, щоб його можна було безпечно розшифрувати
в потоковому API

# sodium_crypto_secretstream_xchacha20poly1305_push

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_secretstream_xchacha20poly1305_push — Шифрує фрагмент
даних, щоб його можна було безпечно розшифрувати в потоковому API

### Опис

**sodium_crypto_secretstream_xchacha20poly1305_push**(
string `&$state`,
string `$message`,
string `$additional_data` u003d "",
int `$tag` u003d
**`SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_MESSAGE`**
): string

Шифрує фрагмент даних, щоб його можна було безпечно розшифрувати в
потоковий API.

### Список параметрів

`state`
Дивіться
[sodium_crypto_secretstream_xchacha20poly1305_init_pull()](function.sodium-crypto-secretstream-xchacha20poly1305-init-pull.md)
і
[sodium_crypto_secretstream_xchacha20poly1305_init_push()](function.sodium-crypto-secretstream-xchacha20poly1305-init-push.md)

`message`

`additional_data`

`tag`
Не обов'язково. Може використовуватись для підтвердження поведінки
дешифрування (тобто повторного введення ключів або вказівки останнього)
фрагмента у потоці).

- **`SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_MESSAGE`**:
найпоширеніший тег, який не додає жодної інформації
характер повідомлення.
- **`SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_FINAL`**:
вказує, що повідомлення відзначає кінець потоку, та стирає секретний
ключ, використаний для шифрування попередньої послідовності.
- **`SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_PUSH`**:
вказує, що повідомлення вказує на кінець набору повідомлень, але не
кінець потоку. Наприклад, величезний рядок JSON, надісланий у вигляді
кількох фрагментів, може використовувати цей тег, щоб вказати
додатку, що рядок завершено і що його можна декодувати. Але сам
потік не закривається і можуть бути додаткові дані.
- **`SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_REKEY`**:
"забуває" ключ, використаний для шифрування цього та попередніх
повідомлень та отримує новий секретний ключ.

### Значення, що повертаються

Повертає зашифрований текст.
