- [«mcrypt_enc_self_test](function.mcrypt-enc-self-test.md)
- [mcrypt_generic_deinit »](function.mcrypt-generic-deinit.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Шифрує текст із заданими параметрами

# mcrypt_encrypt

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_encrypt — Шифрує текст із заданими параметрами

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_encrypt**(
string `$cipher`,
string `$key`,
string `$data`,
string `$mode`,
string `$iv` u003d ?
): string\|false

Шифрує дані.

### Список параметрів

`cipher`
Одна з констант **`MCRYPT_ciphername`** або назва алгоритму у вигляді
рядки.

`key`
Ключ, з яким шифруватимуться дані. Якщо довжина ключа не
відповідає вимогою шифру, то буде повернено **`false`** та
видано попередження.

`data`
Дані, які будуть зашифровані за допомогою шифру `cipher` та режиму
`mode`. Якщо розмір даних не кратний розмір блоку, то вони будуть
доповнені символами ''''.

Розмір тексту, що повертається, може бути більше розміру вихідних даних
`data`.

`mode`
Одна з констант **`MCRYPT_MODE_modename`**, або одна з наступних
рядків: "ecb", "cbc", "cfb", "ofb", "nofb" та "stream".

`iv`
Використовується для ініціалізації в режимах CBC, CFB, OFB, а також
деяких алгоритмах у режимі STREAM. Якщо переданий IV розмір не
підтримується режимом зчеплення або IV не було передано, а режим
зчеплення його вимагає, функція згенерує попередження про помилку та
поверне **`false`**.

### Значення, що повертаються

Повертає рядок із зашифрованими даними або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mcrypt_encrypt()****

<?php    # --- ШИФРУВАННЯ ---     # ключ має представляти собою випадкову бінарну рядок. # Для преобразовангия строки в ключ используйте scrypt, bcrypt или PBKDF2    # Ключ задаётся в виде строки шестнадцатеричных чисел    $key u003d pack('H*', "bcb04b7e103a0cd8b54763051cef08bc55abe029fdebae5e1d417e2ffb2a00a3"); # Показуємо довжину ключа. Довжина ключа повинна бути 16, 24 або 32 байт для AES-128, 192 і 256 відповідно strlen ($ key); echo "Довжина ключа: " . $key_size . "
";    $plaintext u003d "This string was AES-256 / CBC / ZeroBytePadding encrypted.";    # Создаём случайный инициализирующий вектор используя режим CBC    $iv_size u003d mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);    $iv u003d mcrypt_create_iv($iv_size, MCRYPT_RAND);    # Создаём шифрованный текст совместимыс с AES (размер блока u003d 128)    # Подходит только для строк не заканчивающихся на 00h    # (потому как это символ дополнения по умолчанию)    $ciphertext u003d mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key,                                 $plaintext, MCRYPT_MODE_CBC, $iv); # Добавляем инициализирующий вектор в начало, чтобы он был доступен для расшифровки    $ciphertext u003d $iv . $ciphertext;    # перекодируем зашифрованный текст в base64    $ciphertext_base64 u003d base64_encode($ciphertext);    echo  $ciphertext_base64 . "
";    # u003du003du003d ВНИМАНИЕ u003du003du003d    # Результирующий шифрованный текст не имеет целостности или аутентичности и не    # защищён от атак padding oracle.    # --- ДЕШИФРОВКА ---    $ciphertext_dec u003d base64_decode($ciphertext_base64);    # Извлекаем инициализирующий вектор. Длина вектора ($iv_size) должна совпадать    # с тем, что возвращает функция mcrypt_get_iv_size()    $iv_dec u003d substr($ciphertext_dec, 0, $iv_size);    # Извлекаем зашифрованный текст    $ciphertext_dec u003d substr($ciphertext_dec, $iv_size);    # Отбрасываем завершающие символы 00h    $plaintext_dec u003d mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key,                                    $ciphertext_dec, MCRYPT_MODE_CBC, $iv_dec);    echo  $plaintext_dec . "
";?> `

Результат виконання цього прикладу:

Довжина ключа: 32
ENJW8mS2KaJoNB5E5CoSAAu0xARgsR1bdzFWpEn+poYw45q+73az5kYi4j+0haevext1dGrcW8Qi59txfCBV8BBj3bzRP3dFCp3CPQSJ8eUu003d
Цей рядок був AES-256 / CBC / ZeroBytePadding encrypted.

### Дивіться також

- [mcrypt_decrypt()](function.mcrypt-decrypt.md) - Розшифровує
дані із заданими параметрами
- [mcrypt_module_open()](function.mcrypt-module-open.md) - Відкриває
модуль шифрування з використанням вказаних алгоритму та режиму
