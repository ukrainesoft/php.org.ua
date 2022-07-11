- [« RarArchive::isBroken](rararchive.isbroken.md)
- [RarArchive::open »](rararchive.open.md)

- [PHP Manual](index.md)
- [RarArchive](class.rararchive.md)
- Перевірити, чи є архів суцільним

# RarArchive::isSolid

#rar_solid_is

(PECL rar \>u003d 2.0.0)

RarArchive::isSolid -- rar_solid_is — Перевірити, чи є архів
суцільним

### Опис

Об'єктно-орієнтований стиль (метод):

public **RarArchive::isSolid**(): bool

Процедурний стиль:

**rar_solid_is**([RarArchive](class.rararchive.md) `$rarfile`): bool

Перевіряє, чи є архів суцільним. Вилучення одного конкретного
файлу з суцільного архіву помітно повільніше.

### Список параметрів

`rarfile`
Об'єкт [RarArchive](class.rararchive.md), відкритий за допомогою
[rar_open()](rararchive.open.md).

### Значення, що повертаються

Повертає **`true`**, якщо так і **`false`**, якщо ні.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$arch1 u003d RarArchive::open("store_method.rar");$arch2 u003d RarArchive::open("solid.rar");echo "$arch1: " . ($arch1->isSolid()?'yes':'no') ."
";echo "$arch2: " . ($arch2->isSolid()?'yes':'no') . "
";?> `

Результатом виконання цього прикладу буде щось подібне:

RAR Archive "C:\php_rar runk ests\store_method.rar": no
RAR Archive "C:\php_rar runk ests\solid.rar": yes

**Приклад #2 Процедурний стиль**

` <?php$arch1 u003d rar_open("store_method.rar");$arch2 u003d rar_open("solid.rar");echo "$arch1: " . (rar_solid_is($arch1)?'yes':'no') ."
";echo "$arch2: " . (rar_solid_is($arch2)?'yes':'no') . "
";?> `
