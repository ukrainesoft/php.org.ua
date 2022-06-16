- [«
COMPersistHelper::GetCurFileName](compersisthelper.getcurfilename.md)
- [COMPersistHelper::InitNew »](compersisthelper.initnew.md)

- [PHP Manual](index.md)
- [COMPersistHelper](class.compersisthelper.md)
- Отримати максимальний розмір потоку

# COMPersistHelper::GetMaxStreamSize

(PHP 5, PHP 7, PHP 8)

COMPersistHelper::GetMaxStreamSize — Отримати максимальний розмір потоку

### Опис

public **COMPersistHelper::GetMaxStreamSize**(): int

Повертає розмір потоку (у байтах), необхідний збереження об'єкта.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає розмір потоку (у байтах), необхідний збереження об'єкта.

### Помилки

Викидає виняток [com_exception](class.com-exception.md), якщо
пов'язаний об'єкт не реалізує COM інтерфейс **IPersistStreamInit**, або
якщо виклик **IPersistStream::GetSizeMax()** завершився помилкою.
