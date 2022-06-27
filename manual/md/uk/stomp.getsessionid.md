- [« Stomp::getReadTimeout](stomp.getreadtimeout.md)
- [Stomp::hasFrame »](stomp.hasframe.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Повертає ідентифікатор поточної сесії Stomp

# Stomp::getSessionId

#stomp_get_session_id

(PECL stomp \>u003d 0.1.0)

Stomp::getSessionId -- stomp_get_session_id — Повертає ідентифікатор
поточної сесії Stomp

### Опис

Об'єктно-орієнтований стиль (метод):

public **Stomp::getSessionId**(): string\|false

Процедурний стиль:

**stomp_get_session_id**(resource `$link`): string\|false

Повертає ідентифікатор сесії Stomp.

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

### Значення, що повертаються

Ідентифікатор сесії (string) у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

`<?php/* підключення */try {    $stomp u003d new Stomp('tcp://localhost:61613');} catch(StompException $e) {    die('Помилка$>|| ));}var_dump($stomp->getSessionId());/* закриття підключення */unset($stomp);?> `

Результатом виконання цього прикладу буде щось подібне:

string(35) "ID:php.net-52873-1257291895530-4:14"

**Приклад #2 Процедурний стиль**

` <?php/* підключення */$link u003d stomp_connect('ssl://localhost:61612');/* перевірка з'єднання */if (!$link) {    die('Помилка з'єднання: ' . . . . ;}var_dump(stomp_get_session_id($link));/* закриття підключення */stomp_close($link);?> `

Результатом виконання цього прикладу буде щось подібне:

string(35) "ID:php.net-52873-1257291895530-4:14"
