- [«
mcrypt_module_get_algo_block_size](function.mcrypt-module-get-algo-block-size.md)
- [mcrypt_module_get_supported_key_sizes
»](function.mcrypt-module-get-supported-key-sizes.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Повертає максимальний розмір ключа відкритого режиму

# mcrypt_module_get_algo_key_size

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_module_get_algo_key_size — Повертає максимальний розмір ключа
відкритого режиму

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_module_get_algo_key_size**(string `$algorithm`, string
`$lib_dir` u003d ?): int

Повертає максимальний розмір відкритого режиму.

### Список параметрів

`algorithm`
Ім'я алгоритму.

`lib_dir`
Опціональний параметр, в якому можна вказати директорію, що містить
модуль режиму.

### Значення, що повертаються

Повертає максимальну довжину ключа у байтах для зазначеного алгоритму.
