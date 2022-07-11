- [«
MongoDB\Driver\Cursor::\_\_construct](mongodb-driver-cursor.construct.md)
- [MongoDB\Driver\Cursor::getId »](mongodb-driver-cursor.getid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- Повертає поточний елемент

# MongoDB\Driver\Cursor::current

(mongodb \>u003d1.9.0)

MongoDB\Driver\Cursor::current — Повертає поточний елемент

### Опис

public **MongoDB\Driver\Cursor::current**(): array\|object

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає поточний документ у вигляді масиву або об'єкта, залежно від
налаштувань курсору. Якщо ітерація не була розпочата, або поточна позиція не
коректна, буде повернено **`null`**.

### Дивіться також

- [Iterator::current()](iterator.current.md) - Повернення поточного
елемента
