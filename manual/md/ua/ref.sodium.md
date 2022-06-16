- [«Зумовлені константи](sodium.constants.md)
- [sodium_add »](function.sodium-add.md)

- [PHP Manual](index.md)
- [Sodium](book.sodium.md)
- Функції Sodium

# Функції Sodium

## Зміст

- [sodium_add](function.sodium-add.md) — Додає великі числа
- [sodium_base642bin](function.sodium-base642bin.md) - Перетворює
рядок у кодуванні base64 у необроблений двійковий файл
- [sodium_bin2base64](function.sodium-bin2base64.md) - Кодує
необроблений двійковий рядок за допомогою base64
- [sodium_bin2hex](function.sodium-bin2hex.md) — Кодувати в
шістнадцяткове уявлення
- [sodium_compare](function.sodium-compare.md) — порівняти великі
числа
- [sodium_crypto_aead_aes256gcm_decrypt](function.sodium-crypto-aead-aes256gcm-decrypt.md)
— Перевіряє та розшифровує повідомлення за допомогою AES-256-GCM
- [sodium_crypto_aead_aes256gcm_encrypt](function.sodium-crypto-aead-aes256gcm-encrypt.md)
— Шифрує, а потім перевіряє справжність за допомогою AES-256-GCM
- [sodium_crypto_aead_aes256gcm_is_available](function.sodium-crypto-aead-aes256gcm-is-available.md)
— Перевірити, чи підтримує обладнання AES256-GCM
- [sodium_crypto_aead_aes256gcm_keygen](function.sodium-crypto-aead-aes256gcm-keygen.md)
— Створює випадковий ключ AES-256-GCM
- [sodium_crypto_aead_chacha20poly1305_decrypt](function.sodium-crypto-aead-chacha20poly1305-decrypt.md)
— Перевіряє, потім розшифровує за допомогою ChaCha20-Poly1305
- [sodium_crypto_aead_chacha20poly1305_encrypt](function.sodium-crypto-aead-chacha20poly1305-encrypt.md)
- Шифрує, а потім перевіряє справжність за допомогою ChaCha20-Poly1305
- [sodium_crypto_aead_chacha20poly1305_ietf_decrypt](function.sodium-crypto-aead-chacha20poly1305-ietf-decrypt.md)
— Перевірити, чи зашифрований текст містить допустимий тег
- [sodium_crypto_aead_chacha20poly1305_ietf_encrypt](function.sodium-crypto-aead-chacha20poly1305-ietf-encrypt.md)
— Зашифрувати повідомлення
- [sodium_crypto_aead_chacha20poly1305_ietf_keygen](function.sodium-crypto-aead-chacha20poly1305-ietf-keygen.md)
- Створює випадковий ключ ChaCha20-Poly1305 (IETF)
- [sodium_crypto_aead_chacha20poly1305_keygen](function.sodium-crypto-aead-chacha20poly1305-keygen.md)
- Створює випадковий ключ ChaCha20-Poly1305
- [sodium_crypto_aead_xchacha20poly1305_ietf_decrypt](function.sodium-crypto-aead-xchacha20poly1305-ietf-decrypt.md)
— (Переважно) Перевіряє, потім розшифровує за допомогою
XChaCha20-Poly1305
- [sodium_crypto_aead_xchacha20poly1305_ietf_encrypt](function.sodium-crypto-aead-xchacha20poly1305-ietf-encrypt.md)
- (Переважно) Шифрує, а потім перевіряє справжність за допомогою
XChaCha20-Poly1305
- [sodium_crypto_aead_xchacha20poly1305_ietf_keygen](function.sodium-crypto-aead-xchacha20poly1305-ietf-keygen.md)
- Створює випадковий ключ XChaCha20-Poly1305
- [sodium_crypto_auth_keygen](function.sodium-crypto-auth-keygen.md)
- Створює випадковий ключ для sodium_crypto_auth
- [sodium_crypto_auth_verify](function.sodium-crypto-auth-verify.md)
— Перевіряє, чи допустимо тег для повідомлення
- [sodium_crypto_auth](function.sodium-crypto-auth.md) — Обчислити
тег для повідомлення
- [sodium_crypto_box_keypair_from_secretkey_and_publickey](function.sodium-crypto-box-keypair-from-secretkey-and-publickey.md)
— Створює уніфікований рядок ключової пари із секретного та
відкритого ключів
- [sodium_crypto_box_keypair](function.sodium-crypto-box-keypair.md)
— Згенерувати випадковим чином секретний ключ та відповідний
йому відкритий ключ
- [sodium_crypto_box_open](function.sodium-crypto-box-open.md) -
Розшифровка відкритого ключа з автентичністю
- [sodium_crypto_box_publickey_from_secretkey](function.sodium-crypto-box-publickey-from-secretkey.md)
— Обчислює відкритий ключ із секретного ключа
- [sodium_crypto_box_publickey](function.sodium-crypto-box-publickey.md)
— Витягує відкритий ключ із ключової пари crypto_box
- [sodium_crypto_box_seal_open](function.sodium-crypto-box-seal-open.md)
— Розшифровка відкритим ключем без автентифікації
- [sodium_crypto_box_seal](function.sodium-crypto-box-seal.md) -
Шифрування відкритим ключем без автентифікації
- [sodium_crypto_box_secretkey](function.sodium-crypto-box-secretkey.md)
— Витягує секретний ключ із ключової пари crypto_box
- [sodium_crypto_box_seed_keypair](function.sodium-crypto-box-seed-keypair.md)
- Детерміністичний висновок ключової пари з одного ключа
- [sodium_crypto_box](function.sodium-crypto-box.md) - Шифрування
відкритим ключем з автентичністю
- [sodium_crypto_core_ristretto255_add](function.sodium-crypto-core-ristretto255-add.md)
— Додає елемент
- [sodium_crypto_core_ristretto255_from_hash](function.sodium-crypto-core-ristretto255-from-hash.md)
— Зіставляє вектор
- [sodium_crypto_core_ristretto255_is_valid_point](function.sodium-crypto-core-ristretto255-is-valid-point.md)
— Визначає, чи лежить точка на кривій.
- [sodium_crypto_core_ristretto255_random](function.sodium-crypto-core-ristretto255-random.md)
- Генерує випадковий ключ
- [sodium_crypto_core_ristretto255_scalar_add](function.sodium-crypto-core-ristretto255-scalar-add.md)
- Додає скалярне значення
- [sodium_crypto_core_ristretto255_scalar_complement](function.sodium-crypto-core-ristretto255-scalar-complement.md)
- Призначення sodium_crypto_core_ristretto255_scalar_complement
- [sodium_crypto_core_ristretto255_scalar_invert](function.sodium-crypto-core-ristretto255-scalar-invert.md)
- Інвертує скалярне значення
- [sodium_crypto_core_ristretto255_scalar_mul](function.sodium-crypto-core-ristretto255-scalar-mul.md)
- Помножує скалярне значення
- [sodium_crypto_core_ristretto255_scalar_negate](function.sodium-crypto-core-ristretto255-scalar-negate.md)
— Скасовує скалярне значення
- [sodium_crypto_core_ristretto255_scalar_random](function.sodium-crypto-core-ristretto255-scalar-random.md)
- Генерує випадковий ключ
- [sodium_crypto_core_ristretto255_scalar_reduce](function.sodium-crypto-core-ristretto255-scalar-reduce.md)
— Зменшує скалярне значення
- [sodium_crypto_core_ristretto255_scalar_sub](function.sodium-crypto-core-ristretto255-scalar-sub.md)
— Віднімає скалярне значення
- [sodium_crypto_core_ristretto255_sub](function.sodium-crypto-core-ristretto255-sub.md)
— Віднімає елемент
- [sodium_crypto_generichash_final](function.sodium-crypto-generichash-final.md)
- Закінчити хешування
- [sodium_crypto_generichash_init](function.sodium-crypto-generichash-init.md)
- Ініціалізує хеш для потокової передачі
- [sodium_crypto_generichash_keygen](function.sodium-crypto-generichash-keygen.md)
- Створює випадковий загальний хеш-ключ
- [sodium_crypto_generichash_update](function.sodium-crypto-generichash-update.md)
— Додати повідомлення до хешу
- [sodium_crypto_generichash](function.sodium-crypto-generichash.md)
— Отримати хеш повідомлення
- [sodium_crypto_kdf_derive_from_key](function.sodium-crypto-kdf-derive-from-key.md)
— Витягти підрозділ
- [sodium_crypto_kdf_keygen](function.sodium-crypto-kdf-keygen.md) -
Створює випадковий кореневий ключ для інтерфейсу KDF
- [sodium_crypto_kx_client_session_keys](function.sodium-crypto-kx-client-session-keys.md)
- Обчислює ключі сесії на стороні клієнта
- [sodium_crypto_kx_keypair](function.sodium-crypto-kx-keypair.md) -
Створює нову пару ключів.
- [sodium_crypto_kx_publickey](function.sodium-crypto-kx-publickey.md)
— Витягує відкритий ключ із пари ключів crypto_kx
- [sodium_crypto_kx_secretkey](function.sodium-crypto-kx-secretkey.md)
— Витягує секретний ключ із пари ключів crypto_kx
- [sodium_crypto_kx_seed_keypair](function.sodium-crypto-kx-seed-keypair.md)
- Опис
- [sodium_crypto_kx_server_session_keys](function.sodium-crypto-kx-server-session-keys.md)
- Обчислює ключі сесії на стороні сервера
- [sodium_crypto_pwhash_scryptsalsa208sha256_str_verify](function.sodium-crypto-pwhash-scryptsalsa208sha256-str-verify.md)
— Перевірити, що пароль є дійсним рядком перевірки
пароля
- [sodium_crypto_pwhash_scryptsalsa208sha256_str](function.sodium-crypto-pwhash-scryptsalsa208sha256-str.md)
— Отримати закодований в ASCII хеш
- [sodium_crypto_pwhash_scryptsalsa208sha256](function.sodium-crypto-pwhash-scryptsalsa208sha256.md)
— Отримує ключ із пароля, використовуючи scrypt
- [sodium_crypto_pwhash_str_needs_rehash](function.sodium-crypto-pwhash-str-needs-rehash.md)
— Визначає, чи потрібно повторно використовувати пароль
- [sodium_crypto_pwhash_str_verify](function.sodium-crypto-pwhash-str-verify.md)
- Перевіряє, що пароль відповідає хешу
- [sodium_crypto_pwhash_str](function.sodium-crypto-pwhash-str.md) -
Отримати ASCII-кодований хеш
- [sodium_crypto_pwhash](function.sodium-crypto-pwhash.md) -
Отримує ключ із пароля, використовуючи Argon2
- [sodium_crypto_scalarmult_base](function.sodium-crypto-scalarmult-base.md)
- Псевдонім sodium_crypto_box_publickey_from_secretkey
- [sodium_crypto_scalarmult_ristretto255_base](function.sodium-crypto-scalarmult-ristretto255-base.md)
— Обчислює відкритий ключ із закритого ключа
- [sodium_crypto_scalarmult_ristretto255](function.sodium-crypto-scalarmult-ristretto255.md)
- Обчислює загальний секрет
- [sodium_crypto_scalarmult](function.sodium-crypto-scalarmult.md) -
Обчислити загальний секрет на підставі секретного ключа користувача та
відкритого ключа іншого користувача
- [sodium_crypto_secretbox_keygen](function.sodium-crypto-secretbox-keygen.md)
— Створює випадковий ключ для sodium_crypto_secretbox
- [sodium_crypto_secretbox_open](function.sodium-crypto-secretbox-open.md)
— Розшифровка за допомогою загального ключа з автентичністю
- [sodium_crypto_secretbox](function.sodium-crypto-secretbox.md) -
Шифрування із загальним ключем з автентичністю
- [sodium_crypto_secretstream_xchacha20poly1305_init_pull](function.sodium-crypto-secretstream-xchacha20poly1305-init-pull.md)
- Ініціалізує контекст secretstream для дешифрування
- [sodium_crypto_secretstream_xchacha20poly1305_init_push](function.sodium-crypto-secretstream-xchacha20poly1305-init-push.md)
- Ініціалізує контекст secretstream для шифрування
- [sodium_crypto_secretstream_xchacha20poly1305_keygen](function.sodium-crypto-secretstream-xchacha20poly1305-keygen.md)
- Створює випадковий ключ secretstream
- [sodium_crypto_secretstream_xchacha20poly1305_pull](function.sodium-crypto-secretstream-xchacha20poly1305-pull.md)
— Розшифровує частину даних із зашифрованого потоку
- [sodium_crypto_secretstream_xchacha20poly1305_push](function.sodium-crypto-secretstream-xchacha20poly1305-push.md)
— Шифрує фрагмент даних, щоб його можна було безпечно.
розшифрувати в потоковому API
- [sodium_crypto_secretstream_xchacha20poly1305_rekey](function.sodium-crypto-secretstream-xchacha20poly1305-rekey.md)
- Явно повертає ключ у стан secretstream
- [sodium_crypto_shorthash_keygen](function.sodium-crypto-shorthash-keygen.md)
— Отримати випадкові байти для ключа
- [sodium_crypto_shorthash](function.sodium-crypto-shorthash.md) -
Обчислює короткий хеш повідомлення та ключ
- [sodium_crypto_sign_detached](function.sodium-crypto-sign-detached.md)
— Підписати повідомлення
- [sodium_crypto_sign_ed25519_pk_to_curve25519](function.sodium-crypto-sign-ed25519-pk-to-curve25519.md)
— Перетворення відкритого ключа системи Ed25519 на відкритий ключ
Curve25519
- [sodium_crypto_sign_ed25519_sk_to_curve25519](function.sodium-crypto-sign-ed25519-sk-to-curve25519.md)
— Перетворити секретний ключ із системи Ed25519 на секретний ключ
Curve25519
- [sodium_crypto_sign_keypair_from_secretkey_and_publickey](function.sodium-crypto-sign-keypair-from-secretkey-and-publickey.md)
— Об'єднує секретний ключ та відкритий ключ разом
- [sodium_crypto_sign_keypair](function.sodium-crypto-sign-keypair.md)
— Довільно згенерувати секретний ключ та відповідний
відкритий ключ
- [sodium_crypto_sign_open](function.sodium-crypto-sign-open.md) -
Перевірити, що підписане повідомлення має коректний підпис
- [sodium_crypto_sign_publickey_from_secretkey](function.sodium-crypto-sign-publickey-from-secretkey.md)
— Витягує відкритий ключ Ed25519 із секретного ключа
- [sodium_crypto_sign_publickey](function.sodium-crypto-sign-publickey.md)
— Витягує відкритий ключ Ed25519 із пари ключів
- [sodium_crypto_sign_secretkey](function.sodium-crypto-sign-secretkey.md)
— Витягує секретний ключ Ed25519 із пари ключів
- [sodium_crypto_sign_seed_keypair](function.sodium-crypto-sign-seed-keypair.md)
— Детерміноване виведення пари ключів з одного ключа
- [sodium_crypto_sign_verify_detached](function.sodium-crypto-sign-verify-detached.md)
— Перевірити підпис для повідомлення
- [sodium_crypto_sign](function.sodium-crypto-sign.md) — Підписати
повідомлення
- [sodium_crypto_stream_keygen](function.sodium-crypto-stream-keygen.md)
- Генерує випадковий ключ sodium_crypto_stream
- [sodium_crypto_stream_xchacha20_keygen](function.sodium-crypto-stream-xchacha20-keygen.md)
- Повертає безпечний випадковий ключ
- [sodium_crypto_stream_xchacha20_xor](function.sodium-crypto-stream-xchacha20-xor.md)
— Шифрує повідомлення, використовуючи одноразовий номер та секретний ключ
(без автентифікації)
- [sodium_crypto_stream_xchacha20](function.sodium-crypto-stream-xchacha20.md)
— Розширює ключ та одноразовий номер у ключовий потік
псевдовипадкових байтів
- [sodium_crypto_stream_xor](function.sodium-crypto-stream-xor.md) -
Шифрує повідомлення без автентифікації
- [sodium_crypto_stream](function.sodium-crypto-stream.md) — Створює
детерміновану послідовність байтів із початкового числа
- [sodium_hex2bin](function.sodium-hex2bin.md) — Декодує рядок у
шістнадцятковому поданні в бінарне
- [sodium_increment](function.sodium-increment.md) — Збільшити на
одиницю велике число
- [sodium_memcmp](function.sodium-memcmp.md) — Перевірка на рівність
за постійну кількість часу
- [sodium_memzero](function.sodium-memzero.md) — Перезаписує
рядок символами NULL
- [sodium_pad](function.sodium-pad.md) — Доповнює рядок відступами
- [sodium_unpad](function.sodium-unpad.md) — Видалення даних
відступів
