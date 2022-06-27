- [«
sodium_crypto_secretstream_xchacha20poly1305_keygen](function.sodium-crypto-secretstream-xchacha20poly1305-keygen.md)
- [sodium_crypto_secretstream_xchacha20poly1305_push
»](function.sodium-crypto-secretstream-xchacha20poly1305-push.md)

- [PHP Manual](index.md)
- [Функції Sodium](ref.sodium.md)
- Розшифровує частину даних із зашифрованого потоку

# sodium_crypto_secretstream_xchacha20poly1305_pull

(PHP 7 \>u003d 7.2.0, PHP 8)

sodium_crypto_secretstream_xchacha20poly1305_pull — Розшифровує частину
даних із зашифрованого потоку

### Опис

**sodium_crypto_secretstream_xchacha20poly1305_pull**(string `&$state`,
string `$ciphertext`, string `$additional_data` u003d ""): array\|false

Розшифровує частину даних із зашифрованого потоку.

### Список параметрів

`state`
Дивіться
[sodium_crypto_secretstream_xchacha20poly1305_init_pull()](function.sodium-crypto-secretstream-xchacha20poly1305-init-pull.md)
і
[sodium_crypto_secretstream_xchacha20poly1305_init_push()](function.sodium-crypto-secretstream-xchacha20poly1305-init-push.md)

`ciphertext`
Фрагмент зашифрованого тексту, який потрібно розшифрувати.

`additional_data`
Необов'язкові додаткові дані для включення в тег аутентифікації.

### Значення, що повертаються

Масив із двома значеннями:

- рядок (string); Розшифрований фрагмент

- ціле число (int); Необов'язковий тег (якщо надається під час
відправки). Можливі значення:

- **`SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_MESSAGE`**:
найпоширеніший тег, який не додає жодного
інформації про характер повідомлення.
- **`SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_FINAL`**:
вказує, що повідомлення відзначає кінець потоку, та стирає
секретний ключ, використаний для шифрування попередньої
послідовність.
- **`SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_PUSH`**:
вказує, що повідомлення вказує на кінець набору повідомлень, але не
кінець потоку. Наприклад, величезний рядок JSON, відправлений у
вигляді декількох фрагментів, може використовувати цей тег, щоб
вказати додатку, що рядок завершено і що його можна
декодувати. Але сам потік не закривається і можуть наслідувати
додаткові дані.
- **`SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_REKEY`**:
"забуває" ключ, використаний для шифрування цього і
попередніх повідомлень та отримує новий секретний ключ.
