- [«
readline_callback_handler_remove](function.readline-callback-handler-remove.md)
- [readline_clear_history »](function.readline-clear-history.md)

- [PHP Manual](index.md)
- [Функції Readline](ref.readline.md)
- Читає символ та інформує callback-функцію readline, що отримана
рядок

#readline_callback_read_char

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

readline_callback_read_char — Читає символ та інформує
callback-функцію readline, що отримано рядок

### Опис

**readline_callback_read_char**(): void

Читає введений користувачем символ. Коли рядок отримано, цей
функція інформує callback-функцію інтерфейсу readline, задану з
допомогою
[readline_callback_handler_install()](function.readline-callback-handler-install.md),
що рядок готовий до введення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

Приклад використання інтерфейсу callback-функцій readline
сторінці опису функції
[readline_callback_handler_install()](function.readline-callback-handler-install.md).

### Дивіться також

- [readline_callback_handler_install()](function.readline-callback-handler-install.md) -
Ініціалізує callback-інтерфейс readline та термінал, друкує
рядок запрошення та негайно повертає управління
- [readline_callback_handler_remove()](function.readline-callback-handler-remove.md) -
Видаляє раніше зареєстровану callback-функцію та відновлює
термінал
