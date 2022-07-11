- [«mcrypt_module_close](function.mcrypt-module-close.md)
- [mcrypt_module_get_algo_key_size
»](function.mcrypt-module-get-algo-key-size.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Повертає розмір блоку вказаного алгоритму

# mcrypt_module_get_algo_block_size

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_module_get_algo_block_size — Повертає розмір блоку вказаного
алгоритму

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_module_get_algo_block_size**(string `$algorithm`, string
`$lib_dir` u003d ?): int

Повертає розмір блоку вказаного алгоритму.

### Список параметрів

`algorithm`
Ім'я алгоритму.

`lib_dir`
Опціональний параметр, в якому можна вказати директорію, що містить
модуль режиму.

### Значення, що повертаються

Повертає розмір блоку вказаного алгоритму в байтах.
