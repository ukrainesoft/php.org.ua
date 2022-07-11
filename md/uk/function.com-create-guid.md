- [« Функції COM](ref.com.md)
- [com_event_sink »](function.com-event-sink.md)

- [PHP Manual](index.md)
- [Функції COM](ref.com.md)
- Створення унікального глобального ідентифікатора (GUID)

#com_create_guid

(PHP 5, PHP 7, PHP 8)

com_create_guid — створення унікального глобального ідентифікатора (GUID)

### Опис

**com_create_guid**(): string\|false

Створює унікальний світовий ідентифікатор (GUID).

GUID генерується так само як і DCE UUID, за винятком того, що,
конвенції Microsoft необхідно укладати GUID у фігурні дужки.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок із GUID або **`false`** у разі виникнення помилки.

### Дивіться також

- **uuid_create()** у модулі PECL uuid
