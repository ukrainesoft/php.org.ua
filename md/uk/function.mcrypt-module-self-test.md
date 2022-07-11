- [«mcrypt_module_open](function.mcrypt-module-open.md)
- [mdecrypt_generic »](function.mdecrypt-generic.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Функція запускає самоперевірку вказаного модуля

# mcrypt_module_self_test

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_module_self_test — Функція запускає самоперевірку вказаного
модуля

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_module_self_test**(string `$algorithm`, string `$lib_dir` u003d ?):
bool

Ця функція запускає самоперевірку вказаного алгоритму.

### Список параметрів

`algorithm`
Одна з констант **`MCRYPT_ciphername`** або назва алгоритму у вигляді
рядки.

`lib_dir`
Опціональний параметр `lib_dir`, в якому можна вказати директорію,
містить модуль алгоритму.

### Значення, що повертаються

Ця функція повертає **`true`** якщо самоперевірка завершилася успішно
і **`false`**, якщо ні.

### Приклади

**Приклад #1 Приклад використання **mcrypt_module_self_test()****

` <?phpvar_dump(mcrypt_module_self_test(MCRYPT_RIJNDAEL_128)) . "
";var_dump(mcrypt_module_self_test(MCRYPT_BOGUS_CYPHER));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
