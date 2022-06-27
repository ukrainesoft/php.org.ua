- [« RarEntry::getHostOs](rarentry.gethostos.md)
- [RarEntry::getName »](rarentry.getname.md)

- [PHP Manual](index.md)
- [RarEntry](class.rarentry.md)
- Повертає метод компресії елемента

# RarEntry::getMethod

(PECL rar \>u003d 0.1)

RarEntry::getMethod — Повертає метод компресії елемента

### Опис

public **RarEntry::getMethod**(): int

**RarEntry::getMethod()** повертає число, що відповідає методу
компресії, що використовувався під час створення поточного елемента архіву.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає номер методу або **false** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **RarEntry::getMethod()****

` <?php$rar_file u003d rar_open('example.rar') or die("Не удалося відкрити Rar архів");$entry u003d rar_entry_get($rar_file, 'Dir/file.txt') or die("Не | такий запис");echo "Номер методу: " . $entry->getMethod();?> `
