- [« Формат підпису Phar](phar.fileformat.signature.md)
- [Phar::addEmptyDir »](phar.addemptydir.md)

- [PHP Manual](index.md)
- [Phar] (book.phar.md)
- Клас Phar

# Клас Phar

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

## Вступ

Клас Phar надає високорівневий інтерфейс для доступу та
створення архівів phar.

## Огляд класів

class **Phar** extends
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

public [\_\_construct](phar.construct.md)(string `$filename`, int
`$flags` u003d FilesystemIterator::SKIP_DOTS \|
FilesystemIterator::UNIX_PATHS, ?string `$alias` u003d **`null`**)

public [addEmptyDir](phar.addemptydir.md)(string `$directory`): void

public [addFile](phar.addfile.md)(string `$filename`, ?string
`$localName` u003d **`null`**): void

public [addFromString](phar.addfromstring.md)(string `$localName`,
string `$contents`): void

final public static [apiVersion](phar.apiversion.md)(): string

public [buildFromDirectory](phar.buildfromdirectory.md)(string
`$directory`, string `$pattern` u003d ""): array

public
[buildFromIterator](phar.buildfromiterator.md)([Traversable](class.traversable.md)
`$iterator`, ?string `$baseDirectory` u003d **`null`**): array

final public static [canCompress](phar.cancompress.md)(int
`$compression` u003d 0): bool

final public static [canWrite](phar.canwrite.md)(): bool

public [compress](phar.compress.md)(int `$compression`, ?string
`$extension` u003d **`null`**): ?[Phar](class.phar.md)

public [compressFiles](phar.compressfiles.md)(int `$compression`):
void

public [convertToData](phar.converttodata.md)(?int `$format` u003d
**`null`**, ?int `$compression` u003d **`null`**, ?string `$extension` u003d
**`null`**): ?[PharData](class.phardata.md)

public [convertToExecutable](phar.converttoexecutable.md)(?int
`$format` u003d **`null`**, ?int `$compression` u003d **`null`**, ?string
`$extension` u003d **`null`**): ?[Phar](class.phar.md)

public [copy](phar.copy.md)(string `$from`, string `$to`): bool

public [count](phar.count.md)(int `$mode` u003d **`COUNT_NORMAL`**): int

final public static
[createDefaultStub](phar.createdefaultstub.md)(?string `$index` u003d
**`null`**, ?string `$webIndex` u003d **`null`**): string

public [decompress](phar.decompress.md)(?string `$extension` u003d
**`null`**): ?[Phar](class.phar.md)

public [decompressFiles](phar.decompressfiles.md)(): bool

public [delMetadata](phar.delmetadata.md)(): bool

public [delete](phar.delete.md)(string `$localName`): bool

public [extractTo](phar.extractto.md)(string `$directory`,
array\|string\|null `$files` u003d **`null`**, bool `$overwrite` u003d
**`false`**): bool

public [getAlias](phar.getalias.md)(): ?string

public [getMetadata](phar.getmetadata.md)(array `$unserializeOptions`
u003d \[\]):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getModified](phar.getmodified.md)(): bool

public [getPath](phar.getpath.md)(): string

public [getSignature](phar.getsignature.md)(): array\|false

public [getStub](phar.getstub.md)(): string

final public static
[getSupportedCompression](phar.getsupportedcompression.md)(): array

final public static
[getSupportedSignatures](phar.getsupportedsignatures.md)(): array

public [getVersion](phar.getversion.md)(): string

public [hasMetadata](phar.hasmetadata.md)(): bool

final public static
[interceptFileFuncs](phar.interceptfilefuncs.md)(): void

public [isBuffering](phar.isbuffering.md)(): bool

public [isCompressed](phar.iscompressed.md)(): int\|false

public [isFileFormat](phar.isfileformat.md)(int `$format`): bool

final public static
[isValidPharFilename](phar.isvalidpharfilename.md)(string `$filename`,
bool `$executable` u003d **`true`**): bool

public [isWritable](phar.iswritable.md)(): bool

final public static [loadPhar](phar.loadphar.md)(string `$filename`,
?string `$alias` u003d **`null`**): bool

final public static [mapPhar](phar.mapphar.md)(?string `$alias` u003d
**`null`**, int `$offset` u003d 0): bool

