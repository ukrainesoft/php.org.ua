- [« COMPersistHelper::\_\_construct](compersisthelper.construct.md)
- [COMPersistHelper::GetMaxStreamSize
»](compersisthelper.getmaxstreamsize.md)

- [PHP Manual](index.md)
- [COMPersistHelper](class.compersisthelper.md)
- Отримати ім'я файлу

# COMPersistHelper::GetCurFileName

(PHP 5, PHP 7, PHP 8)

COMPersistHelper::GetCurFileName — Отримати ім'я файлу

### Опис

public **COMPersistHelper::GetCurFileName**(): string\|false

Повертає назву файлу, пов'язаного з об'єктом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я файлу, пов'язаного з об'єктом.

### Помилки

Викидає виняток [com_exception](class.com-exception.md), якщо
пов'язаний об'єкт не реалізує COM інтерфейс **IPersistFile**, або якщо
виклик **IPersistFile::GetCurFile()** завершився помилкою.
