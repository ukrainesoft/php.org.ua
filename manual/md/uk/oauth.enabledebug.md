- [« OAuth::disableSSLChecks](oauth.disablesslchecks.md)
- [OAuth::enableRedirects »](oauth.enableredirects.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Включити докладну налагоджувальну інформацію

# OAuth::enableDebug

(PECL OAuth u003d 0.99.3)

OAuth::enableDebug — Включити докладну інформацію про налагодження

### Опис

public **OAuth::enableDebug**(): bool

Включає докладну інформацію про запит, корисний для налагодження.
Відлагоджувальна інформація зберігається в полі `debugInfo`. Альтернативно можна
встановити поле `debug` значення non-**`false`**, щоб увімкнути режим
налагодження.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**

### Список змін

| Версія | Опис |
|-------------------|----------------------------- --------------|
| PECL oauth 0.99.8 | Були додані поля `debug` та `debugInfo` |

### Дивіться також

- [OAuth::disableDebug()](oauth.disabledebug.md) - Вимкнути
докладну налагоджувальну інформацію
