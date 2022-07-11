- [«Stomp::commit](stomp.commit.md)
- [Stomp::\_\_destruct »](stomp.destruct.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Відкриває з'єднання

# Stomp::\_\_construct

#stomp_connect

(PECL stomp \>u003d 0.1.0)

Stomp::\_\_construct -- stomp_connect — Відкриває з'єднання

### Опис

Об'єктно-орієнтований стиль (конструктор):

public **Stomp::\_\_construct**(
string `$broker` u003d ini_get("stomp.default_broker_uri"),
string `$username` u003d ?,
string `$password` u003d ?,
array `$headers` u003d ?
)

Процедурний стиль:

**stomp_connect**(
string `$broker` u003d ini_get("stomp.default_broker_uri"),
string `$username` u003d ?,
string `$password` u003d ?,
array `$headers` u003d ?
): resource

Відкриває з'єднання до Stomp-сумісного брокера повідомлень (Message
Broker).

### Список параметрів

`broker`
URI брокера

`username`
Ім'я користувача

`password`
Пароль

`headers`
Асоціативний масив, що містить додаткові заголовки (приклад:
receipt).

### Значення, що повертаються

> **Примітка**:
>
> Також може бути зазначений заголовок транзакції, що означає, що прийом
> повідомлення має бути частиною іменованої транзакції.

### Список змін

| Версія | Опис |
|------------------|-----------------------------|
| PECL Stomp 1.0.1 | Доданий параметр `headers` |

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php/* підключення */try {    $stomp u003d new Stomp('tcp://localhost:61613');} catch(StompException $e) {    die('Помилка$>|| ));}/* закриття з'єднання*/unset($stomp);?> `

**Приклад #2 Процедурний стиль**

` <?php/* підключення */$link u003d stomp_connect('ssl://localhost:61612');/* перевірка з'єднання */if (!$link) {    die('Помилка з'єднання: ' . . . . ;}/* Закриття з'єднання*/stomp_close($link);?> `
