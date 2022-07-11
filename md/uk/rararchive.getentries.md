- [« RarArchive::getComment](rararchive.getcomment.md)
- [RarArchive::getEntry »](rararchive.getentry.md)

- [PHP Manual](index.md)
- [RarArchive](class.rararchive.md)
- Повертає повний список елементів із RAR архіву

# RarArchive::getEntries

#rar_list

(PECL rar \>u003d 2.0.0)

RarArchive::getEntries -- rar_list — Повертає повний перелік елементів
з RAR архіву

### Опис

Об'єктно-орієнтований стиль (метод):

public **RarArchive::getEntries**(): array\|false

Процедурний стиль:

**rar_list**([RarArchive](class.rararchive.md) `$rarfile`):
array\|false

Повертає елементи (файли та директорії) з RAR архіву.

> **Примітка**:
>
> Якщо архів має елементи з однаковим ім'ям, цей метод спільно
> з циклом `foreach` по [RarArchive](class.rararchive.md) та доступом до
> ньому як до масиву з числовими індексами є єдиними
> способами отримати доступ до цих елементів (тобто.
> [RarArchive::getEntry()](rararchive.getentry.md) та [`rar://`
> обробник (wrapper)](wrappers.rar.md) не допоможуть.

### Список параметрів

`rarfile`
Об'єкт [RarArchive](class.rararchive.md) відкритий за допомогою
[rar_open()](rararchive.open.md).

### Значення, що повертаються

**rar_list()** повертає масив об'єктів
[RarEntry](class.rarentry.md) або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|----------------|-------------------------------- --------------------------------------|
| PECL rar 3.0.0 | Виправлена підтримка RAR архівів з іменами елементів, що повторюються. |

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$rar_arch u003d RarArchive::open('solid.rar');if ($rar_arch u003du003du003d FALSE)    die("Не зміг відкрити RAR архів.");$rar_entries u003d $rar_ar ;if ($rar_entries u003du003du003d FALSE)    die("Не зміг дістати вміст.");echo "Знайшов " . count($rar_entries) . Об'єктів.
";foreach ($rar_entries as $e) {    echo $e;    echo "
";}$rar_arch->close();?> `

Результатом виконання цього прикладу буде щось подібне:

Знайшов 2 об'єкти.
RarEntry для файлу "tese.txt" (23b93a7a)
RarEntry для файлу "unrardll.txt" (2ed64b6e)

**Приклад #2 Процедурний стиль**

` <?php$rar_arch u003d rar_open('solid.rar');if ($rar_arch u003du003du003d FALSE)   die("Could not open RAR archive.");$rar_entries u003d rar_list($rar_ar u003du003du003d FALSE)   die("Could retrieve entries.");echo "Found " . count($rar_entries) . " entries.
";foreach ($rar_entries as $e) {    echo $e;    echo "
";}rar_close($rar_arch);?> `

### Дивіться також

- [RarArchive::getEntry()](rararchive.getentry.md) - Повертає
об'єкт елемента з RAR архіву
- [`rar://` обробник(wrapper)](wrappers.rar.md)
