- [«
mcrypt_enc_get_supported_key_sizes](function.mcrypt-enc-get-supported-key-sizes.md)
- [mcrypt_enc_is_block_algorithm
»](function.mcrypt-enc-is-block-algorithm.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Перевіряє, чи використовується блоковий режим

# mcrypt_enc_is_block_algorithm_mode

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_enc_is_block_algorithm_mode — Перевіряє, чи використовується блоковий
режим

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_enc_is_block_algorithm_mode**(resource `$td`): bool

Перевіряє, чи використовується блоковий режим (іншими словами, **`false`**
для потоків і **`true`** для cbc, cfb, ofb).

### Список параметрів

`td`
Дескриптор шифрування.

### Значення, що повертаються

Повертає **`true`**, якщо використовується блоковий режим та **`false`**,
якщо ні.
