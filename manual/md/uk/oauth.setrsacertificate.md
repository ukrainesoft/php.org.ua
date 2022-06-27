- [« OAuth::setRequestEngine](oauth.setrequestengine.md)
- [OAuth::setSSLChecks »](oauth.setsslchecks.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Встановити сертифікат RSA

# OAuth::setRSACertificate

(PECL OAuth u003d> 1.0.0)

OAuth::setRSACertificate — Встановити сертифікат RSA

### Опис

public **OAuth::setRSACertificate**(string `$cert`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Встановлює сертифікат RSA.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`cert`
Сертифікат RSA

### Значення, що повертаються

Повертає **`true`** або **`false`** (наприклад, якщо заданий некоректний
сертифікат RSA)

### Список змін

| Версія | Опис |
|------------------|------------------------------ -------------------------------------------------- -|
| PECL oauth 1.0.0 | Раніше у разі виникнення помилки повертався **`null`** замість **`false`**. |

### Приклади

**Приклад #1 Приклад використання **OAuth::setRsaCertificate()****

` <?php$consume u003d new OAuth('1234', '', OAUTH_SIG_METHOD_RSASHA1);$consume->setRSACertificate(file_get_contents('test.pem'));?> `

### Дивіться також

- [OAuth::setCaPath()](oauth.setcapath.md) - Встановити CA для шляху
та інформації
