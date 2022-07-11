- [«addcslashes](function.addcslashes.md)
- [bin2hex »](function.bin2hex.md)

- [PHP Manual](index.md)
- [Функції для роботи з рядками](ref.strings.md)
- Екранує рядок за допомогою слішів

# addslashes

(PHP 4, PHP 5, PHP 7, PHP 8)

addslashes — Екранує рядок за допомогою слішів

### Опис

**addslashes**(string `$string`): string

Повертає рядок зі зворотним слішем перед символами, які потрібно
екранувати. Екрануються такі символи:

- одинарна лапка (```)
- подвійна лапка (````)
- зворотний сліш (`\`)
- NUL (байт **`null`**)

Невеликий приклад використання функції **addslashes()** для
екранування перелічених вище символів:

` <?php$stru003du003d"O'Reilly?";eval("echo '" . addslashes($str) . "';");?> `

Іноді функцію **addslashes()** некоректно намагаються використовувати для
запобігання [SQL-ін'єкцій](security.database.sql-injection.md). Не
робіть так. Замість неї використовуйте підготовлені запити чи функції
екранування відповідних модулів роботи з базами даних

### Список параметрів

`string`
Рядок, що екранується.

### Значення, що повертаються

Повертає рядок, що екранується.

### Приклади

**Приклад #1 Приклад використання **addslashes()****

`<?php$stru003du003d"Ваше ім'я O'Reilly?";// виводить: Ваше ім'яO'Reilly?echo addslashes($str);?> `

### Дивіться також

- [stripcslashes()](function.stripcslashes.md) - Видаляє
екранування символів, зроблене функцією addcslashes
- [stripslashes()](function.stripslashes.md) - Видаляє екранування
символів
- [addcslashes()](function.addcslashes.md) - Екранує рядок
слішами в стилі мови C
- [htmlspecialchars()](function.mdspecialchars.md) - Перетворює
спеціальні символи в HTML-сутності
- [quotemeta()](function.quotemeta.md) - Екранує спеціальні
символи
- [get_magic_quotes_gpc()](function.get-magic-quotes-gpc.md) -
Отримання поточного значення конфігурації magic_quotes_gpc
