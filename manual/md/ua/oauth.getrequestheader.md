- [« OAuth::getLastResponseInfo](oauth.getlastresponseinfo.md)
- [OAuth::getRequestToken »](oauth.getrequesttoken.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Згенерувати підпис заголовка OAuth

# OAuth::getRequestHeader

(No version information available, might only be in Git)

OAuth::getRequestHeader — Згенерувати підпис заголовка OAuth

### Опис

public **OAuth::getRequestHeader**(string `$http_method`, string `$url`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$extra_parameters` u003d ?): string\|false

Генерує підпис заголовка OAuth на основі фінального методу HTTP, URL
та додаткових параметрів.

### Список параметрів

`http_method`
HTTP метод.

`url`
URL-адреса запиту.

`extra_parameters`
Рядок або масив з додатковими параметрами.

### Значення, що повертаються

Рядок із заголовком запиту або **`false`** у разі виникнення
помилки
