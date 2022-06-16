- [« RarArchive::getEntries](rararchive.getentries.md)
- [RarArchive::isBroken »](rararchive.isbroken.md)

- [PHP Manual](index.md)
- [RarArchive](class.rararchive.md)
- Повертає об'єкт елемента з архіву RAR

# RarArchive::getEntry

#rar_entry_get

(PECL rar \>u003d 2.0.0)

RarArchive::getEntry -- rar_entry_get — Повертає об'єкт елемента з
RAR архів

### Опис

Об'єктно-орієнтований стиль (метод):

public **RarArchive::getEntry**(string `$entryname`):
[RarEntry](class.rarentry.md)\|false

Процедурний стиль:

**rar_entry_get**([RarArchive](class.rararchive.md) `$rarfile`, string
`$entryname`): [RarEntry](class.rarentry.md)\|false

Повертає об'єкт елемента (файл або директорію) з архіву RAR

> **Примітка**:
>
> Ви також можете отримати об'єкти елементів за допомогою
> [RarArchive::getEntries()](rararchive.getentries.md).
>
> Зверніть увагу, що RAR архів може мати кілька елементів з однаковим
> ім'ям. Даний метод поверне лише перший із них.

### Список параметрів

`rarfile`
Об'єкт [RarArchive](class.rararchive.md) відкритий за допомогою
[rar_open()](rararchive.open.md).

`entryname`
Шлях до архіву RAR.

> **Примітка**:
>
> Шлях має бути таким самим, як і повертається методом
> [RarEntry::getName()](rarentry.getname.md).

### Значення, що повертаються

Повертає знайдений об'єкт [RarEntry](class.rarentry.md) або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$rar_arch u003d RarArchive::open('solid.rar');if ($rar_arch u003du003du003d FALSE)    die("Не зміг відкрити RAR архів.");$rar_entry u003d $rar_ar tese.txt');if($rar_entry u003du003du003d FALSE)    die("Не зміг дістати цей|об'єкт");echo get_class($rar_entry)."
";echo $rar_entry;$rar_arch->close();?> `

Результатом виконання цього прикладу буде щось подібне:

RarEntry
RarEntry для файлу "tese.txt" (23b93a7a)

**Приклад #2 Процедурний стиль**

` <?php$rar_arch u003d rar_open('solid.rar');if ($rar_arch u003du003du003d FALSE)   die("Не зміг відкрити RAR архів.");$rar_entryu003d rar_entry_get('t''t );if ($rar_entry u003du003du003d FALSE)    die("Не зміг дістати цей|об'єкт");echo get_class($rar_entry)."
";echo $rar_entry;rar_close($rar_arch);?> `

### Дивіться також

- [RarArchive::getEntries()](rararchive.getentries.md) - Повертає
повний список елементів з RAR архіву
- [`rar://` обробник (wrapper)](wrappers.rar.md)
