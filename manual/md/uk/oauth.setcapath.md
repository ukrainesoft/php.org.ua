- [« OAuth::setAuthType](oauth.setauthtype.md)
- [OAuth::setNonce »](oauth.setnonce.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Встановити CA для шляху та інформації

# OAuth::setCAPath

(PECL OAuth u003d 0.99.8)

OAuth::setCAPath — Встановити CA для шляху та інформації

### Опис

public **OAuth::setCAPath**(string `$ca_path` u003d ?, string `$ca_info` u003d
?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Встановити центр сертифікації (CA) для шляхів та інформації.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`ca_path`
CA шляху.

`ca_info`
CA інформації.

### Значення, що повертаються

Повертає **`true`** або **`false`**, якщо будь-який з параметрів
`ca_path` або `ca_info` задано некоректно.

### Список змін

| Версія | Опис |
|------------------|------------------------------ -------------------------------------------------- -|
| PECL oauth 1.0.0 | Раніше у разі виникнення помилки повертався **`null`** замість **`false`**. |

### Дивіться також

- [OAuth::getCaPath()](oauth.getcapath.md) - Отримати інформацію CA
