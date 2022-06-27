- [« OAuth::enableRedirects](oauth.enableredirects.md)
- [OAuth::fetch »](oauth.fetch.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Увімкнути перевірки SSL

# OAuth::enableSSLChecks

(PECL OAuth u003d 0.99.5)

OAuth::enableSSLChecks — Увімкнути перевірки SSL

### Опис

public **OAuth::enableSSLChecks**(): bool

Включити звичайні перевірки сертифіката SSL кінцевої точки та хоста
(ввімкнено за замовчуванням). Також можна встановити `sslChecks` у значення
не-**`false`**, щоб вимкнути перевірки SSL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`true`**

### Список змін

| Версія | Опис |
|-------------------|----------------------------- ---|
| PECL oauth 0.99.8 | Додано властивість `sslChecks` |

### Дивіться також

- [OAuth::disableSSLChecks()](oauth.disablesslchecks.md) - Вимкнути
SSL перевірки
