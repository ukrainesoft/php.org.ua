- [«RarArchive](class.rararchive.md)
- [RarArchive::getComment »](rararchive.getcomment.md)

- [PHP Manual](index.md)
- [RarArchive](class.rararchive.md)
- Закриває RAR архів та звільняє всі ресурси

# RarArchive::close

#rar_close

(PECL rar \>u003d 2.0.0)

RarArchive::close - rar_close - Закриває RAR архів і звільняє все
ресурси

### Опис

Об'єктно-орієнтований стиль (метод):

public **RarArchive::close**(): bool

Процедурний стиль:

**rar_close**([RarArchive](class.rararchive.md) `$rarfile`): bool

Закриває RAR архів та звільняє всі ресурси, пов'язані з ним.

### Список параметрів

`rarfile`
Об'єкт [RarArchive](class.rararchive.md), відкритий за допомогою
[rar_open()](rararchive.open.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|----------------|-------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------|
| PECL rar 2.0.0 | Елементи архіву, що повертаються [RarArchive::getEntry()](rararchive.getentry.md) та [RarArchive::getEntries()](rararchive.getentries.md), тепер недійсні після виклику даного методу. Це означає, що немає гарантії правильної роботи всіх методів цих елементів. |

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$rar_arch u003d RarArchive::open('latest_winrar.rar');echo $rar_arch."
";$rar_arch->close();echo $rar_arch."
";?> `

Результатом виконання цього прикладу буде щось подібне:

RAR Archive "D:\php_rar runk ests\latest_winrar.rar"
RAR Archive "D:\php_rar runk ests\latest_winrar.rar" (closed)

**Приклад #2 Процедурний стиль**

` <?php$rar_arch u003d rar_open('latest_winrar.rar');echo $rar_arch."
";rar_close($rar_arch);echo $rar_arch."
";?> `
