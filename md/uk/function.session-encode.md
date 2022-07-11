- [« session_destroy](function.session-destroy.md)
- [session_gc »](function.session-gc.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- Кодує дані поточної сесії у форматі рядка сесії

# session_encode

(PHP 4, PHP 5, PHP 7, PHP 8)

session_encode — Кодує дані поточної сесії у форматі рядка сесії

### Опис

**session_encode**(): string\|false

**session_encode()** повертає серіалізований рядок, що містить
дані поточної сесії, що зберігаються в суперглобальному масиві $\_SESSION.

За замовчуванням використовується внутрішній метод серіалізації PHP та результат
буде відрізнятися від формату, що повертається функцією
[serialize()](function.serialize.md). Метод серіалізації може бути
встановлений за допомогою
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовані дані поточної сесії або **`false`**
у разі виникнення помилки.

### Примітки

**Увага**

Необхідно викликати функцію
[session_start()](function.session-start.md) перед використанням
**session_encode()**.

### Дивіться також

- [session_decode()](function.session-decode.md) - Декодує дані
сесії із закодованого рядка сесії
- [session.serialize_handler](session.configuration.md#ini.session.serialize-handler)
