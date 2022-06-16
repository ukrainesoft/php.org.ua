- [«
mcrypt_module_get_algo_key_size](function.mcrypt-module-get-algo-key-size.md)
- [mcrypt_module_is_block_algorithm_mode
»](function.mcrypt-module-is-block-algorithm-mode.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Повертає список підтримуваних розмірів ключів для відкритого
алгоритму

# mcrypt_module_get_supported_key_sizes

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_module_get_supported_key_sizes — Повертає список підтримуваних
розмірів ключів для відкритого алгоритму

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_module_get_supported_key_sizes**(string `$algorithm`, string
`$lib_dir` u003d ?): array

Повертає список підтримуваних розмірів ключів для відкритого
алгоритму. Якщо повернутий порожній масив, то підтримується будь-яка
довжина ключа від 1 до значення, що повертається
[mcrypt_module_get_algo_key_size()](function.mcrypt-module-get-algo-key-size.md).

### Список параметрів

`algorithm`
Використовуваний алгоритм.

`lib_dir`
Опціональний параметр `lib_dir`, в якому можна вказати директорію,
містить модуль алгоритму.

### Значення, що повертаються

Повертає список підтримуваних розмірів ключів для відкритого
алгоритму. Якщо повернутий порожній масив, то підтримується будь-яка
довжина ключа від 1 до значення, що повертається
[mcrypt_module_get_algo_key_size()](function.mcrypt-module-get-algo-key-size.md).

### Дивіться також

- [mcrypt_enc_get_supported_key_sizes()](function.mcrypt-enc-get-supported-key-sizes.md) -
Повертає масив із допустимими розмірами ключа для використовуваного
алгоритму
