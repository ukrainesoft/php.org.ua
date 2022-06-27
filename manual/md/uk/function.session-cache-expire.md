- [« session_abort](function.session-abort.md)
- [session_cache_limiter »](function.session-cache-limiter.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- Отримує та/або встановлює термін дії поточного кешу

# session_cache_expire

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

session_cache_expire — Отримує та/або встановлює термін дії
поточного кешу

### Опис

**session_cache_expire**(?int `$value` u003d **`null`**): int\|false

**session_cache_expire()** повертає поточне значення налаштування
`session.cache_expire`.

Термін дії скидається до значення за промовчанням (180), що зберігається в
[session.cache_expire](session.configuration.md#ini.session.cache-expire)
під час запиту. Таким чином, потрібно викликати
**session_cache_expire()** для кожного запиту (і до дзвінка)
[session_start()](function.session-start.md)).

### Список параметрів

`value`
Якщо `value` заданий і не дорівнює **`null`**, поточний час життя замінюється
на `value`.

> **Примітка**: Налаштування `value` має значення, якщо для
> `session.cache_limiter` встановлено значення, *відмінне* від `nocache`.

### Значення, що повертаються

Повертає поточне налаштування `session.cache_expire`. Повертається
значення має розглядатися в хвилинах, за замовчуванням – 180. У разі,
якщо змінити значення не вдалося, повертається **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------|
| 8.0.0 | `value` може набувати значення **`null`**. |

### Приклади

**Приклад #1 Приклад використання **session_cache_expire()****

`<?php/* встановити обмежувач кеша на 'private' */session_cache_limiter('private');$cache_limiter u003d session_cache_limiter();/* встановити час життя ;/* старт сесії */session_start();echo "Обмежувач кеша тепер рівний $cache_limiter<br />";echo "Закешовані сторінки сесії стікають через $cache_exp|

### Дивіться також

- [session.cache_expire](session.configuration.md#ini.session.cache-expire)
- [session.cache_limiter](session.configuration.md#ini.session.cache-limiter)
- [session_cache_limiter()](function.session-cache-limiter.md) -
Отримати та/або встановити поточний режим кешування
