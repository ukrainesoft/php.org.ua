- [«
mcrypt_module_is_block_mode](function.mcrypt-module-is-block-mode.md)
- [mcrypt_module_self_test »](function.mcrypt-module-self-test.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Відкриває модуль шифрування з використанням зазначених алгоритмів та
режиму

#mcrypt_module_open

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_module_open — Відкриває модуль шифрування за допомогою
вказаних алгоритму та режиму

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_module_open**(
string `$algorithm`,
string `$algorithm_directory`,
string `$mode`,
string `$mode_directory`
): resource

Відкриває модуль шифрування з використанням зазначених алгоритмів та
режиму. Ім'я алгоритму задається його ім'ям, наприклад ``twofish'`, або з
за допомогою константи **`MCRYPT_ciphername`**. Закрити модуль можна з
допомогою функції
[mcrypt_module_close()](function.mcrypt-module-close.md).

### Список параметрів

`algorithm`
Одна з констант **`MCRYPT_ciphername`** або назва алгоритму у вигляді
рядки.

`algorithm_directory`
Параметр `algorithm_directory` використовується для завдання місцезнаходження
модуля шифрування Якщо передати порожній рядок, то (`````), то буде
використано значення директиви `mcrypt.algorithms_dir` з `php.ini`.
Якщо ж воно теж не задано, то буде використано стандартну директорію
з якою компілювався libmcrypt (зазвичай `/usr/local/lib/libmcrypt`).

`mode`
Одна з констант **`MCRYPT_MODE_modename`**, або одна з наступних
рядків: "ecb", "cbc", "cfb", "ofb", "nofb" та "stream".

`mode_directory`
Параметр `mode_directory` використовується для завдання місцезнаходження
модуля режиму Якщо передати порожній рядок, то (`````), то буде
використано значення директиви `mcrypt.modes_dir` з `php.ini`. Якщо ж
воно теж не задано, то буде використано стандартну директорію, з
якою компілювався libmcrypt (зазвичай `/usr/local/lib/libmcrypt`).

### Значення, що повертаються

Зазвичай повертається дескриптор шифрування або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mcrypt_module_open()****

` <?php   $td u003d mcrypt_module_open(MCRYPT_DES, '',       MCRYPT_MODE_ECB, '/usr/lib/mcrypt-modes'); $tdu003d mcrypt_module_open('rijndael-256', '', 'ofb', '');?> `

У першому рядку прикладу ми намагаємося відкрити шифр `DES` з директорії з
замовчуванням та використовувати режим `ECB` з директорії
`/usr/lib/mcrypt-modes`. У другому прикладі використовуємо рядкові імена
шифру та режиму, що працює тільки з модулем, зібраним з бібліотекою
libmcrypt 2.4.x або 2.5.x.

**Приклад #2 Приклад використання **mcrypt_module_open()****

`<?php    /* Відкриваємо модуль шифрування */    $td u003d mcrypt_module_open('rijndael-256', '', 'ofb', ''); /* Створюємо ініціалізуючий вектор і визначаємо довжину ключа. * Для Windows  використовуємо MCRYPT_RAND */    $iv u003d mcrypt_create_iv(mcrypt_enc_get_iv_size($td), MCRYPT_DEV_RANDOM); $ks u003d mcrypt_enc_get_key_size($td); /* Створюємо ключ */    $key u003d substr(md5('very secret key'), 0, $ks); /* Ініціалізуємо шифрування */   mcrypt_generic_init($td, $key, $iv); /* Шифруємо дані */    $encryptedu003du003dmcrypt_generic($td, 'This is very important data'); /* Деинициализируем обробник шифрування */   mcrypt_generic_deinit($td); /* Ініціалізуємо модуль дешифрування */   mcrypt_generic_init($td, $key, $iv); /* Дешифруємо дані */    $decrypted u003d mdecrypt_generic($td, $encrypted); /* Деініціалізуємо обробник дешифровки і закриваємо модуль */    mcrypt_generic_deinit($td); mcrypt_module_close($td); /* Друкуємо рядок */    echo trim($decrypted) . "
";?> `

### Дивіться також

- [mcrypt_module_close()](function.mcrypt-module-close.md) -
Закриває модуль mcrypt
- [mcrypt_generic()](function.mcrypt-generic.md) - Функція шифрує
дані
- [mdecrypt_generic()](function.mdecrypt-generic.md) - Дешифрування
даних
- [mcrypt_generic_init()](function.mcrypt-generic-init.md) - Функція
ініціалізує всі буфери, необхідні для шифрування
- [mcrypt_generic_deinit()](function.mcrypt-generic-deinit.md) - Ця
функція деініціалізує модуль шифрування
