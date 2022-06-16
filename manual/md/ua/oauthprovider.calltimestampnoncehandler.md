- [«
OAuthProvider::callconsumerHandler](oauthprovider.callconsumerhandler.md)
- [OAuthProvider::calltokenHandler
»](oauthprovider.calltokenhandler.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Викликати callback-функцію timestampNonceHandler

# OAuthProvider::callTimestampNonceHandler

(PECL OAuth u003d> 1.0.0)

OAuthProvider::callTimestampNonceHandler — Викликати callback-функцію
timestampNonceHandler

### Опис

public **OAuthProvider::callTimestampNonceHandler**(): void

Викликати зареєстровану callback-функцію обробника мітки часу,
яка була задана за допомогою
[OAuthProvider::timestampNonceHandler()](oauthprovider.timestampnoncehandler.md).

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

- [OAuthProvider::timestampNonceHandler()](oauthprovider.timestampnoncehandler.md) -
Встановити обробник timestampNonceHandler
