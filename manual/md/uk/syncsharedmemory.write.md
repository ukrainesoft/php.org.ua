- [« SyncSharedMemory::size](syncsharedmemory.size.md)
- [Інші базові модулі »](refs.basic.other.md)

- [PHP Manual](index.md)
- [SyncSharedMemory](class.syncsharedmemory.md)
- Копіює дані в іменовану пам'ять, що розділяється.

# SyncSharedMemory::write

(PECL sync \>u003d 1.1.0)

SyncSharedMemory::write — Копіює дані в іменовану розділювану
пам'ять

### Опис

public **SyncSharedMemory::write**(string `$string` u003d ?, int `$start` u003d
0)

Копіює дані в іменовану пам'ять, що розділяється.

### Список параметрів

`string`
Дані для запису в пам'ять, що розділяється.

> **Примітка**:
>
> Якщо розмір даних перевищує розмір пам'яті, що розділяється, кількість
> записаних байтів, що повертаються, буде менше довжини вхідних даних.

`start`
Початок/зміщення у байтах для початку запису.

> **Примітка**:
>
> Якщо значення негативне, початкова позиція почнеться з
> вказаної кількості байтів з кінця сегмента пам'яті, що розділяється.

### Значення, що повертаються

Ціле число, що містить кількість байтів, записаних в розділяється
пам'ять.

### Приклади

**Приклад #1 Приклад використання **SyncSharedMemory::write()****

` <?php// Возможно, вам потребуется защитить разделяемую память с другими объектами синхронизации.// Разделяемая память исчезает, когда исчезает последняя ссылка на неё.$mem u003d new SyncSharedMemory("AppReportName", 1024);if ($mem-> first()){    // Тутможно виконати первинну ініціалізацію.}$result u003d $mem->write("report.txt");var_dump($result);$result u003d $mem->write(" , -3);var_dump($result);?> `

Результатом виконання цього прикладу буде щось подібне:

int(10)
int(3)

### Дивіться також

- [SyncSharedMemory::\_\_construct()](syncsharedmemory.construct.md) -
Створює новий об'єкт SyncSharedMemory
- [SyncSharedMemory::first()](syncsharedmemory.first.md) -
Перевіряє, чи є об'єкт першим загальносистемним екземпляром
іменованої роздільної пам'яті
- **SyncSharedMemory::write()**
- [SyncSharedMemory::read()](syncsharedmemory.read.md) - Копіює
дані з іменованої пам'яті
