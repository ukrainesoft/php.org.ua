- [«SyncSharedMemory](class.syncsharedmemory.md)
- [SyncSharedMemory::first »](syncsharedmemory.first.md)

- [PHP Manual](index.md)
- [SyncSharedMemory](class.syncsharedmemory.md)
- Створює новий об'єкт SyncSharedMemory

# SyncSharedMemory::\_\_construct

(PECL sync \>u003d 1.1.0)

SyncSharedMemory::\_\_construct — Створює новий об'єкт SyncSharedMemory

### Опис

public **SyncSharedMemory::\_\_construct**(string `$name`, int `$size`)

Створює іменований об'єкт пам'яті, що розділяється.

### Список параметрів

`name`
Ім'я об'єкта пам'яті, що розділяється.

> **Примітка**:
>
> Якщо ім'я вже існує, воно має бути доступним для відкриття поточним
> користувачем, від імені якого запущено процес, інакше буде
> викинуто виняток із безглуздим повідомленням про помилку.

`size`
Розмір в байтах пам'яті, що розділяється, яку необхідно зарезервувати.

> **Примітка**:
>
> Об'єм пам'яті не може бути змінено пізніше. Запитайте наперед достатньо
> місця для зберігання.

### Значення, що повертаються

Новий об'єкт [SyncSharedMemory](class.syncsharedmemory.md).

### Помилки

Викидається виняток, якщо об'єкт пам'яті не може бути
створено або відкрито.

### Приклади

**Приклад #1 Приклад використання **SyncSharedMemory::\_\_construct()****

` <?php// Возможно, вам потребуется защитить разделяемую память с другими объектами синхронизации.// Разделяемая память исчезает, когда исчезает последняя ссылка на неё.$mem u003d new SyncSharedMemory("AppReportName", 1024);if ($mem-> first()){    // Виконайте тут початкову ініціалізацію.}$result u003d $mem->write(json_encode(array("name" u003d> "my_report.txt"))));?> `

### Дивіться також

- [SyncSharedMemory::first()](syncsharedmemory.first.md) -
Перевіряє, чи є об'єкт першим загальносистемним екземпляром
іменованої роздільної пам'яті
- [SyncSharedMemory::size()](syncsharedmemory.size.md) - Повертає
розмір іменованої пам'яті
- [SyncSharedMemory::write()](syncsharedmemory.write.md) - Копіює
дані в іменовану пам'ять, що розділяється
- [SyncSharedMemory::read()](syncsharedmemory.read.md) - Копіює
дані з іменованої пам'яті
