- [« OAuth::setSSLChecks](oauth.setsslchecks.md)
- [OAuth::setToken »](oauth.settoken.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Встановити мітку часу

# OAuth::setTimestamp

(PECL OAuth u003d> 1.0.0)

OAuth::setTimestamp — Встановити позначку часу

### Опис

public **OAuth::setTimestamp**(string `$timestamp`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Встановити позначку часу OAuth для наступних запитів.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`timestamp`
Мітка часу.

### Значення, що повертаються

Повертає **`true`** або **`false`**, якщо параметр `timestamp` заданий
некоректно.

### Список змін

| Версія | Опис |
|------------------|------------------------------ -------------------------------------------------- -|
| PECL oauth 1.0.0 | Раніше у разі виникнення помилки повертався **`null`** замість **`false`**. |

### Дивіться також

- [OAuth::setNonce()](oauth.setnonce.md) - Встановити nonce для
наступних запитів
