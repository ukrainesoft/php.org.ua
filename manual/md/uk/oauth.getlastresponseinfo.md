- [« OAuth::getLastResponseHeaders](oauth.getlastresponseheaders.md)
- [OAuth::getRequestHeader »](oauth.getrequestheader.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Отримати HTTP-інформацію про останню відповідь

# OAuth::getLastResponseInfo

(PECL OAuth u003d 0.99.1)

OAuth::getLastResponseInfo — Отримати HTTP-інформацію про останню відповідь

### Опис

public **OAuth::getLastResponseInfo**(): array

Повертає HTTP-інформацію про останню відповідь.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив з інформацією на останній запит. Можна, можливо
використовувати константи [curl_getinfo()](function.curl-getinfo.md).

### Дивіться також

- [OAuth::fetch()](oauth.fetch.md) - Витягти захищений ресурс OAuth
- [OAuth::getLastResponse()](oauth.getlastresponse.md) - Отримати
остання відповідь
