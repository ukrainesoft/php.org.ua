- [« EmptyIterator::valid](emptyiterator.valid.md)
- [FilesystemIterator::\_\_construct
»](filesystemiterator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас FilesystemIterator

# Клас FilesystemIterator

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Ітератор файлової системи

## Огляд класів

class **FilesystemIterator** extends
[DirectoryIterator](class.directoryiterator.md) {

/\* Константи \*/

const int `CURRENT_AS_PATHNAME` u003d 32;

const int `CURRENT_AS_FILEINFO` u003d 0;

const int `CURRENT_AS_SELF` u003d 16;

const int `CURRENT_MODE_MASK` u003d 240;

const int `KEY_AS_PATHNAME` u003d 0;

const int `KEY_AS_FILENAME` u003d 256;

const int `FOLLOW_SYMLINKS` u003d 512;

const int `KEY_MODE_MASK` u003d 3840;

const int `NEW_CURRENT_AND_KEY` u003d 256;

const int `SKIP_DOTS` u003d 4096;

const int `UNIX_PATHS` u003d 8192;

/\* Методи \*/

public [\_\_construct](filesystemiterator.construct.md)(string
`$directory`, int `$flags` u003d FilesystemIterator::KEY_AS_PATHNAME \|
FilesystemIterator::CURRENT_AS_FILEINFO \|
FilesystemIterator::SKIP_DOTS)

public [current](filesystemiterator.current.md)():
string\|[SplFileInfo](class.splfileinfo.md)\|[FilesystemIterator](class.filesystemiterator.md)

public [getFlags](filesystemiterator.getflags.md)(): int

public [key](filesystemiterator.key.md)(): string

public [next](filesystemiterator.next.md)(): void

public [rewind](filesystemiterator.rewind.md)(): void

public [setFlags](filesystemiterator.setflags.md)(int `$flags`): void

/\* Наслідувані методи \*/

public [DirectoryIterator::current](directoryiterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [DirectoryIterator::getATime](directoryiterator.getatime.md)():
int

public
[DirectoryIterator::getBasename](directoryiterator.getbasename.md)(string
`$suffix` u003d ""): string

public [DirectoryIterator::getCTime](directoryiterator.getctime.md)():
int

public
[DirectoryIterator::getExtension](directoryiterator.getextension.md)():
string

public
[DirectoryIterator::getFilename](directoryiterator.getfilename.md)():
string

public [DirectoryIterator::getGroup](directoryiterator.getgroup.md)():
int

public [DirectoryIterator::getInode](directoryiterator.getinode.md)():
int

public [DirectoryIterator::getMTime](directoryiterator.getmtime.md)():
int

public [DirectoryIterator::getOwner](directoryiterator.getowner.md)():
int

public [DirectoryIterator::getPath](directoryiterator.getpath.md)():
string

public
[DirectoryIterator::getPathname](directoryiterator.getpathname.md)():
string

public [DirectoryIterator::getPerms](directoryiterator.getperms.md)():
int

public [DirectoryIterator::getSize](directoryiterator.getsize.md)():
int

public [DirectoryIterator::getType](directoryiterator.gettype.md)():
string

public [DirectoryIterator::isDir](directoryiterator.isdir.md)(): bool

public [DirectoryIterator::isDot](directoryiterator.isdot.md)(): bool

public
[DirectoryIterator::isExecutable](directoryiterator.isexecutable.md)():
bool

public [DirectoryIterator::isFile](directoryiterator.isfile.md)():
bool

public [DirectoryIterator::isLink](directoryiterator.islink.md)():
bool

public
[DirectoryIterator::isReadable](directoryiterator.isreadable.md)():
bool

public
[DirectoryIterator::isWritable](directoryiterator.iswritable.md)():
bool

public [DirectoryIterator::key](directoryiterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [DirectoryIterator::next](directoryiterator.next.md)(): void

public [DirectoryIterator::rewind](directoryiterator.rewind.md)():
void

public [DirectoryIterator::seek](directoryiterator.seek.md)(int
`$offset`): void

public
[DirectoryIterator::\_\_toString](directoryiterator.tostring.md)():
string

public [DirectoryIterator::valid](directoryiterator.valid.md)(): bool

public [SplFileInfo::getATime](splfileinfo.getatime.md)(): int\|false

public [SplFileInfo::getBasename](splfileinfo.getbasename.md)(string
`$suffix` u003d ""): string

public [SplFileInfo::getCTime](splfileinfo.getctime.md)(): int\|false

public [SplFileInfo::getExtension](splfileinfo.getextension.md)():
string

public [SplFileInfo::getFileInfo](splfileinfo.getfileinfo.md)(?string
`$class` u003d **`null`**): [SplFileInfo](class.splfileinfo.md)

public [SplFileInfo::getFilename](splfileinfo.getfilename.md)():
string

public [SplFileInfo::getGroup](splfileinfo.getgroup.md)(): int\|false

public [SplFileInfo::getInode](splfileinfo.getinode.md)(): int\|false

public [SplFileInfo::getLinkTarget](splfileinfo.getlinktarget.md)():
string\|false

public [SplFileInfo::getMTime](splfileinfo.getmtime.md)(): int\|false

public [SplFileInfo::getOwner](splfileinfo.getowner.md)(): int\|false

public [SplFileInfo::getPath](splfileinfo.getpath.md)(): string

public [SplFileInfo::getPathInfo](splfileinfo.getpathinfo.md)(?string
`$class` u003d **`null`**): ?[SplFileInfo](class.splfileinfo.md)

public [SplFileInfo::getPathname](splfileinfo.getpathname.md)():
string

public [SplFileInfo::getPerms](splfileinfo.getperms.md)(): int\|false

public [SplFileInfo::getRealPath](splfileinfo.getrealpath.md)():
string\|false

public [SplFileInfo::getSize](splfileinfo.getsize.md)(): int\|false

public [SplFileInfo::getType](splfileinfo.gettype.md)(): string\|false

public [SplFileInfo::isDir](splfileinfo.isdir.md)(): bool

public [SplFileInfo::isExecutable](splfileinfo.isexecutable.md)():
bool

public [SplFileInfo::isFile](splfileinfo.isfile.md)(): bool

public [SplFileInfo::isLink](splfileinfo.islink.md)(): bool

public [SplFileInfo::isReadable](splfileinfo.isreadable.md)(): bool

public [SplFileInfo::isWritable](splfileinfo.iswritable.md)(): bool

public [SplFileInfo::openFile](splfileinfo.openfile.md)(string `$mode`
u003d "r", bool `$useIncludePath` u003d **`false`**, ?resource `$context` u003d
**`null`**): [SplFileObject](class.splfileobject.md)

public [SplFileInfo::setFileClass](splfileinfo.setfileclass.md)(string
`$class` u003d SplFileObject::class): void

public [SplFileInfo::setInfoClass](splfileinfo.setinfoclass.md)(string
`$class` u003d SplFileInfo::class): void

public [SplFileInfo::\_\_toString](splfileinfo.tostring.md)(): string

}

## Зумовлені константи

**`FilesystemIterator::CURRENT_AS_PATHNAME`**
Примушує метод
[FilesystemIterator::current()](filesystemiterator.current.md) повернути
шлях.

**`FilesystemIterator::CURRENT_AS_FILEINFO`**
Примушує метод
[FilesystemIterator::current()](filesystemiterator.current.md) повернути
екземпляр [SplFileInfo](class.splfileinfo.md).

**`FilesystemIterator::CURRENT_AS_SELF`**
Примушує метод
[FilesystemIterator::current()](filesystemiterator.current.md) повернути
$this (FilesystemIterator).

**`FilesystemIterator::CURRENT_MODE_MASK`**
Маскує
[FilesystemIterator::current()](filesystemiterator.current.md)

**`FilesystemIterator::KEY_AS_PATHNAME`**
Примушує метод
[FilesystemIterator::key()](filesystemiterator.key.md) повернути шлях.

**`FilesystemIterator::KEY_AS_FILENAME`**
Примушує метод
[FilesystemIterator::key()](filesystemiterator.key.md) повернути ім'я
файлу.

**`FilesystemIterator::FOLLOW_SYMLINKS`**
Примушує метод
[RecursiveDirectoryIterator::hasChildren()](recursivedirectoryiterator.haschildren.md)
слідувати символічним посиланням.

**`FilesystemIterator::KEY_MODE_MASK`**
Маскує [FilesystemIterator::key()](filesystemiterator.key.md)

**`FilesystemIterator::NEW_CURRENT_AND_KEY`**
Те саме, що
`FilesystemIterator::KEY_AS_FILENAME | FilesystemIterator::CURRENT_AS_FILEINFO`.

**`FilesystemIterator::SKIP_DOTS`**
Пропускає точкові файли (`.` та `..`).

**`FilesystemIterator::UNIX_PATHS`**
Примушує всі шляхи використовувати зворотний сліш у Unix-стилі, незалежно
від налаштувань системи за промовчанням. Зверніть увагу, що `path`,
передано в конструктор, не змінюється.

## Зміст

- [FilesystemIterator::\_\_construct](filesystemiterator.construct.md)
- Створює новий ітератор файлової системи
- [FilesystemIterator::current](filesystemiterator.current.md) -
Поточний файл
- [FilesystemIterator::getFlags](filesystemiterator.getflags.md) -
Отримання прапорів налаштувань об'єкта
- [FilesystemIterator::key](filesystemiterator.key.md) — Визначення
ключа поточного файлу
- [FilesystemIterator::next](filesystemiterator.next.md) -
Переміщення вказівника на наступний файл
- [FilesystemIterator::rewind](filesystemiterator.rewind.md) -
Переміщення вказівника на початок
- [FilesystemIterator::setFlags](filesystemiterator.setflags.md) -
Завдання прапорів обробки
