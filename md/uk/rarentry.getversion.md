- [« RarEntry::getUnpackedSize](rarentry.getunpackedsize.md)
- [RarEntry::isDirectory »](rarentry.isdirectory.md)

- [PHP Manual](index.md)
- [RarEntry](class.rarentry.md)
- Повертає мінімальну версію програми RAR, необхідну для
розпакування елемента

# RarEntry::getVersion

(PECL rar \>u003d 0.1)

RarEntry::getVersion — Повертає мінімальну версію програми RAR,
необхідну для розпакування елемента

### Опис

public **RarEntry::getVersion**(): int

Повертає мінімальну версію програми RAR (тобто WinRAR), необхідну
для розпакування елемента архіву. Вона закодована у вигляді: 10 основна
версія + мінорна версія.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає версію або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **RarEntry::getVersion()****

` <?php$rar_file u003d rar_open('example.rar') or die("Не вдалося|відкрити Rar архів");$entry u003d rar_entry_get($rar_file, 'Dir/file.txt') or die("Не таку запис");echo "Версія Rar, необхідна для розпакування: " . $entry->getVersion();?> `
