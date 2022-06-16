- [« RarEntry::extract](rarentry.extract.md)
- [RarEntry::getCrc »](rarentry.getcrc.md)

- [PHP Manual](index.md)
- [RarEntry](class.rarentry.md)
- Повертає атрибути елемента архіву

# RarEntry::getAttr

(PECL rar \>u003d 0.1)

RarEntry::getAttr — Повертає атрибути елемента архіву

### Опис

public **RarEntry::getAttr**(): int

Повертає атрибути архіву, що залежать від операційної системи.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає атрибути або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **RarEntry::getAttr()****

` <?php$rar_fileu003du003drar_open('example.rar') or die("Не удалося відкрити Rar архів");$entry u003d rar_entry_get($rar_file, 'dir/in/the/archive') or die("Не удалось найти такую запись");$host_os u003d $entry->getHostOs();$attr u003d $entry->getAttr();switch($host_os) {    case RAR_HOST_MSDOS:    case RAR_HOST_OS2:    case RAR_HOST_WIN32:    case RAR_HOST_MACOS:        printf(" %c%c%c%c%c%c
",                ($attr & 0x08) ? 'V' : '.',                ($attr & 0x10) ? 'D' : '.',                ($attr & 0x01) ? 'R' : '.',                ($attr & 0x02) ? 'H' : '.',                ($attr & 0x04) ? 'S' : '.',                ($attr & 0x20) ? 'A' : '.');        break;    case RAR_HOST_UNIX:    case RAR_HOST_BEOS :        switch ($attr & 0xF000)        {            case 0x4000:                printf("d");                break;            case 0xA000:                printf("l");                break;            default:                printf("-");                break;        }        printf("%c %c%c%c%c%c%c%c%c
",                ($attr & 0x0100) ? 'r' : '-',                ($attr & 0x0080) ? 'w' : '-',                ($attr & 0x0040) ? (($attr & 0x0800) ? 's' :'x'):(($attr & 0x0800) ? 'S':'-'),                ($attr & 0x0020) ? 'r' : '-',                ($attr & 0x0010) ? 'w' : ' -',                ($attr & 0x0008) ? (($attr & 0x0400) ? 's':'x'):(($attr & 0x0400) ? 'S':'-'),                ($attr & 0x0004) ? 'r' : '-',                ($attr & 0x0002) ? 'w' : '-',                ($attr & 0x0001) ? 'x' : '-');        break;}rar_close($rar_file);? > `

### Дивіться також

- [RarEntry::getHostOs()](rarentry.gethostos.md) - Повертає
оригінальну ОС елемента
- Константи [RarEntry](class.rarentry.md)
