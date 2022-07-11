- [« session_create_id](function.session-create-id.md)
- [session_destroy »](function.session-destroy.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- декодує дані сесії із закодованого рядка сесії

# session_decode

(PHP 4, PHP 5, PHP 7, PHP 8)

session_decode — Декодує дані сесії із закодованого рядка
сесії

### Опис

**session_decode**(string `$data`): bool

**session_decode()** декодує серіалізовані дані сесії,
передані в $data і заповнює суперглобальний масив $\_SESSION
отриманим результатом.

За замовчуванням використовується внутрішній метод десеріалізації PHP, та
результат буде відрізнятися від формату, що повертається функцією
[unserialize()](function.unserialize.md). Метод серіалізації може
бути встановлений за допомогою
[session.serialize_handler](session.configuration.md#ini.session.serialize-handler).

### Список параметрів

`data`
Закодовані дані, які потрібно зберегти.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [session_encode()](function.session-encode.md) - Кодує дані
поточної сесії у форматі рядка сесії
- [session.serialize_handler](session.configuration.md#ini.session.serialize-handler)
