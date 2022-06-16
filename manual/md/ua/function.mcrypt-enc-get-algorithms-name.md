- [«mcrypt_decrypt](function.mcrypt-decrypt.md)
- [mcrypt_enc_get_block_size
»](function.mcrypt-enc-get-block-size.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Повертає ім'я алгоритму

# mcrypt_enc_get_algorithms_name

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_enc_get_algorithms_name — Повертає ім'я алгоритму

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_enc_get_algorithms_name**(resource `$td`): string

Ця функція повертає назву алгоритму.

### Список параметрів

`td`
Дескриптор шифрування.

### Значення, що повертаються

Повертає ім'я відкритого алгоритму у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання **mcrypt_enc_get_algorithms_name()****

` <?php$td u003d mcrypt_module_open(MCRYPT_CAST_256, '', MCRYPT_MODE_CFB, '');echo mcrypt_enc_get_algorithms_name($td). "
";$tdu003du003dmcrypt_module_open('cast-256', '', MCRYPT_MODE_CFB, '');echo mcrypt_enc_get_algorithms_name($td). "
";?> `

Результат виконання цього прикладу:

CAST-256
CAST-256
