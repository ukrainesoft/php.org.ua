- [« SyncSharedMemory::first](syncsharedmemory.first.md)
- [SyncSharedMemory::size »](syncsharedmemory.size.md)

- [PHP Manual](index.md)
- [SyncSharedMemory](class.syncsharedmemory.md)
- Копіює дані з іменованої пам'яті, що розділяється

# SyncSharedMemory::read

(PECL sync \>u003d 1.1.0)

SyncSharedMemory::read — Копіює дані з іменованої розділяється
пам'яті

### Опис

public **SyncSharedMemory::read**(int `$start` u003d 0, int `$length` u003d ?)

Копіює дані з іменованої пам'яті, що розділяється.

### Список параметрів

`start`
Початок/зміщення у байтах для початку читання.

> **Примітка**:
>
> Якщо значення негативне, початкова позиція почнеться з
> вказаної кількості байтів з кінця сегмента пам'яті, що розділяється.

`length`
Кількість байт для читання.

> **Примітка**:
>
> Якщо не вказано інше, читання зупиниться в кінці сегмента
> пам'яті.
>
> Якщо значення негативне, читання зупиниться на вказаному
> кількості байтів з кінця сегмента пам'яті, що розділяється.

### Значення, що повертаються

Рядок, що містить дані, зчитані з пам'яті, що розділяється.

### Приклади

**Приклад #1 Приклад використання
[SyncSharedMemory::\_\_construct()](syncsharedmemory.construct.md)**

` <?php// Возможно, вам потребуется защитить разделяемую память с другими объектами синхронизации.// Разделяемая память исчезает, когда исчезает последняя ссылка на неё.$mem u003d new SyncSharedMemory("AppReportName", 1024);if ($mem-> first()){    // Тут можна виконати первинну ініціалізацію.}$result u003d $mem->write("report.txt");$result u003d $mem->read(3, -4);var_dump ;?> `

Результатом виконання цього прикладу буде щось подібне:

string(3) "ort"

### Дивіться також

- [SyncSharedMemory::\_\_construct()](syncsharedmemory.construct.md) -
Створює новий об'єкт SyncSharedMemory
- [SyncSharedMemory::first()](syncsharedmemory.first.md) -
Перевіряє, чи є об'єкт першим загальносистемним екземпляром
іменованої роздільної пам'яті
- [SyncSharedMemory::write()](syncsharedmemory.write.md) - Копіює
дані в іменовану пам'ять, що розділяється
- **SyncSharedMemory::read()**
