- [«
mcrypt_enc_is_block_algorithm_mode](function.mcrypt-enc-is-block-algorithm-mode.md)
- [mcrypt_enc_is_block_mode »](function.mcrypt-enc-is-block-mode.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Перевіряє, чи використовує алгоритм блокові режими

# mcrypt_enc_is_block_algorithm

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_enc_is_block_algorithm — Перевіряє, чи використовує алгоритм
блокові режими

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_enc_is_block_algorithm**(resource `$td`): bool

Перевіряє, чи алгоритм використовує блокові режими.

### Список параметрів

`td`
Дескриптор шифрування.

### Значення, що повертаються

Повертає **`true`**, якщо алгоритм є блоковим або **`false`**,
якщо потоковий.
