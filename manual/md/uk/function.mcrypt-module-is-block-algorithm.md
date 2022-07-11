- [«
mcrypt_module_is_block_algorithm_mode](function.mcrypt-module-is-block-algorithm-mode.md)
- [mcrypt_module_is_block_mode
»](function.mcrypt-module-is-block-mode.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Перевіряє, чи заданий алгоритм є блоковим чи ні

# mcrypt_module_is_block_algorithm

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_module_is_block_algorithm — Перевіряє, чи заданий
алгоритм блоковий чи ні

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_module_is_block_algorithm**(string `$algorithm`, string
`$lib_dir` u003d ?): bool

Функція повертає **`true`**, якщо алгоритм блокований, інакше повертає
**`false`** (струмовий).

### Список параметрів

`algorithm`
Алгоритм для перевірки

`lib_dir`
Опціональний параметр `lib_dir`, в якому можна вказати директорію,
містить модуль алгоритму.

### Значення, що повертаються

Функція повертає **`true`**, якщо алгоритм блокований, інакше повертає
**`false`** (струмовий).
