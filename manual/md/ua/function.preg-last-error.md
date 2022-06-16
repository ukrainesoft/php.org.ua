- [« preg_last_error_msg](function.preg-last-error-msg.md)
- [preg_match_all »](function.preg-match-all.md)

- [PHP Manual](index.md)
- [Функції PCRE](ref.pcre.md)
- Повертає код помилки виконання останнього регулярного виразу
PCRE

# preg_last_error

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

preg_last_error — Повертає код помилки виконання останнього
регулярного вираження PCRE

### Опис

**preg_last_error**(): int

Повертає код помилки виконання останнього регулярного виразу PCRE.

**Приклад #1 Приклад використання **preg_last_error()****

`<?phppreg_match('/(?:\D+|<\d+>)*[!?]/', 'foobar foobar foobar');if (preg_last_error() u003du003d PREG_BACKTRACK_LIMIT_ERROR)тих і      !';}?> `

Результат виконання цього прикладу:

Було вичерпано ліміт зворотних посилань!

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає одну з наступних констант ([описаних на окремій
сторінці.](pcre.constants.md)):

- **`PREG_NO_ERROR`**
- **`PREG_INTERNAL_ERROR`**
- **`PREG_BACKTRACK_LIMIT_ERROR`** (дивіться також
[pcre.backtrack_limit](pcre.configuration.md#ini.pcre.backtrack-limit))
- **`PREG_RECURSION_LIMIT_ERROR`** (дивіться також
[pcre.recursion_limit](pcre.configuration.md#ini.pcre.recursion-limit))
- **`PREG_BAD_UTF8_ERROR`**
- **`PREG_BAD_UTF8_OFFSET_ERROR`**
- **`PREG_JIT_STACKLIMIT_ERROR`**

### Дивіться також

- [preg_last_error_msg()](function.preg-last-error-msg.md) -
Повертає повідомлення про помилку останньої запущеної функції PCRE
