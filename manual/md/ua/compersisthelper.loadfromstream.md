- [«
COMPersistHelper::LoadFromFile](compersisthelper.loadfromfile.md)
- [COMPersistHelper::SaveToFile »](compersisthelper.savetofile.md)

- [PHP Manual](index.md)
- [COMPersistHelper](class.compersisthelper.md)
- Завантажує об'єкт із потоку

# COMPersistHelper::LoadFromStream

(PHP 5, PHP 7, PHP 8)

COMPersistHelper::LoadFromStream — Завантажує об'єкт із потоку

### Опис

public **COMPersistHelper::LoadFromStream**(resource `$stream`): bool

Завантажує об'єкт із потоку, де його спочатку було збережено.

### Список параметрів

`stream`
Струмовий ресурс для завантаження об'єкта.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток [com_exception](class.com-exception.md), якщо
пов'язаний об'єкт не реалізує COM інтерфейс **IPersistStream**, або
якщо виклик **IPersistStream::Load()** завершився помилкою.
