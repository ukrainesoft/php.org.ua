- [« SplFileObject::valid](splfileobject.valid.md)
- [SplTempFileObject::\_\_construct
»](spltempfileobject.construct.md)

- [PHP Manual](index.md)
- [Обробка файлів](spl.files.md)
- Клас SplTempFileObject

# Клас SplTempFileObject

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

## Вступ

Клас SplTempFileObject пропонує об'єктно-орієнтований інтерфейс
для роботи з тимчасовим файлом

## Огляд класів

class **SplTempFileObject** extends
[SplFileObject](class.splfileobject.md) {

/\* Успадковані константи \*/

const int `SplFileObject::DROP_NEW_LINE` u003d 1;

const int `SplFileObject::READ_AHEAD` u003d 2;

const int `SplFileObject::SKIP_EMPTY` u003d 4;

const int `SplFileObject::READ_CSV` u003d 8;

/\* Методи \*/

public [\_\_construct](spltempfileobject.construct.md)(int
`$maxMemory` u003d 2 \* 1024 \* 1024)

/\* Наслідувані методи \*/

public [SplFileObject::current](splfileobject.current.md)():
string\|array\|false

public [SplFileObject::eof](splfileobject.eof.md)(): bool

public [SplFileObject::fflush](splfileobject.fflush.md)(): bool

public [SplFileObject::fgetc](splfileobject.fgetc.md)(): string\|false

public [SplFileObject::fgetcsv](splfileobject.fgetcsv.md)(string
`$separator` u003d ",", string `$enclosure` u003d "\"", string `$escape` u003d
"\"): array\|false

public [SplFileObject::fgets](splfileobject.fgets.md)(): string

public [SplFileObject::fgetss](splfileobject.fgetss.md)(string
`$allowable_tags` u003d ?): string

public [SplFileObject::flock](splfileobject.flock.md)(int
`$operation`, int `&$wouldBlock` u003d **`null`**): bool

public [SplFileObject::fpassthru](splfileobject.fpassthru.md)(): int

public [SplFileObject::fputcsv](splfileobject.fputcsv.md)(
array `$fields`,
string `$separator` u003d ",",
string `$enclosure` u003d "\"",
string `$escape` u003d "\\",
string `$eol` u003d "
"
): int\|false

public [SplFileObject::fread](splfileobject.fread.md)(int `$length`):
string\|false

public [SplFileObject::fscanf](splfileobject.fscanf.md)(string
`$format`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`): array\|int\|null

public [SplFileObject::fseek](splfileobject.fseek.md)(int `$offset`,
int `$whence` u003d **`SEEK_SET`**): int

public [SplFileObject::fstat](splfileobject.fstat.md)(): array

public [SplFileObject::ftell](splfileobject.ftell.md)(): int\|false

public [SplFileObject::ftruncate](splfileobject.ftruncate.md)(int
`$size`): bool

public [SplFileObject::fwrite](splfileobject.fwrite.md)(string
`$data`, int `$length` u003d 0): int\|false

public [SplFileObject::getChildren](splfileobject.getchildren.md)():
?[RecursiveIterator](class.recursiveiterator.md)

public
[SplFileObject::getCsvControl](splfileobject.getcsvcontrol.md)():
array

public [SplFileObject::getFlags](splfileobject.getflags.md)(): int

public
[SplFileObject::getMaxLineLen](splfileobject.getmaxlinelen.md)(): int

public [SplFileObject::hasChildren](splfileobject.haschildren.md)():
bool

public [SplFileObject::key](splfileobject.key.md)(): int

public [SplFileObject::next](splfileobject.next.md)(): void

public [SplFileObject::rewind](splfileobject.rewind.md)(): void

public [SplFileObject::seek](splfileobject.seek.md)(int `$line`): void

public
[SplFileObject::setCsvControl](splfileobject.setcsvcontrol.md)(string
`$separator` u003d ",", string `$enclosure` u003d "\"", string `$escape` u003d
"\"): void

public [SplFileObject::setFlags](splfileobject.setflags.md)(int
`$flags`): void

public
[SplFileObject::setMaxLineLen](splfileobject.setmaxlinelen.md)(int
`$maxLength`): void

public [SplFileObject::valid](splfileobject.valid.md)(): bool

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

- [SplTempFileObject::\_\_construct](spltempfileobject.construct.md)
— Створює новий об'єкт тимчасового файлу
