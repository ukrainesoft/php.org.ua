- [« Phar::webPhar](phar.webphar.md)
- [PharData::addEmptyDir »](phardata.addemptydir.md)

- [PHP Manual](index.md)
- [Phar] (book.phar.md)
- Клас PharData

# Клас PharData

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

## Вступ

Клас PharData надає високорівневий інтерфейс доступу та
створення нездійснюваних tar- та zip-архівів. Оскільки архіви цих типів
не містять заглушку і не можуть бути виконані модулем Phar, є
можливість створювати та обробляти звичайні zip- та tar-файли, використовуючи
клас PharData, навіть якщо параметр `phar.readonly` у php.ini дорівнює `1`.

## Огляд класів

class **PharData** extends
[RecursiveDirectoryIterator](class.recursivedirectoryiterator.md)
implements [Countable](class.countable.md),
[ArrayAccess](class.arrayaccess.md) {

/\* Успадковані константи \*/

const int `FilesystemIterator::CURRENT_AS_PATHNAME` u003d 32;

const int `FilesystemIterator::CURRENT_AS_FILEINFO` u003d 0;

const int `FilesystemIterator::CURRENT_AS_SELF` u003d 16;

const int `FilesystemIterator::CURRENT_MODE_MASK` u003d 240;

const int `FilesystemIterator::KEY_AS_PATHNAME` u003d 0;

const int `FilesystemIterator::KEY_AS_FILENAME` u003d 256;

const int `FilesystemIterator::FOLLOW_SYMLINKS` u003d 512;

const int `FilesystemIterator::KEY_MODE_MASK` u003d 3840;

const int `FilesystemIterator::NEW_CURRENT_AND_KEY` u003d 256;

const int `FilesystemIterator::SKIP_DOTS` u003d 4096;

const int `FilesystemIterator::UNIX_PATHS` u003d 8192;

/\* Методи \*/

public [\_\_construct](phardata.construct.md)(
string `$filename`,
int `$flags` u003d FilesystemIterator::SKIP_DOTS \|
FilesystemIterator::UNIX_PATHS,
?string `$alias` u003d **`null`**,
int `$format` u003d 0
)

public [addEmptyDir](phardata.addemptydir.md)(string `$directory`):
void

public [addFile](phardata.addfile.md)(string `$filename`, ?string
`$localName` u003d **`null`**): void

public [addFromString](phardata.addfromstring.md)(string `$localName`,
string `$contents`): void

public [buildFromDirectory](phardata.buildfromdirectory.md)(string
`$directory`, string `$pattern` u003d ""): array

public
[buildFromIterator](phardata.buildfromiterator.md)([Traversable](class.traversable.md)
`$iterator`, ?string `$baseDirectory` u003d **`null`**): array

public [compress](phardata.compress.md)(int `$compression`, ?string
`$extension` u003d **`null`**): ?[PharData](class.phardata.md)

public [compressFiles](phardata.compressfiles.md)(int `$compression`):
void

public [convertToData](phardata.converttodata.md)(?int `$format` u003d
**`null`**, ?int `$compression` u003d **`null`**, ?string `$extension` u003d
**`null`**): ?[PharData](class.phardata.md)

public [convertToExecutable](phardata.converttoexecutable.md)(?int
`$format` u003d **`null`**, ?int `$compression` u003d **`null`**, ?string
`$extension` u003d **`null`**): ?[Phar](class.phar.md)

public [copy](phardata.copy.md)(string `$from`, string `$to`): bool

public [decompress](phardata.decompress.md)(?string `$extension` u003d
**`null`**): ?[PharData](class.phardata.md)

public [decompressFiles](phardata.decompressfiles.md)(): bool

public [delMetadata](phardata.delmetadata.md)(): bool

public [delete](phardata.delete.md)(string `$localName`): bool

public [extractTo](phardata.extractto.md)(string `$directory`,
array\|string\|null `$files` u003d **`null`**, bool `$overwrite` u003d
**`false`**): bool

public [isWritable](phardata.iswritable.md)(): bool

public [offsetSet](phardata.offsetset.md)(string `$localName`,
resource\|string `$value`): void

public [offsetUnset](phardata.offsetunset.md)(string `$localName`):
void

public [setAlias](phardata.setalias.md)(string `$alias`): bool

public [setDefaultStub](phardata.setdefaultstub.md)(?string `$index` u003d
**`null`**, ?string `$webIndex` u003d **`null`**): bool

public
[setMetadata](phardata.setmetadata.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$metadata`): void

public [setSignatureAlgorithm](phardata.setsignaturealgorithm.md)(int
`$algo`, ?string `$privateKey` u003d **`null`**): void

public [setStub](phardata.setstub.md)(string `$stub`, int `$len` u003d
-1): bool

public [\_\_destruct](phardata.destruct.md)()

/\* Наслідувані методи \*/

public
[RecursiveDirectoryIterator::getChildren](recursivedirectoryiterator.getchildren.md)():
[RecursiveDirectoryIterator](class.recursivedirectoryiterator.md)

public
[RecursiveDirectoryIterator::getSubPath](recursivedirectoryiterator.getsubpath.md)():
string

public
[RecursiveDirectoryIterator::getSubPathname](recursivedirectoryiterator.getsubpathname.md)():
string

public
[RecursiveDirectoryIterator::hasChildren](recursivedirectoryiterator.haschildren.md)(bool
`$allowLinks` u003d **`false`**): bool

public
[RecursiveDirectoryIterator::key](recursivedirectoryiterator.key.md)():
string

public
[RecursiveDirectoryIterator::next](recursivedirectoryiterator.next.md)():
void

public
[RecursiveDirectoryIterator::rewind](recursivedirectoryiterator.rewind.md)():
void

public [FilesystemIterator::current](filesystemiterator.current.md)():
string\|[SplFileInfo](class.splfileinfo.md)\|[FilesystemIterator](class.filesystemiterator.md)

public
[FilesystemIterator::getFlags](filesystemiterator.getflags.md)(): int

public [FilesystemIterator::key](filesystemiterator.key.md)(): string

public [FilesystemIterator::next](filesystemiterator.next.md)(): void

public [FilesystemIterator::rewind](filesystemiterator.rewind.md)():
void

public
[FilesystemIterator::setFlags](filesystemiterator.setflags.md)(int
`$flags`): void

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

## Зміст

- [PharData::addEmptyDir](phardata.addemptydir.md) — Додати порожню
директорію в tar/zip-архів
- [PharData::addFile](phardata.addfile.md) — Додати наявні
файли до tar/zip-архіву
- [PharData::addFromString](phardata.addfromstring.md) — Створити
файл із заданим вмістом у tar/zip-архіві
- [PharData::buildFromDirectory](phardata.buildfromdirectory.md) -
Створює tar/zip-архів із файлів у директорії
- [PharData::buildFromIterator](phardata.buildfromiterator.md) -
Створення tar/zip-архіву за допомогою ітератора
- [PharData::compress](phardata.compress.md) - Стискає весь архів
tar/zip, використовуючи стиснення Gzip або Bzip2
- [PharData::compressFiles](phardata.compressfiles.md) — Стиснути все
файли у поточному tar/zip-архіві
- [PharData::\_\_construct](phardata.construct.md) - Конструктор
об'єкта PharData
- [PharData::convertToData](phardata.converttodata.md) - Конвертація
phar-архіву в tar/zip-архів
- [PharData::convertToExecutable](phardata.converttoexecutable.md) -
Конвертація tar/zip-архіву з даними в phar-архів, що запускається
- [PharData::copy](phardata.copy.md) — Скопіювати файл із
tar/zip-архіву в новий файл усередині нього ж
- [PharData::decompress](phardata.decompress.md) — Розпакувати весь
Phar-архів
- [PharData::decompressFiles](phardata.decompressfiles.md) -
Розпакувати всі файли у поточному zip-архіві
- [PharData::delMetadata](phardata.delmetadata.md) — Видалити
глобальні метадані для zip-архіву
- [PharData::delete](phardata.delete.md) — Видалити файл із
tar/zip-архіву
- [PharData::\_\_destruct](phardata.destruct.md) - Знищує
нездійснюваний об'єкт архіву tar або zip
- [PharData::extractTo](phardata.extractto.md) — Вийняти вміст
tar/zip-архіву в директорію
- [PharData::isWritable](phardata.iswritable.md) — Перевірити, чи можна
модифікувати tar/zip-архів
- [PharData::offsetSet](phardata.offsetset.md) — Зміна
вмісту файлу
- [PharData::offsetUnset](phardata.offsetunset.md) — Видалити файл із
tar/zip-архіву
- [PharData::setAlias](phardata.setalias.md) — Функція заглушка
(Phar::setAlias не можна використовувати для PharData)
- [PharData::setDefaultStub](phardata.setdefaultstub.md) — Функція
заглушка (Phar::setDefaultStub не можна використовувати для PharData)
- [PharData::setMetadata](phardata.setmetadata.md) — Встановити
метадані phar-архіву
- [PharData::setSignatureAlgorithm](phardata.setsignaturealgorithm.md)
— Встановити алгоритм підписання phar-архіву та застосування його
- [PharData::setStub](phardata.setstub.md) — Функція заглушка
(Phar::setStub не можна використовувати для PharData)
