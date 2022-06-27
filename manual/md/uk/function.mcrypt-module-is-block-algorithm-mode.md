- [«
mcrypt_module_get_supported_key_sizes](function.mcrypt-module-get-supported-key-sizes.md)
- [mcrypt_module_is_block_algorithm
»](function.mcrypt-module-is-block-algorithm.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Перевіряє, чи є заданий модуль блоковим чи ні

# mcrypt_module_is_block_algorithm_mode

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_module_is_block_algorithm_mode — Перевіряє, чи заданий
модуль блоковим чи ні

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_module_is_block_algorithm_mode**(string `$mode`, string
`$lib_dir` u003d ?): bool

Функція повертає **`true`**, якщо режим використовується з блоковими
алгоритмами, інакше повертає **`false`**. (тобто **`false`** для
потокових і **`true`** для cbc, cfb, ofb).

### Список параметрів

`mode`
Режим, який перевірятиметься.

`lib_dir`
Опціональний параметр `lib_dir`, в якому можна вказати директорію,
містить модуль алгоритму.

### Значення, що повертаються

Функція повертає **`true`**, якщо режим використовується з блоковими
алгоритмами, інакше повертає **`false`**. (тобто **`false`** для
потокових і **`true`** для cbc, cfb, ofb).
