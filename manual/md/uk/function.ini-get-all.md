- [«ini_alter](function.ini-alter.md)
- [ini_get »](function.ini-get.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримує всі налаштування конфігурації

#ini_get_all

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

ini_get_all — Отримує всі налаштування конфігурації

### Опис

**ini_get_all**(?string `$extension` u003d **`null`**, bool `$details` u003d
**`true`**): array\|false

Повертає всі зареєстровані конфігураційні установки.

### Список параметрів

`extension`
Необов'язкове ім'я модуля. Якщо не **`null`** і не рядок (string)
`core`, функція повертає лише параметри.

`details`
Виводити детальні відомості про налаштування або лише поточні значення. за
замовчуванням **`true`** (виводити детальні відомості).

### Значення, що повертаються

Повертає асоціативний масив з іменами директив як ключі.
Повертає **`false`** та викликає помилку рівня **`E_WARNING`**, якщо
'extension' не існує.

Якщо `details` дорівнює **`true`** (за замовчуванням), у масиві будуть
утримуватися `global_value` (значення налаштування `php.ini`), `local_value`
(наприклад, задане за допомогою [ini_set()](function.ini-set.md) або
`.htaccess`) та `access` (рівень доступу).

Якщо `details` дорівнює **`false`**, значенням масиву буде
поточне значення налаштування.

Дивіться відповідний [розділ
керівництва](configuration.changes.modes.md), в якому наводиться
опис рівнів доступу

> **Примітка**:
>
> Директива може мати кілька рівнів доступу, у цьому випадку
> `access` міститиме відповідну бітову маску.

### Приклади

**Приклад #1 Приклади використання **ini_get_all()****

` <?phpprint_r(ini_get_all("pcre"));print_r(ini_get_all());?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[pcre.backtrack_limit] u003d> Array
(
[global_value] u003d> 100000
[local_value] u003d> 100000
[access] u003d> 7
)

[pcre.recursion_limit] u003d> Array
(
[global_value] u003d> 100000
[local_value] u003d> 100000
[access] u003d> 7
)

)
Array
(
[allow_call_time_pass_reference] u003d> Array
(
[global_value] u003d> 0
[local_value] u003d> 0
[access] u003d> 6
)

[allow_url_fopen] u003d> Array
(
[global_value] u003d> 1
[local_value] u003d> 1
[access] u003d> 4
)

...

)

**Приклад #2 Відключення `details`**

`<?phpprint_r(ini_get_all("pcre", false)); // Додано в PHP 5.3.0print_r(ini_get_all(null, false)); // Додано в PHP 5.3.0?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[pcre.backtrack_limit] u003d> 100000
[pcre.recursion_limit] u003d> 100000
)
Array
(
[allow_call_time_pass_reference] u003d> 0
[allow_url_fopen] u003d> 1
...
)

### Примітки

> **Примітка**:
>
> **ini_get_all()** ігнорує опції типу "масив", такі як pdo.dsn.\*.

### Дивіться також

- [Як змінити конфігураційні установки](configuration.changes.md)
- [ini_get()](function.ini-get.md) - Отримує значення налаштування
конфігурації
- [ini_restore()](function.ini-restore.md) - Відновлює
значення налаштування конфігурації
- [ini_set()](function.ini-set.md) - Встановлює значення
налаштування конфігурації
- [get_loaded_extensions()](function.get-loaded-extensions.md) -
Повертає масив імен усіх скомпілованих та завантажених модулів
- [phpinfo()](function.phpinfo.md) - Виводить інформацію про поточну
конфігурації PHP
- [ReflectionExtension::getINIEntries()](reflectionextension.getinientries.md) -
Отримання ini-налаштувань модуля
