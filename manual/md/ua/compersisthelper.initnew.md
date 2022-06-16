- [«
COMPersistHelper::GetMaxStreamSize](compersisthelper.getmaxstreamsize.md)
- [COMPersistHelper::LoadFromFile
»](compersisthelper.loadfromfile.md)

- [PHP Manual](index.md)
- [COMPersistHelper](class.compersisthelper.md)
- Ініціалізує об'єкт у стан за замовчуванням

# COMPersistHelper::InitNew

(PHP 5, PHP 7, PHP 8)

COMPersistHelper::InitNew — Ініціалізує об'єкт у стан по
замовчуванням

### Опис

public **COMPersistHelper::InitNew**(): bool

Ініціалізує об'єкт у стан за промовчанням.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток [com_exception](class.com-exception.md), якщо
пов'язаний об'єкт не реалізує COM інтерфейс **IPersistStreamInit**, або
якщо виклик **IPersistStreamInit::Init()** завершився помилкою.
