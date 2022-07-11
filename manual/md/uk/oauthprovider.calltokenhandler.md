- [«
OAuthProvider::callTimestampNonceHandler](oauthprovider.calltimestampnoncehandler.md)
- [OAuthProvider::checkOAuthRequest
»](oauthprovider.checkoauthrequest.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Викликати callback-функцію tokenNonceHandler

# OAuthProvider::calltokenHandler

(PECL OAuth u003d> 1.0.0)

OAuthProvider::calltokenHandler — Викликати callback-функцію
tokenNonceHandler

### Опис

public **OAuthProvider::calltokenHandler**(): void

Викликати зареєстровану callback-функцію обробника токена, яка
була задана за допомогою
[OAuthProvider::tokenHandler()](oauthprovider.tokenhandler.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Якщо callback-функція може бути викликана чи відсутня, то
генерується помилка рівня **`E_ERROR`**.

### Дивіться також

- [OAuthProvider::tokenHandler()](oauthprovider.tokenhandler.md) -
Встановити обробник tokenHandler
