- [«
CallbackFilterIterator::\_\_construct](callbackfilteriterator.construct.md)
- [DirectoryIterator::\_\_construct
»](directoryiterator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас DirectoryIterator

# Клас DirectoryIterator

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас DirectoryIterator надає простий інтерфейс для перегляду
вмісту каталогів файлової системи.

## Огляд класів

class **DirectoryIterator** extends
[SplFileInfo](class.splfileinfo.md) implements
[SeekableIterator](class.seekableiterator.md) {

/\* Методи \*/

public [\_\_construct](directoryiterator.construct.md)(string
`$directory`)

public [current](directoryiterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getATime](directoryiterator.getatime.md)(): int

public [getBasename](directoryiterator.getbasename.md)(string
`$suffix` u003d ""): string

public [getCTime](directoryiterator.getctime.md)(): int

public [getExtension](directoryiterator.getextension.md)(): string

public [getFilename](directoryiterator.getfilename.md)(): string

public [getGroup](directoryiterator.getgroup.md)(): int

public [getInode](directoryiterator.getinode.md)(): int

public [getMTime](directoryiterator.getmtime.md)(): int

public [getOwner](directoryiterator.getowner.md)(): int

public [getPath](directoryiterator.getpath.md)(): string

public [getPathname](directoryiterator.getpathname.md)(): string

public [getPerms](directoryiterator.getperms.md)(): int

public [getSize](directoryiterator.getsize.md)(): int

public [getType](directoryiterator.gettype.md)(): string

public [isDir](directoryiterator.isdir.md)(): bool

public [isDot](directoryiterator.isdot.md)(): bool

public [isExecutable](directoryiterator.isexecutable.md)(): bool

public [isFile](directoryiterator.isfile.md)(): bool

public [isLink](directoryiterator.islink.md)(): bool

public [isReadable](directoryiterator.isreadable.md)(): bool

public [isWritable](directoryiterator.iswritable.md)(): bool

public [key](directoryiterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](directoryiterator.next.md)(): void

public [rewind](directoryiterator.rewind.md)(): void

public [seek](directoryiterator.seek.md)(int `$offset`): void

public [\_\_toString](directoryiterator.tostring.md)(): string

public [valid](directoryiterator.valid.md)(): bool

/\* Наслідувані методи \*/

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

## Зміст

- [DirectoryIterator::\_\_construct](directoryiterator.construct.md)
— Створює новий ітератор директорій на шляху
- [DirectoryIterator::current](directoryiterator.current.md) -
Повертає поточний елемент DirectoryIterator
- [DirectoryIterator::getATime](directoryiterator.getatime.md) -
Повертає час останнього доступу до поточного елемента
DirectoryIterator
- [DirectoryIterator::getBasename](directoryiterator.getbasename.md)
— Повертає ім'я файлу (без розширення) поточного елемента
DirectoryIterator
- [DirectoryIterator::getCTime](directoryiterator.getctime.md) -
Повертає час останньої зміни inode поточного елемента
DirectoryIterator
- [DirectoryIterator::getExtension](directoryiterator.getextension.md)
— Повертає розширення файлу
- [DirectoryIterator::getFilename](directoryiterator.getfilename.md)
— Повертає ім'я файлу поточного елемента DirectoryIterator
- [DirectoryIterator::getGroup](directoryiterator.getgroup.md) -
Повертає ідентифікатор групи поточного елемента DirectoryIterator
- [DirectoryIterator::getInode](directoryiterator.getinode.md) -
Повертає inode поточного елемента DirectoryIterator
- [DirectoryIterator::getMTime](directoryiterator.getmtime.md) -
Повертає час останньої зміни поточного елемента
DirectoryIterator
- [DirectoryIterator::getOwner](directoryiterator.getowner.md) -
Повертає ідентифікатор власника поточного елемента
DirectoryIterator
- [DirectoryIterator::getPath](directoryiterator.getpath.md) -
Повертає шлях до поточного елементу DirectoryIterator без імені
файлу
- [DirectoryIterator::getPathname](directoryiterator.getpathname.md)
— Повертає шлях та ім'я файлу поточного елемента DirectoryIterator
- [DirectoryIterator::getPerms](directoryiterator.getperms.md) -
Повертає набір прав для поточного елемента DirectoryIterator item
- [DirectoryIterator::getSize](directoryiterator.getsize.md) -
Повертає розмір поточного елемента DirectoryIterator
- [DirectoryIterator::getType](directoryiterator.gettype.md) -
Визначає тип поточного елемента DirectoryIterator
- [DirectoryIterator::isDir](directoryiterator.isdir.md) -
Визначає, чи є поточний елемент DirectoryIterator
директорією
- [DirectoryIterator::isDot](directoryiterator.isdot.md) -
Визначає, чи є поточний елемент DirectoryIterator '.' або
'..'
- [DirectoryIterator::isExecutable](directoryiterator.isexecutable.md)
— Визначає, чи є поточний елемент DirectoryIterator
виконуваним
- [DirectoryIterator::isFile](directoryiterator.isfile.md) -
Визначає, чи поточний елемент DirectoryIterator є звичайним
файлом
- [DirectoryIterator::isLink](directoryiterator.islink.md) -
Визначає, чи є поточний елемент DirectoryIterator
символічним посиланням
- [DirectoryIterator::isReadable](directoryiterator.isreadable.md) -
Визначає, чи доступний поточний елемент DirectoryIterator для читання
- [DirectoryIterator::isWritable](directoryiterator.iswritable.md) -
Визначає, чи доступний поточний елемент DirectoryIterator для запису
- [DirectoryIterator::key](directoryiterator.key.md) — Повертає
ключ поточного елемента DirectoryIterator
- [DirectoryIterator::next](directoryiterator.next.md) — Переміщує
вказівник на наступний елемент DirectoryIterator
- [DirectoryIterator::rewind](directoryiterator.rewind.md) -
Встановлює вказівник на перший елемент DirectoryIterator
- [DirectoryIterator::seek](directoryiterator.seek.md) — Переміщує
покажчик DirectoryIterator на певну позицію
- [DirectoryIterator::\_\_toString](directoryiterator.tostring.md) -
Повертає ім'я файлу у вигляді рядка
- [DirectoryIterator::valid](directoryiterator.valid.md) -
Перевіряє, чи поточний елемент DirectoryIterator є допустимим
файлом
