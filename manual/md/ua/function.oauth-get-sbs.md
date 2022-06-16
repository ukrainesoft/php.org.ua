- [« Функції OAuth](ref.oauth.md)
- [oauth_urlencode »](function.oauth-urlencode.md)

- [PHP Manual](index.md)
- [Функції OAuth](ref.oauth.md)
- Створити базовий рядок підпису (Signature Base String)

#oauth_get_sbs

(PECL OAuth u003d0.99.7)

oauth_get_sbs — Створити базовий рядок підпису (Signature Base String)

### Опис

**oauth_get_sbs**(string `$http_method`, string `$uri`, array
`$request_parameters` u003d ?): string

Створити базовий рядок підпису (Signature Base String) відповідно до
pecl/oauth.

### Список параметрів

`http_method`
HTTP метод.

`uri`
URI для кодування.

`request_parameters`
Масив параметрів запиту.

### Значення, що повертаються

Повертає базовий рядок підпису (Signature Base String).
