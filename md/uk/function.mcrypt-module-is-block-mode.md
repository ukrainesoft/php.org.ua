- [«
mcrypt_module_is_block_algorithm](function.mcrypt-module-is-block-algorithm.md)
- [mcrypt_module_open »](function.mcrypt-module-open.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Перевірити, чи повертає зазначений режим дані блоками чи ні

# mcrypt_module_is_block_mode

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_module_is_block_mode — Перевірити, чи повертається вказаний режим
дані блоками чи ні

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_module_is_block_mode**(string `$mode`, string `$lib_dir` u003d ?):
bool

Функція повертає **`true`**, якщо дані повертаються блоками та
**`false`**, якщо побайтно. (тобто **`true`** для cbc та ecb, та
**`false`** для cfb та потоку).

### Список параметрів

`mode`
Одна з констант **`MCRYPT_MODE_modename`**, або одна з наступних
рядків: "ecb", "cbc", "cfb", "ofb", "nofb" та "stream".

`lib_dir`
Опціональний параметр `lib_dir`, в якому можна вказати директорію,
містить модуль алгоритму.

### Значення, що повертаються

Функція повертає **`true`**, якщо дані повертаються блоками та
**`false`** якщо побайтно. (тобто **`true`** для cbc та ecb, та
**`false`** для cfb та потоку).
