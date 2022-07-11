- [« OAuth::getAccessToken](oauth.getaccesstoken.md)
- [OAuth::getLastResponse »](oauth.getlastresponse.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Отримати інформацію CA

# OAuth::getCAPath

(PECL OAuth u003d 0.99.8)

OAuth::getCAPath — Отримати інформацію CA

### Опис

public **OAuth::getCAPath**(): array

Повертає інформацію про центр сертифікації, що включає ca_path та
ca_info, встановлені [OAuth::setCaPath()](oauth.setcapath.md).

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Асоціативний масив з інформацією про центр сертифікації з ключами
`ca_path` та `ca_info`.

### Дивіться також

- [OAuth::setCAPath()](oauth.setcapath.md) - Встановити CA для шляху
та інформації
- [OAuth::getLastResponseInfo()](oauth.getlastresponseinfo.md) -
Отримати HTTP-інформацію про останню відповідь
