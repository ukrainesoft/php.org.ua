- [« SplFileInfo::\_\_toString](splfileinfo.tostring.md)
- [SplFileObject::\_\_construct »](splfileobject.construct.md)

- [PHP Manual](index.md)
- [Обробка файлів](spl.files.md)
- Клас SplFileObject

# Клас SplFileObject

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Клас SplFileObject надає об'єктно-орієнтований інтерфейс для
файлу.

## Огляд класів

class **SplFileObject** extends [SplFileInfo](class.splfileinfo.md)
implements [RecursiveIterator](class.recursiveiterator.md),
[SeekableIterator](class.seekableiterator.md) {

/\* Константи \*/

const int `DROP_NEW_LINE` u003d 1;

const int `READ_AHEAD` u003d 2;

const int `SKIP_EMPTY` u003d 4;

const int `READ_CSV` u003d 8;

/\* Методи \*/

public [\_\_construct](splfileobject.construct.md)(
string `$filename`,
string `$mode` u003d "r",
bool `$useIncludePath` u003d **`false`**,
?resource `$context` u003d **`null`**
)

public [current](splfileobject.current.md)(): string\|array\|false

public [eof](splfileobject.eof.md)(): bool

public [fflush](splfileobject.fflush.md)(): bool

public [fgetc](splfileobject.fgetc.md)(): string\|false

public [fgetcsv](splfileobject.fgetcsv.md)(string `$separator` u003d ",",
string `$enclosure` u003d "\"", string `$escape` u003d "\"): array\|false

public [fgets](splfileobject.fgets.md)(): string

public [fgetss](splfileobject.fgetss.md)(string `$allowable_tags` u003d
?): string

public [flock](splfileobject.flock.md)(int `$operation`, int
`&$wouldBlock` u003d **`null`**): bool

public [fpassthru](splfileobject.fpassthru.md)(): int

public [fputcsv](splfileobject.fputcsv.md)(
array `$fields`,
string `$separator` u003d ",",
string `$enclosure` u003d "\"",
string `$escape` u003d "\\",
string `$eol` u003d "
"
): int\|false

public [fread](splfileobject.fread.md)(int `$length`): string\|false

public [fscanf](splfileobject.fscanf.md)(string `$format`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`): array\|int\|null

public [fseek](splfileobject.fseek.md)(int `$offset`, int `$whence` u003d
**`SEEK_SET`**): int

public [fstat](splfileobject.fstat.md)(): array

public [ftell](splfileobject.ftell.md)(): int\|false

public [ftruncate](splfileobject.ftruncate.md)(int `$size`): bool

public [fwrite](splfileobject.fwrite.md)(string `$data`, int `$length`
u003d 0): int \ | false

public [getChildren](splfileobject.getchildren.md)():
?[RecursiveIterator](class.recursiveiterator.md)

public [getCsvControl](splfileobject.getcsvcontrol.md)(): array

public [getFlags](splfileobject.getflags.md)(): int

public [getMaxLineLen](splfileobject.getmaxlinelen.md)(): int

public [hasChildren](splfileobject.haschildren.md)(): bool

public [key](splfileobject.key.md)(): int

public [next](splfileobject.next.md)(): void

public [rewind](splfileobject.rewind.md)(): void

public [seek](splfileobject.seek.md)(int `$line`): void

public [setCsvControl](splfileobject.setcsvcontrol.md)(string
`$separator` u003d ",", string `$enclosure` u003d "\"", string `$escape` u003d
"\"): void

public [setFlags](splfileobject.setflags.md)(int `$flags`): void

public [setMaxLineLen](splfileobject.setmaxlinelen.md)(int
`$maxLength`): void

public [valid](splfileobject.valid.md)(): bool

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

## Зумовлені константи

**`SplFileObject::DROP_NEW_LINE`**
Видаляє символи переносу в кінці рядка.

**`SplFileObject::READ_AHEAD`**
Читає під час використання функцій rewind/next.

**`SplFileObject::SKIP_EMPTY`**
Пропустити порожні рядки з файлу. Для правильної роботи потрібно
увімкнути прапор **`READ_AHEAD`**.

**`SplFileObject::READ_CSV`**
Читає рядки у форматі CSV.

## Зміст

- [SplFileObject::\_\_construct](splfileobject.construct.md) -
Створює об'єкт SplFileObject
- [SplFileObject::current](splfileobject.current.md) — Отримати
поточний рядок файлу
- [SplFileObject::eof](splfileobject.eof.md) — Перевіряє, чи досягнуто
чи кінець файлу
- [SplFileObject::fflush](splfileobject.fflush.md) — Скидає
буфер виведення у файл
- [SplFileObject::fgetc](splfileobject.fgetc.md) — Отримує символ
з файлу
- [SplFileObject::fgetcsv](splfileobject.fgetcsv.md) — Отримати
рядок з файлу та його розбір як поля CSV
- [SplFileObject::fgets](splfileobject.fgets.md) — Отримує рядок
з файлу
- [SplFileObject::fgetss](splfileobject.fgetss.md) — Отримати рядок
з файлу та видалити теги HTML
- [SplFileObject::flock](splfileobject.flock.md) - Портована
блокування файлу
- [SplFileObject::fpassthru](splfileobject.fpassthru.md) - Виводить
весь вміст файлу, що залишився, у вихідний потік
- [SplFileObject::fputcsv](splfileobject.fputcsv.md) — Записати
масив полів у вигляді рядка CSV
- [SplFileObject::fread](splfileobject.fread.md) — Читання з файлу
- [SplFileObject::fscanf](splfileobject.fscanf.md) - Розбирає
рядок файлу відповідно до заданого формату
- [SplFileObject::fseek](splfileobject.fseek.md) — Переклад файлового
вказівника на задану позицію
- [SplFileObject::fstat](splfileobject.fstat.md) — Отримує
інформацію про файл
- [SplFileObject::ftell](splfileobject.ftell.md) — Повернути поточну
позицію файлового покажчика
- [SplFileObject::ftruncate](splfileobject.ftruncate.md) — Обрізає
файл до заданої довжини
- [SplFileObject::fwrite](splfileobject.fwrite.md) — Запис у файл
- [SplFileObject::getChildren](splfileobject.getchildren.md) -
Метод-заглушка
- [SplFileObject::getCsvControl](splfileobject.getcsvcontrol.md)
Отримує символи роздільника, обгортання та екранування для CSV
- [SplFileObject::getCurrentLine](splfileobject.getcurrentline.md) -
Псевдонім методу SplFileObject::fgets
- [SplFileObject::getFlags](splfileobject.getflags.md) — Отримує
прапорці налаштування об'єкта SplFileObject
- [SplFileObject::getMaxLineLen](splfileobject.getmaxlinelen.md) -
Отримати максимальну довжину рядка
- [SplFileObject::hasChildren](splfileobject.haschildren.md) - Клас
SplFileObject не має спадкоємців
- [SplFileObject::key](splfileobject.key.md) — Отримати номер рядка
- [SplFileObject::next](splfileobject.next.md) — Читати наступну
рядок
- [SplFileObject::rewind](splfileobject.rewind.md) - Перемотування
файлового покажчика на початок файлу
- [SplFileObject::seek](splfileobject.seek.md) — Переклад файлового
вказівника на заданий рядок
- [SplFileObject::setCsvControl](splfileobject.setcsvcontrol.md)
Встановлює символи роздільника, обгортання та екранування для
CSV
- [SplFileObject::setFlags](splfileobject.setflags.md) -
Встановлює прапори для SplFileObject
- [SplFileObject::setMaxLineLen](splfileobject.setmaxlinelen.md) -
Встановити максимальну довжину рядка
- [SplFileObject::\_\_toString](splfileobject.tostring.md) -
Псевдонім SplFileObject::fgets
- [SplFileObject::valid](splfileobject.valid.md) — Перевіряє,
чи досягнуто кінець файлу (EOF)
