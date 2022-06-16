- [«Stomp::error](stomp.error.md)
- [Stomp::getSessionId »](stomp.getsessionid.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Повертає час максимального очікування операції читання

# Stomp::getReadTimeout

#stomp_get_read_timeout

(PECL stomp \>u003d 0.3.0)

Stomp::getReadTimeout -- stomp_get_read_timeout -- Повертає час
максимального очікування операції читання

### Опис

Об'єктно-орієнтований стиль (метод):

public **Stomp::getReadTimeout**(): array

Процедурний стиль:

**stomp_get_read_timeout**(resource `$link`): array

Повертає час максимального очікування операції читання

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

### Значення, що повертаються

Повертає масив із 2 елементами: sec та usec.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

`<?php/* підключення */try {    $stomp u003d new Stomp('tcp://localhost:61613');} catch(StompException $e) {    die('Помилка$>|| ));}var_dump($stomp->getReadTimeout());/* закриття з'єднання*/unset($stomp);?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
["sec"]u003d>
int(2)
["usec"]u003d>
int(0)
}

**Приклад #2 Процедурний стиль**

` <?php/* підключення */$link u003d stomp_connect('ssl://localhost:61612');/* перевірка з'єднання */if (!$link) {    die('Помилка з'єднання: ' . . . . ;}var_dump(stomp_get_read_timeout($link));/* закриття з'єднання*/stomp_close($link);?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
["sec"]u003d>
int(2)
["usec"]u003d>
int(0)
}