final public static [mount](phar.mount.md)(string `$pharPath`, string
`$externalPath`): void

final public static [mungServer](phar.mungserver.md)(array
`$variables`): void

public [offsetExists](phar.offsetexists.md)(string `$localName`): bool

public [offsetGet](phar.offsetget.md)(string `$localName`):
[SplFileInfo](class.splfileinfo.md)

public [offsetSet](phar.offsetset.md)(string `$localName`,
resource\|string `$value`): void

public [offsetUnset](phar.offsetunset.md)(string `$localName`): void

final public static [running](phar.running.md)(bool `$returnPhar` u003d
**`true`**): string

public [setAlias](phar.setalias.md)(string `$alias`): bool

public [setDefaultStub](phar.setdefaultstub.md)(?string `$index` u003d
**`null`**, ?string `$webIndex` u003d **`null`**): bool

public
[setMetadata](phar.setmetadata.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$metadata`): void

public [setSignatureAlgorithm](phar.setsignaturealgorithm.md)(int
`$algo`, ?string `$privateKey` u003d **`null`**): void

public [setStub](phar.setstub.md)(string `$stub`, int `$len` u003d -1):
bool

public [startBuffering](phar.startbuffering.md)(): void

public [stopBuffering](phar.stopbuffering.md)(): void

final public static [unlinkArchive](phar.unlinkarchive.md)(string
`$filename`): bool

final public static [webPhar](phar.webphar.md)(
?string `$alias` u003d **`null`**,
?string `$index` u003d **`null`**,
?string `$fileNotFoundScript` u003d **`null`**,
array `$mimeTypes` u003d \[\],
?[callable](language.types.callable.md) `$rewrite` u003d **`null`**
): void

public [\_\_destruct](phar.destruct.md)()

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

- [Phar::addEmptyDir](phar.addemptydir.md) - Додає до phar-архіву
порожню директорію
- [Phar::addFile](phar.addfile.md) — Додає в phar-архів файл із
файлової системи
- [Phar::addFromString](phar.addfromstring.md) — Додає до
phar-архів файл з рядка
- [Phar::apiVersion](phar.apiversion.md) — Повертає версію API
- [Phar::buildFromDirectory](phar.buildfromdirectory.md) — Створює
phar-архів із файлів, розташованих усередині директорії
- [Phar::buildFromIterator](phar.buildfromiterator.md) - Створює
phar-архів з ітератора
- [Phar::canCompress](phar.cancompress.md) — Перевіряє, підтримує
чи модуль phar стиск з використанням zlib або bzip2
- [Phar::canWrite](phar.canwrite.md) — Перевіряє, чи підтримує
модуль phar збереження та створення phar-архівів
- [Phar::compress](phar.compress.md) - Стискає весь Phar-архів з
за допомогою Gzip- або Bzip2-стиснення
- [Phar::compressFiles](phar.compressfiles.md) — Стискає всі файли в
поточному Phar-архіві
- [Phar::\_\_construct](phar.construct.md) — Створює об'єкт
Phar-архіву
- [Phar::convertToData](phar.converttodata.md) - Конвертує
phar-архів у нездійсненний tar- або zip-файл
- [Phar::convertToExecutable](phar.converttoexecutable.md) -
Конвертує phar-архів в інший формат файлу.
- [Phar::copy](phar.copy.md) — Копіює один файл усередині phar-архіву
в інший новий файл усередині phar-архіву
- [Phar::count](phar.count.md) — Повертає кількість записів
(файлів) у Phar-архіві
- [Phar::createDefaultStub](phar.createdefaultstub.md) — Створити
заглушку у форматі phar-архіву
- [Phar::decompress](phar.decompress.md) - Розпаковує весь
Phar-архів
- [Phar::decompressFiles](phar.decompressfiles.md) — Розпаковує
всі файли в поточному Phar-архіві
- [Phar::delMetadata](phar.delmetadata.md) — Видалити глобальні
метадані в архіві phar
- [Phar::delete](phar.delete.md) — Видалення файлу всередині phar-архіву
- [Phar::\_\_destruct](phar.destruct.md) — Знищує об'єкт архіву
Phar
- [Phar::extractTo](phar.extractto.md) — Вийняти вміст
phar-архіву в директорію
- [Phar::getAlias](phar.getalias.md) — Отримати псевдонім для Phar
- [Phar::getMetadata](phar.getmetadata.md) — Витягти метадані
phar-архіву
- [Phar::getModified](phar.getmodified.md) — Визначити, чи змінювався
phar-архів
- [Phar::getPath](phar.getpath.md) — Отримати реальний шлях до
Phar-архіву на диску
- [Phar::getSignature](phar.getsignature.md) — Отримати
MD5/SHA1/SHA256/SHA512/OpenSSL підпис Phar-архіву
- [Phar::getStub](phar.getstub.md) — Отримати завантажувач PHP або
завантажувач заглушки Phar-архіву
- [Phar::getSupportedCompression](phar.getsupportedcompression.md) -
Повертає масив підтримуваних алгоритмів стиснення
- [Phar::getSupportedSignatures](phar.getsupportedsignatures.md) -
Отримати масив підтримуваних алгоритмів підпису архіву
- [Phar::getVersion](phar.getversion.md) — Отримати версію
Phar-архіву
- [Phar::hasMetadata](phar.hasmetadata.md) — Перевірити, чи міститься
phar-архів глобальні метадані
- [Phar::interceptFileFuncs](phar.interceptfilefuncs.md) — Вказує
phar перехоплювати fopen, file_get_contents, opendir і все
stat-функції
- [Phar::isBuffering](phar.isbuffering.md) — Перевірити, чи будуть
операції з Phar-архівом буферизовані або записані безпосередньо на диск
- [Phar::isCompressed](phar.iscompressed.md) - Повертає Phar::GZ
або PHAR::BZ2, якщо phar-архів стиснутий повністю (.tar.gz/tar.bz і так
далі)
- [Phar::isFileFormat](phar.isfileformat.md) — Перевірити, що
phar-архів має заданий формат (tar/phar/zip)
- [Phar::isValidPharFilename](phar.isvalidpharfilename.md) -
Перевіряє, що ім'я файлу є коректним ім'ям
phar-архіву
- [Phar::isWritable](phar.iswritable.md) — Перевіряє, чи можливо
модифікувати phar-архів
- [Phar::loadPhar](phar.loadphar.md) — Завантажити phar-архів з
псевдонімом
- [Phar::mapPhar](phar.mapphar.md) — Прочитати поточний запущений
phar-архів та зареєструвати його маніфест
- [Phar::mount](phar.mount.md) — Монтування зовнішнього шляху або
файлу до віртуального шляху в phar-архіві
- [Phar::mungServer](phar.mungserver.md) — Визначити список до
чотирьох $\_SERVER-змінних, які мають бути змінені для
запуску
- [Phar::offsetExists](phar.offsetexists.md) - Визначити, чи є
файл в архіві
- [Phar::offsetGet](phar.offsetget.md) — Отримати об'єкт
PharFileInfo для конкретного файлу
- [Phar::offsetSet](phar.offsetset.md) — Зміна вмісту файлу
- [Phar::offsetUnset](phar.offsetunset.md) — Видалити файл із
phar-архіву
- [Phar::running](phar.running.md) — Отримати повний шлях на диску,
або повний URL запущеного Phar-архіву
- [Phar::setAlias](phar.setalias.md) — Встановити псевдонім для
Phar-архіву
- [Phar::setDefaultStub](phar.setdefaultstub.md) — Встановити
завантажувач PHP або початкову заглушку Phar-архіву в завантажувач
замовчуванням
- [Phar::setMetadata](phar.setmetadata.md) — Встановити метадані
phar-архіву
- [Phar::setSignatureAlgorithm](phar.setsignaturealgorithm.md) -
Встановити алгоритм підписання phar-архіву та застосування його
- [Phar::setStub](phar.setstub.md) — Встановити завантажувач або
завантажувальну заглушку в Phar-архів
- [Phar::startBuffering](phar.startbuffering.md) - Запускає
буферизацію операцій запису, відключаючи запис змін Phar-архіву
на диск
- [Phar::stopBuffering](phar.stopbuffering.md) - Зупиняє
буферизацію та записує всі зміни на диск
- [Phar::unlinkArchive](phar.unlinkarchive.md) - Повністю видалити
архів з пам'яті та з диска
- [Phar::webPhar](phar.webphar.md) — Надсилає запит із браузера
у внутрішній файл у phar-архіві
