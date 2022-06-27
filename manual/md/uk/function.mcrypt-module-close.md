- [«mcrypt_list_modes](function.mcrypt-list-modes.md)
- [mcrypt_module_get_algo_block_size
»](function.mcrypt-module-get-algo-block-size.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Закриває модуль mcrypt

#mcrypt_module_close

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_module_close — Закриває модуль mcrypt

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_module_close**(resource `$td`): bool

Закриває цей обробник шифрування.

### Список параметрів

`td`
Дескриптор шифрування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [mcrypt_module_open()](function.mcrypt-module-open.md) - Відкриває
модуль шифрування з використанням вказаних алгоритму та режиму
