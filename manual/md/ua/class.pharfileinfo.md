- [« PharData::setStub](phardata.setstub.md)
- [PharFileInfo::chmod »](pharfileinfo.chmod.md)

- [PHP Manual](index.md)
- [Phar] (book.phar.md)
- Клас PharFileInfo

# Клас PharFileInfo

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

## Вступ

Клас PharFileInfo надає високорівневий інтерфейс до вмісту
та атрибутів окремого файлу в phar-архіві.

## Огляд класів

class **PharFileInfo** extends [SplFileInfo](class.splfileinfo.md) {

/\* Методи \*/

public [\_\_construct](pharfileinfo.construct.md)(string `$filename`)

public [chmod](pharfileinfo.chmod.md)(int `$perms`): void

public [compress](pharfileinfo.compress.md)(int `$compression`): bool

public [decompress](pharfileinfo.decompress.md)(): bool

public [delMetadata](pharfileinfo.delmetadata.md)(): bool

public [getCRC32](pharfileinfo.getcrc32.md)(): int

public [getCompressedSize](pharfileinfo.getcompressedsize.md)(): int

public [getContent](pharfileinfo.getcontent.md)(): string

public [getMetadata](pharfileinfo.getmetadata.md)(array
`$unserializeOptions` u003d \[\]):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getPharFlags](pharfileinfo.getpharflags.md)(): int

public [hasMetadata](pharfileinfo.hasmetadata.md)(): bool

public [isCRCChecked](pharfileinfo.iscrcchecked.md)(): bool

public [isCompressed](pharfileinfo.iscompressed.md)(?int
`$compression` u003d **`null`**): bool

public
[setMetadata](pharfileinfo.setmetadata.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$metadata`): void

public [\_\_destruct](pharfileinfo.destruct.md)()

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

- [PharFileInfo::chmod](pharfileinfo.chmod.md) — Встановлення прав
доступу
- [PharFileInfo::compress](pharfileinfo.compress.md) — Стиснути поточний
файл за допомогою zlib або bzip2
- [PharFileInfo::\_\_construct](pharfileinfo.construct.md) -
Конструктор об'єкту PharFileInfo
- [PharFileInfo::decompress](pharfileinfo.decompress.md) — Розтискає
поточний файл
- [PharFileInfo::delMetadata](pharfileinfo.delmetadata.md) — Видалити
метадані файлу
- [PharFileInfo::\_\_destruct](pharfileinfo.destruct.md) -
Знищує вхідний об'єкт Phar
- [PharFileInfo::getCRC32](pharfileinfo.getcrc32.md) — Отримати
контрольну суму CRC32
- [PharFileInfo::getCompressedSize](pharfileinfo.getcompressedsize.md)
— Отримати реальний розмір файлу на диску з урахуванням
стиску
- [PharFileInfo::getContent](pharfileinfo.getcontent.md) — Отримати
повний вміст файлу запису
- [PharFileInfo::getMetadata](pharfileinfo.getmetadata.md) -
Отримати метадані, пов'язані з файлом
- [PharFileInfo::getPharFlags](pharfileinfo.getpharflags.md) -
Отримати прапори файлу в phar-архіві
- [PharFileInfo::hasMetadata](pharfileinfo.hasmetadata.md) -
Перевірити, чи є у файлу метадані
- [PharFileInfo::isCRCChecked](pharfileinfo.iscrcchecked.md) -
Визначити, чи пройшов файл перевірку CRC
- [PharFileInfo::isCompressed](pharfileinfo.iscompressed.md) -
Перевірити, чи стиснутий файл
- [PharFileInfo::setMetadata](pharfileinfo.setmetadata.md) -
Встановлення метаданих для файлу
