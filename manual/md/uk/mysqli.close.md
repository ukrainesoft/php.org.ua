- [« mysqli::character_set_name](mysqli.character-set-name.md)
- [mysqli::commit »](mysqli.commit.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Закриває раніше відкрите з'єднання з базою даних

# mysqli::close

# mysqli_close

(PHP 5, PHP 7, PHP 8)

mysqli::close -- mysqli_close — Закриває раніше відкрите з'єднання з
базою даних

### Опис

Об'єктно-орієнтований стиль

public **mysqli::close**(): bool

Процедурний стиль

**mysqli_close**([mysqli](class.mysqli.md) `$mysql`): bool

Закриває відкрите з'єднання з базою даних.

Відкриті непостійні з'єднання MySQL та набори результатів
автоматично закриваються під час знищення їх об'єктів. Явне закриття
відкритих з'єднань та звільнення наборів результатів не обов'язково.
Однак рекомендується закрити з'єднання, як тільки скрипт завершить
виконання всіх своїх операцій з базою даних, якщо йому ще належить
велика обробка після отримання результатів.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::close()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$result u003d $mysql BY ID LIMIT 3");/* Закрийте з'єднання, як тільки воно становиться непотрібним */$mysqli->close();foreach ($result as $row) {  данних**  

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect("localhost", "my_user", "my_password", "world");$result u003d mysqli_query  LIMIT 3");

### Примітки

> **Примітка**:
>
> **mysqli_close()** не закриває постійні з'єднання. Для отримання
> подробиці дивіться посібник з [persistent
> connections](features.persistent-connections.md).

### Дивіться також

- [mysqli::\_\_construct()](mysqli.construct.md) - Встановлює
нове з'єднання з сервером MySQL
- [mysqli_init()](mysqli.init.md) - Ініціалізує MySQLi та
повертає об'єкт для використання у функції mysqli_real_connect()
- [mysqli_real_connect()](mysqli.real-connect.md) - Встановлює
з'єднання з сервером mysql
- [mysqli_free_result()](mysqli-result.free.md) - Звільняє
пам'ять, зайняту результатами запиту
