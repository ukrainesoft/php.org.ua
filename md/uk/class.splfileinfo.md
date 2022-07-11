- [«Обробка файлів](spl.files.md)
- [SplFileInfo::\_\_construct »](splfileinfo.construct.md)

- [PHP Manual](index.md)
- [Обробка файлів](spl.files.md)
- Клас SplFileInfo

# Клас SplFileInfo

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

## Вступ

Клас SplFileInfo пропонує високорівневий об'єктно-орієнтований
інтерфейс для інформації для окремого файлу.

## Огляд класів

class **SplFileInfo** implements [Stringable](class.stringable.md) {

/\* Методи \*/

public [\_\_construct](splfileinfo.construct.md)(string `$filename`)

public [getATime](splfileinfo.getatime.md)(): int\|false

public [getBasename](splfileinfo.getbasename.md)(string `$suffix` u003d
""): string

public [getCTime](splfileinfo.getctime.md)(): int\|false

public [getExtension](splfileinfo.getextension.md)(): string

public [getFileInfo](splfileinfo.getfileinfo.md)(?string `$class` u003d
**`null`**): [SplFileInfo](class.splfileinfo.md)

public [getFilename](splfileinfo.getfilename.md)(): string

public [getGroup](splfileinfo.getgroup.md)(): int\|false

public [getInode](splfileinfo.getinode.md)(): int\|false

public [getLinkTarget](splfileinfo.getlinktarget.md)(): string\|false

public [getMTime](splfileinfo.getmtime.md)(): int\|false

public [getOwner](splfileinfo.getowner.md)(): int\|false

public [getPath](splfileinfo.getpath.md)(): string

public [getPathInfo](splfileinfo.getpathinfo.md)(?string `$class` u003d
**`null`**): ?[SplFileInfo](class.splfileinfo.md)

public [getPathname](splfileinfo.getpathname.md)(): string

public [getPerms](splfileinfo.getperms.md)(): int\|false

public [getRealPath](splfileinfo.getrealpath.md)(): string\|false

public [getSize](splfileinfo.getsize.md)(): int\|false

public [getType](splfileinfo.gettype.md)(): string\|false

public [isDir](splfileinfo.isdir.md)(): bool

public [isExecutable](splfileinfo.isexecutable.md)(): bool

public [isFile](splfileinfo.isfile.md)(): bool

public [isLink](splfileinfo.islink.md)(): bool

public [isReadable](splfileinfo.isreadable.md)(): bool

public [isWritable](splfileinfo.iswritable.md)(): bool

public [openFile](splfileinfo.openfile.md)(string `$mode` u003d "r", bool
`$useIncludePath` u003d **`false`**, ?resource `$context` u003d **`null`**):
[SplFileObject](class.splfileobject.md)

public [setFileClass](splfileinfo.setfileclass.md)(string `$class` u003d
SplFileObject::class): void

public [setInfoClass](splfileinfo.setinfoclass.md)(string `$class` u003d
SplFileInfo::class): void

public [\_\_toString](splfileinfo.tostring.md)(): string

}

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------|
| 8.0.0 | Клас **SplFileInfo** тепер реалізує [Stringable](class.stringable.md). |

## Зміст

- [SplFileInfo::\_\_construct](splfileinfo.construct.md) — Створити
новий об'єкт SplFileInfo
- [SplFileInfo::getATime](splfileinfo.getatime.md) — Отримує час
останнього доступу до файлу
- [SplFileInfo::getBasename](splfileinfo.getbasename.md) — Отримує
базове ім'я файлу
- [SplFileInfo::getCTime](splfileinfo.getctime.md) — Повертає
час останньої зміни індексного дескриптора файлу
- [SplFileInfo::getExtension](splfileinfo.getextension.md) -
Отримує розширення файлу
- [SplFileInfo::getFileInfo](splfileinfo.getfileinfo.md) — Отримує
об'єкт SplFileInfo для файлу
- [SplFileInfo::getFilename](splfileinfo.getfilename.md) — Отримує
ім'я файлу
- [SplFileInfo::getGroup](splfileinfo.getgroup.md) — Отримує групу
файлу
- [SplFileInfo::getInode](splfileinfo.getinode.md) — Отримує
індексний дескриптор для файлу
- [SplFileInfo::getLinkTarget](splfileinfo.getlinktarget.md) -
Отримує шлях посилання
- [SplFileInfo::getMTime](splfileinfo.getmtime.md) — Отримує час
останньої зміни
- [SplFileInfo::getOwner](splfileinfo.getowner.md) — Отримує
власника файлу
- [SplFileInfo::getPath](splfileinfo.getpath.md) — Отримує шлях без
імені файлу
- [SplFileInfo::getPathInfo](splfileinfo.getpathinfo.md) — Отримує
об'єкт SplFileInfo для заданого шляху
- [SplFileInfo::getPathname](splfileinfo.getpathname.md) — Отримує
шлях до файлу
- [SplFileInfo::getPerms](splfileinfo.getperms.md) — Отримує список
дозволів
- [SplFileInfo::getRealPath](splfileinfo.getrealpath.md) — Отримує
абсолютний шлях до файлу
- [SplFileInfo::getSize](splfileinfo.getsize.md) — Отримує розмір
файлу
- [SplFileInfo::getType](splfileinfo.gettype.md) — Отримує тип
файлу
- [SplFileInfo::isDir](splfileinfo.isdir.md) — Вказує, є
чи файл каталогом
- [SplFileInfo::isExecutable](splfileinfo.isexecutable.md)
Вказує, чи файл виконується
- [SplFileInfo::isFile](splfileinfo.isfile.md) — Вказує,
чи посилається об'єкт на звичайний файл
- [SplFileInfo::isLink](splfileinfo.islink.md) — Вказує, є
чи файл посиланням
- [SplFileInfo::isReadable](splfileinfo.isreadable.md) — Вказує,
чи є файл доступним для читання
- [SplFileInfo::isWritable](splfileinfo.iswritable.md) — Вказує,
є файл доступним для запису
- [SplFileInfo::openFile](splfileinfo.openfile.md) — Отримує об'єкт
SplFileObject для файлу
- [SplFileInfo::setFileClass](splfileinfo.setfileclass.md) — Задає
ім'я класу, який використовуватиметься методом
SplFileInfo::openFile
- [SplFileInfo::setInfoClass](splfileinfo.setinfoclass.md) — Задає
ім'я класу, об'єкти якого створюватимуться методами
SplFileInfo::getFileInfo та SplFileInfo::getPathInfo
- [SplFileInfo::\_\_toString](splfileinfo.tostring.md) - Повертає
шлях до файлу у вигляді рядка
