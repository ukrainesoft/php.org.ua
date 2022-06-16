- [«
OAuthProvider::addRequiredParameter](oauthprovider.addrequiredparameter.md)
- [OAuthProvider::callTimestampNonceHandler
»](oauthprovider.calltimestampnoncehandler.md)

- [PHP Manual](index.md)
- [OAuthProvider](class.oauthprovider.md)
- Викликати callback-функцію consumerNonceHandler

# OAuthProvider::callconsumerHandler

(No version information available, might only be in Git)

OAuthProvider::callconsumerHandler — Викликати callback-функцію
consumerNonceHandler

### Опис

public **OAuthProvider::callconsumerHandler**(): void

Викликати зареєстровану callback-функцію, яка була задана з
допомогою
[OAuthProvider::consumerHandler()](oauthprovider.consumerhandler.md).

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

- [OAuthProvider::consumerHandler()](oauthprovider.consumerhandler.md) -
Встановити обробник consumerHandler
