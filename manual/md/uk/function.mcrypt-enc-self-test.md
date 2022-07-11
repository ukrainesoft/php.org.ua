- [« mcrypt_enc_is_block_mode](function.mcrypt-enc-is-block-mode.md)
- [mcrypt_encrypt »](function.mcrypt-encrypt.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Запуск самоперевірки відкритого модуля

# mcrypt_enc_self_test

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_enc_self_test — Запуск самоперевірки відкритого модуля

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_enc_self_test**(resource `$td`): int

Функція запускає самоперевірку алгоритму, заданого дескриптором
шифрування `td`.

### Список параметрів

`td`
Дескриптор шифрування.

### Значення, що повертаються

Повертає `0` у разі успішного виконання та негативне int в
інакше.
