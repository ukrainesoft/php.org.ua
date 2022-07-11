- [«
MongoDB\Driver\CursorInterface::getServer](mongodb-driver-cursorinterface.getserver.md)
- [MongoDB\Driver\CursorInterface::setTypeMap
»](mongodb-driver-cursorinterface.settypemap.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md)
- Перевірити, чи можна ще отримати з курсору результати

# MongoDB\Driver\CursorInterface::isDead

(mongodb \>u003d1.6.0)

MongoDB\Driver\CursorInterface::isDead — Перевірити, чи можна ще
отримати з курсору результати

### Опис

abstract public **MongoDB\Driver\CursorInterface::isDead**(): bool

Перевіряє, чи можна отримати результати з курсору.
Спочатку курсор перебуває у статусі "живий"(alive), але в наступних
випадках може перейти в статус "мертвий"(dead):

- При черговому вичитуванні не хвостового курсору не було повернено
документ
-   Виникла помилка
- Курсор прочитав останній батч до завершення
- Курсор досяг встановленого ліміту

Це насамперед корисно під час роботи з хвостовими курсорами.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо запросити черговий результат не вдасться
або **`false`**, якщо він ще "живий".

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Cursor::isDead()](mongodb-driver-cursor.isdead.md) -
Перевіряє, чи курсор вичерпано або може містити додаткові
результати
