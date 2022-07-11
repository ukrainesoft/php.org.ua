- [«openlog](function.openlog.md)
- [setcookie »] (function.setcookie.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Відкриває постійне з'єднання з інтернет-сокетом чи доменним
сокетом Unix

# pfsockopen

(PHP 4, PHP 5, PHP 7, PHP 8)

pfsockopen — Відкриває постійне з'єднання з інтернет-сокетом або
доменним сокетом Unix

### Опис

**pfsockopen**(
string `$hostname`,
int `$port` u003d -1,
int `&$error_code` u003d **`null`**,
string `&$error_message` u003d **`null`**,
?float `$timeout` u003d **`null`**
): resource \ | false

Ця функція є повним аналогом функції
[fsockopen()](function.fsockopen.md) з тією лише різницею, що
з'єднання не закривається після завершення роботи скрипта. Це версія
функції [fsockopen()](function.fsockopen.md) з можливістю
постійного підключення.

### Список параметрів

Для отримання інформації про параметр дивіться документацію по
[fsockopen()](function.fsockopen.md).

### Значення, що повертаються

**pfsockopen()** повертає файловий покажчик, який можна
використовувати з функціями, що працюють із файлами (такі як
[fgets()](function.fgets.md), [fgetss()](function.fgetss.md),
[fwrite()](function.fwrite.md), [fclose()](function.fclose.md) та
[feof()](function.feof.md)) або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---|
| 8.0.0 | `timeout` тепер допускає значення null. |

### Дивіться також

- [fsockopen()](function.fsockopen.md) - Відкриває з'єднання з
інтернет-сокетом або доменним сокетом Unix
