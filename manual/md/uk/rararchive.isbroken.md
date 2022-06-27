- [« RarArchive::getEntry](rararchive.getentry.md)
- [RarArchive::isSolid »](rararchive.issolid.md)

- [PHP Manual](index.md)
- [RarArchive](class.rararchive.md)
- Перевіряє, чи не зламано архів (не завершено)

# RarArchive::isBroken

#rar_broken_is

(PECL rar \>u003d 3.0.0)

RarArchive::isBroken -- rar_broken_is — Перевіряє, чи не зламаний архів
(не завершено)

### Опис

Об'єктно-орієнтований стиль (метод):

public **RarArchive::isBroken**(): bool

Процедурний стиль:

**rar_broken_is**([RarArchive](class.rararchive.md) `$rarfile`): bool

Функція визначає, чи є архів незавершеним, тобто. том обрізаний
або відсутня.

### Список параметрів

`rarfile`
Об'єкт [RarArchive](class.rararchive.md), відкритий за допомогою
[rar_open()](rararchive.open.md).

### Значення, що повертаються

Повертає **`true`**, якщо архів зламаний і **`false`**, якщо ні. Також,
функція може повернути **`false`**, якщо надісланий файл вже закритий.
Єдиний варіант визначити точну причину – це дозволити
винятки за допомогою
[RarException::setUsingExceptions()](rarexception.setusingexceptions.md);
однак, це не так вже й важливо, оскільки програма все одно не зможе
працювати із закритим файлом.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

`<?phpfunction retnull() { return null; }$file u003d dirname(__FILE__) . "/multi_broken.part1.rar";/* третій аргумент служить для пригнічення повідомлень */$arch u003d RarArchive::open($file, null, 'retnull');var_dump($arch->isBroken() `

Результатом виконання цього прикладу буде щось подібне:

bool(true)

**Приклад #2 Процедурний стиль**

`<?phpfunction retnull() { return null; }$file u003d dirname(__FILE__) . "/multi_broken.part1.rar";/* третій аргумент служить для придушення повідомлень */$arch u003d rar_open($file, null, 'retnull');var_dump(rar_broken_is($arch));?> ``

### Дивіться також

- [RarArchive::setAllowBroken()](rararchive.setallowbroken.md) -
Чи відкривати пошкоджені архіви
