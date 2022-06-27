- [« RarEntry::getFileTime](rarentry.getfiletime.md)
- [RarEntry::getMethod »](rarentry.getmethod.md)

- [PHP Manual](index.md)
- [RarEntry](class.rarentry.md)
- Повертає оригінальну ОС елемента

# RarEntry::getHostOs

(PECL rar \>u003d 0.1)

RarEntry::getHostOs — Повертає оригінальну ОС елемента

### Опис

public **RarEntry::getHostOs**(): int

Повертає код оригінальної операційної системи, в якій було створено
елемент архіву.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає код ОС, або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **RarEntry::getHostOs()**(версії \>u003d
2.0.0)**

` <?php$rar_file u003d rar_open('example.rar') or die("Не удалося відкрити Rar архів");$entry u003d rar_entry_get($rar_file, 'Dir/file.txt') or die("Не | такий запис");switch ($entry->getHostOs()) {    case RarEntry::HOST_MSDOS:        echo "MS-DOS
";        break;    case RarEntry::HOST_OS2:        echo "OS2
";       break;    case RarEntry::HOST_WIN32:        echo "Win32
";        break;    case RarEntry::HOST_MACOS:        echo "MacOS
";      break;   case RarEntry::HOST_UNIX:        echo "Unix/Linux
";         break;    case RarEntry::HOST_BEOS:        echo "BeOS
";        break;}?> `

**Приклад #2 **Приклад використання RarEntry::getHostOs()**(версії \<u003d
1.0.0)**

` <?php$rar_file u003d rar_open('example.rar') or die("Не удалося відкрити Rar архів");$entry u003d rar_entry_get($rar_file, 'Dir/file.txt') or die("Не | такий запис");switch ($entry->getHostOs()) {    case RAR_HOST_MSDOS:        echo "MS-DOS
";        break;    case RAR_HOST_OS2:       echo "OS2
";        break;    case RAR_HOST_WIN32:        echo "Win32
";        break;    case RAR_HOST_MACOS:       echo "MacOS
";     break;   case RAR_HOST_UNIX:       echo "Unix/Linux
";        break;    case RAR_HOST_BEOS:       echo "BeOS
";        break;}?> `

### Дивіться також

- [RarEntry::extract()](rarentry.extract.md) - Витягує елемент з
архів
