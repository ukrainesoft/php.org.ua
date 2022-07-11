- [« OAuth::setCAPath](oauth.setcapath.md)
- [OAuth::setRequestEngine »](oauth.setrequestengine.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Встановити nonce для подальших запитів

# OAuth::setNonce

(PECL OAuth u003d 0.99.1)

OAuth::setNonce — Встановити nonce для подальших запитів

### Опис

public **OAuth::setNonce**(string `$nonce`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Встановлює nonce на наступні запити.

### Список параметрів

`nonce`
Значення oauth_nonce.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, або **`false`**,
якщо параметр `nonce` заданий некоректно.

### Список змін

| Версія | Опис |
|------------------|------------------------------ -------------------------------------------------- -|
| PECL oauth 1.0.0 | Раніше у разі виникнення помилки повертався **`null`** замість **`false`**. |

### Дивіться також

- [OAuth::setToken()](oauth.settoken.md) - Задати токен та його пароль
- [OAuth::setAuthType()](oauth.setauthtype.md) - Встановити тип
авторизації
- [OAuth::setVersion()](oauth.setversion.md) - Встановити версію
OAuth
