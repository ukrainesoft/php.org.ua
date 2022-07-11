- [«basename](function.basename.md)
- [chmod»] (function.chmod.md)

- [PHP Manual](index.md)
- [Функції файлової системи](ref.filesystem.md)
- Змінює групу файлу

#chgrp

(PHP 4, PHP 5, PHP 7, PHP 8)

chgrp — Змінює групу файлів

### Опис

**chgrp**(string `$filename`, string\|int `$group`): bool

Здійснює спробу зміни групи файлу `filename` на групу `group`.

Тільки суперкористувач може довільно змінювати групу файлу;
решта користувачів можуть змінювати групу файлу тільки на ті групи,
членами яких є.

### Список параметрів

`filename`
Шлях до файлу.

`group`
Назва чи номер групи.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Зміна групи файлу**

` <?php$filename u003d 'shared_file.txt';$format u003d "Ідентифікатор групи файлу %s @ %s: %d
";printf($format, $filename, date('r'), filegroup($filename));chgrp($filename, 8);clearstatcache(); // скидаємо кеш filegroup()printf($format, $filename) , date('r'), filegroup($filename));?> `

### Примітки

> **Примітка**: Ця функція не застосовується для роботи з [віддаленими
> файлами](features.remote-files.md), оскільки файл має бути
> доступний через файлову систему сервера.

> **Примітка**: У Windows функція мовчки завершується помилкою при
> застосування до звичайного файлу.

### Дивіться також

- [chown()](function.chown.md) - Змінює власника файлу
- [chmod()](function.chmod.md) - Змінює режим доступу до файлу
