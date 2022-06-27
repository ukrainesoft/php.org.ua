- [«stomp_connect_error](function.stomp-connect-error.md)
- [Stomp »](class.stomp.md)

- [PHP Manual](index.md)
- [Функції Stomp](ref.stomp.md)
- Повертає поточну версію модуля Stomp

#stomp_version

(PECL stomp \>u003d 0.1.0)

stomp_version — Повертає поточну версію модуля Stomp

### Опис

**stomp_version**(): string

Повертає рядок, який містить версію поточного модуля Stomp.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає поточну версію модуля Stomp

### Приклади

**Приклад #1 Приклад використання **stomp_version()****

` <?phpvar_dump(stomp_version());?> `

Результатом виконання цього прикладу буде щось подібне:

string(5) "0.2.0"
