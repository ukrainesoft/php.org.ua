- [«
mcrypt_enc_is_block_algorithm](function.mcrypt-enc-is-block-algorithm.md)
- [mcrypt_enc_self_test »](function.mcrypt-enc-self-test.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Перевіряє, чи поточний режим повертає блоки

# mcrypt_enc_is_block_mode

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_enc_is_block_mode — Перевіряє, чи поточний режим повертає блоки

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_enc_is_block_mode**(resource `$td`): bool

Перевіряє, чи повертає поточний режим блоки (тобто **`true`** для cbc та
ecb, і **`false`** для cfb та потоку).

### Список параметрів

`td`
Дескриптор шифрування.

### Значення, що повертаються

Повертає **`true`**, якщо використовуваний режим повертає блоки та
**`false`**, якщо повертає байти.
