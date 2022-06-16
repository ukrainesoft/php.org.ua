- [«mcrypt_encrypt](function.mcrypt-encrypt.md)
- [mcrypt_generic_init »](function.mcrypt-generic-init.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Ця функція деініціалізує модуль шифрування

# mcrypt_generic_deinit

(PHP 4 \>u003d 4.0.7, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_generic_deinit — Ця функція деініціалізує модуль шифрування

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_generic_deinit**(resource `$td`): bool

Ця функція перериває шифрування, задане дескриптором шифрування
(`td`). Вона очищає всі буфери, але не закриває модуль. Для закриття
модуля ви повинні самостійно викликати
[mcrypt_module_close()](function.mcrypt-module-close.md), або він
буде автоматично закрито після завершення роботи скрипта.

### Список параметрів

`td`
Дескриптор шифрування.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [mcrypt_module_open()](function.mcrypt-module-open.md) - Відкриває
модуль шифрування з використанням вказаних алгоритму та режиму
- [mcrypt_generic_init()](function.mcrypt-generic-init.md) - Функція
ініціалізує всі буфери, необхідні для шифрування
