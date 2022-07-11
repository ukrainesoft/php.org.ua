- [« OAuth::setTimestamp](oauth.settimestamp.md)
- [OAuth::setVersion »](oauth.setversion.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Задати токен та його пароль

# OAuth::setToken

(PECL OAuth u003d 0.99.1)

OAuth::setToken — Задати токен та його пароль

### Опис

public **OAuth::setToken**(string `$token`, string `$token_secret`):
bool

Встановлює токен та його пароль для наступних запитів.

### Список параметрів

`token`
Токен OAuth.

`token_secret`
Пароль токена OAuth.

### Значення, що повертаються

**`true`**

### Приклади

**Приклад #1 Приклад використання **OAuth::setToken()****

` <?php$oauth u003d new OAuth(OAUTH_CONSUMER_KEY,OAUTH_CONSUMER_SECRET);$oauth->setToken("token","token-secret");?> `
