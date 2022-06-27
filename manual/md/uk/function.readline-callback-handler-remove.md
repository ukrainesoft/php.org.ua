- [«
readline_callback_handler_install](function.readline-callback-handler-install.md)
- [readline_callback_read_char
»](function.readline-callback-read-char.md)

- [PHP Manual](index.md)
- [Функції Readline](ref.readline.md)
- Видаляє раніше зареєстровану callback-функцію та відновлює
термінал

#readline_callback_handler_remove

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

readline_callback_handler_remove — Видаляє зареєстровану раніше
callback-функцію та відновлює термінал

### Опис

**readline_callback_handler_remove**(): bool

Видаляє раніше зареєстровану callback-функцію та відновлює
налаштування терміналу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо видалення пройшло успішно або **`false`**,
якщо видаляти нічого.

### Приклади

Приклад використання інтерфейсу callback-функцій readline
сторінці опису функції
[readline_callback_handler_install()](function.readline-callback-handler-install.md).

### Дивіться також

- [readline_callback_handler_install()](function.readline-callback-handler-install.md) -
Ініціалізує callback-інтерфейс readline та термінал, друкує
рядок запрошення та негайно повертає управління
- [readline_callback_read_char()](function.readline-callback-read-char.md) -
Читає символ та інформує callback-функцію readline, що отримана
рядок
