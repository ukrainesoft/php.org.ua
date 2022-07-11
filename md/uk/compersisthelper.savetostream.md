- [« COMPersistHelper::SaveToFile](compersisthelper.savetofile.md)
- [com_exception »](class.com-exception.md)

- [PHP Manual](index.md)
- [COMPersistHelper](class.compersisthelper.md)
- Зберігає об'єкт у потоці

# COMPersistHelper::SaveToStream

(PHP 5, PHP 7, PHP 8)

COMPersistHelper::SaveToStream — Зберігає об'єкт у потоці

### Опис

public **COMPersistHelper::SaveToStream**(resource `$stream`): bool

Зберігає об'єкт у заданому потоці.

### Список параметрів

`stream`
Потоковий ресурс.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток [com_exception](class.com-exception.md), якщо
пов'язаний об'єкт не реалізує COM інтерфейс **IPersistStream**, або
якщо виклик **IPersistStream::Save()** завершився помилкою.
