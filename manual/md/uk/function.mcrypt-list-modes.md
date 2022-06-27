- [«mcrypt_list_algorithms](function.mcrypt-list-algorithms.md)
- [mcrypt_module_close »](function.mcrypt-module-close.md)

- [PHP Manual](index.md)
- [Mcrypt](ref.mcrypt.md)
- Отримати список усіх підтримуваних режимів шифрування

# mcrypt_list_modes

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7 \< 7.2.0, PECL mcrypt \>u003d 1.0.0)

mcrypt_list_modes — Отримати список усіх підтримуваних режимів
шифрування

**Увага**

Ця функція оголошена *УСТАРНІЙ*, починаючи з PHP 7.1.0 і була *Видалена*
у версії PHP 7.2.0. Використовувати цю функцію не рекомендується.

### Опис

**mcrypt_list_modes**(string `$lib_dir` u003d ini_get("mcrypt.modes_dir")):
array

Отримати список усіх режимів шифрування з директорії `lib_dir`.

### Список параметрів

`lib_dir`
Вказує директорію, де розташовані режими. Якщо не поставлено, то
буде використано значення директиви `mcrypt.modes_dir` з `php.ini`.

### Значення, що повертаються

Повертає масив підтримуваних режимів.

### Приклади

**Приклад #1 Приклад використання **mcrypt_list_modes()****

` <?php   $modes u003d mcrypt_list_modes(); foreach ($modes as $mode) {        echo "$mode <br />
";    }?> `

Приклад вище демонструє отримання списку всіх алгоритмів директорії
за замовчуванням. Якщо директива `php.ini` `mcrypt.modes_dir` не задана, то
буде використана директорія mcrypt за замовчуванням
(`/usr/local/lib/libmcrypt`).
