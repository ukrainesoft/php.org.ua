- [«OAuth](class.oauth.md)
- [OAuth::\_\_destruct »](oauth.destruct.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Створює новий об'єкт OAuth

# OAuth::\_\_construct

(PECL OAuth u003d 0.99.1)

OAuth::\_\_construct — Створює новий об'єкт OAuth

### Опис

public **OAuth::\_\_construct**(
string `$consumer_key`,
string `$consumer_secret`,
string `$signature_method` u003d **`OAUTH_SIG_METHOD_HMACSHA1`**,
int `$auth_type` u003d 0
)

Створює новий об'єкт OAuth

### Список параметрів

`consumer_key`
Ключ споживача наданий сервіс провайдером.

`consumer_secret`
Секрет споживача, наданий послугою провайдером.

`signature_method`
Цей необов'язковий параметр визначає, який метод підпису буде
використаний. За промовчанням використовується **`OAUTH_SIG_METHOD_HMACSHA1`**
(HMAC-SHA1).

`auth_type`
Цей необов'язковий параметр визначає, як передавати OAuth параметри
споживачеві. За замовчуванням використовується
**`OAUTH_AUTH_TYPE_AUTHORIZATION`** (в заголовку `Authorization`).
