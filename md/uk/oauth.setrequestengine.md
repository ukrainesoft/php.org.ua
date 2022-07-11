- [« OAuth::setNonce](oauth.setnonce.md)
- [OAuth::setRSACertificate »](oauth.setrsacertificate.md)

- [PHP Manual](index.md)
- [OAuth](class.oauth.md)
- Використовується для setRequestEngine

# OAuth::setRequestEngine

(PECL OAuth u003d> 1.0.0)

OAuth::setRequestEngine — Використовується для setRequestEngine

### Опис

public **OAuth::setRequestEngine**(int `$reqengine`): void

Встановлює Request Engine (механізм запитів), який надсилатиме
HTTP запити.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`reqengine`
Вибраний механізм запитів. Задайте **`OAUTH_REQENGINE_STREAMS`**, якщо
хочете використовувати потоки PHP, або **`OAUTH_REQENGINE_CURL`** для
використання [Curl](book.curl.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток [OAuthException](class.oauthexception.md) за
вибір некоректного механізму запитів.

### Приклади

**Приклад #1 Приклад використання **OAuth::setRequestEngine()****

` <?php$consumer u003d new OAuth();$consumer->setRequestEngine(OAUTH_REQENGINE_STREAMS);?> `

### Дивіться також

- [Curl](book.curl.md)
- [Потоки PHP] (book.stream.md)
- [OAuthException](class.oauthexception.md)
