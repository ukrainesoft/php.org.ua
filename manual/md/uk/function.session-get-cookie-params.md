- [« session_gc](function.session-gc.md)
- [session_id »](function.session-id.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- Повертає параметри cookie сесії

# session_get_cookie_params

(PHP 4, PHP 5, PHP 7, PHP 8)

session_get_cookie_params — Повертає параметри cookie сесії

### Опис

**session_get_cookie_params**(): array

Повертає параметри cookie сесії.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив з інформацією про cookie поточної сесії, який
містить такі елементи:

-
["lifetime"](session.configuration.md#ini.session.cookie-lifetime) -
час життя cookie за секунди.
- ["path"](session.configuration.md#ini.session.cookie-path) -
шлях, де розміщена інформація, що зберігається.
- ["domain"](session.configuration.md#ini.session.cookie-domain) -
домен cookie.
- ["secure"](session.configuration.md#ini.session.cookie-secure) -
cookie повинні передаватись лише через безпечні з'єднання.
-
["httponly"](session.configuration.md#ini.session.cookie-httponly) -
cookie можуть бути доступні лише за протоколом HTTP.
-
["samesite"](session.configuration.md#ini.session.cookie-samesite) -
керує міждоменною відправкою cookie.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------|
| 7.3.0 | Доданий елемент "samesite" у масив, що повертається. |

### Дивіться також

- [session.cookie_lifetime](session.configuration.md#ini.session.cookie-lifetime)
- [session.cookie_path](session.configuration.md#ini.session.cookie-path)
- [session.cookie_domain](session.configuration.md#ini.session.cookie-domain)
- [session.cookie_secure](session.configuration.md#ini.session.cookie-secure)
- [session.cookie_httponly](session.configuration.md#ini.session.cookie-httponly)
- [session.cookie_samesite](session.configuration.md#ini.session.cookie-samesite)
- [session_set_cookie_params()](function.session-set-cookie-params.md) -
Встановлює параметри сесійної cookie
