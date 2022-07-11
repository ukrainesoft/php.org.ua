- [«
mcrypt_enc_get_modes_name](function.mcrypt-enc-get-modes-name.md)
- [mcrypt_enc_is_block_algorithm_mode
»](function.mcrypt-enc-is-block-algorithm-mode.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Повертає масив із допустимими розмірами ключа для використовуваного
алгоритму

# mcrypt_enc_get_supported_key_sizes

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_enc_get_supported_key_sizes — Повертає масив із допустимими
розмірами ключа для алгоритму

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_enc_get_supported_key_sizes**(resource `$td`): array

Повертає масив із допустимими розмірами ключа для використовуваного
алгоритму.

### Список параметрів

`td`
Дескриптор шифрування.

### Значення, що повертаються

Повертає масив із допустимими розмірами ключа для використовуваного
алгоритму. Якщо допустимі будь-які розміри від 1 до
[mcrypt_enc_get_key_size()](function.mcrypt-enc-get-key-size.md), то
повертається порожній масив.

### Приклади

**Приклад #1 Приклад використання
**mcrypt_enc_get_supported_key_sizes()****

`<?php   $td u003d mcrypt_module_open('rijndael-256', '', 'ecb', ''); var_dump(mcrypt_enc_get_supported_key_sizes($td));?> `

Результат виконання цього прикладу:

array(3) {
[0]u003d>
int(16)
[1]u003d>
int(24)
[2]u003d>
int(32)
}
