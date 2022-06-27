- [« OAuth::fetch](oauth.fetch.md)
- [OAuth::getAccessToken »](oauth.getaccesstoken.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Згенерувати підпис

# OAuth::generateSignature

(No version information available, might only be in Git)

OAuth::generateSignature — Згенерувати підпис

### Опис

public **OAuth::generateSignature**(string `$http_method`, string
$url,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$extra_parameters` u003d ?): string\|false

Генерує підпис на основі методу HTTP, URL та додаткових
параметрів.

### Список параметрів

`http_method`
HTTP-метод для запиту

`url`
URL запиту

`extra_parameters`
Рядок або масив додаткових параметрів.

### Значення, що повертаються

Рядок з підписом або **`false`** у разі виникнення помилки
