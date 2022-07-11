- [« OAuth::getRequestToken](oauth.getrequesttoken.md)
- [OAuth::setCAPath »](oauth.setcapath.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- встановити тип авторизації

# OAuth::setAuthType

(PECL OAuth u003d 0.99.1)

OAuth::setAuthType — Встановити тип авторизації

### Опис

public **OAuth::setAuthType**(int `$auth_type`): bool

Встановлює, яким чином потрібно передавати параметри OAuth.

### Список параметрів

`auth_type`
`auth_type` може бути заданий одним із наступних прапорів (у порядку
зменшення переваги згідно з розділом 5.2 OAuth 1.0):

**`OAUTH_AUTH_TYPE_AUTHORIZATION`**
Передавати параметри OAuth HTTP-заголовку `Authorization`.

**`OAUTH_AUTH_TYPE_FORM`**
Додати параметри OAuth у тіло запиту HTTP POST.

**`OAUTH_AUTH_TYPE_URI`**
Додати параметри OAuth до URI запиту.

**`OAUTH_AUTH_TYPE_NONE`**
Чи не передавати.

### Значення, що повертаються

Повертає **`true`** або **`false`** (наприклад, якщо параметр
`auth_type` заданий некоректно.)

### Список змін

| Версія | Опис |
|------------------|------------------------------ -------------------------------------------------- -|
| PECL oauth 1.0.0 | Раніше у разі виникнення помилки повертався **`null`** замість **`false`**. |
