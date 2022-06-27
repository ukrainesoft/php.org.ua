- [« Приклади](zip.examples.md)
- [ZipArchive::addEmptyDir »](ziparchive.addemptydir.md)

- [PHP Manual](index.md)
- [Zip](book.zip.md)
- Клас ZipArchive

# Клас [ZipArchive](class.ziparchive.md)

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8, PECL zip \>u003d 1.1.0)

## Вступ

Файловий архів, стислий Zip.

## Огляд класів

class **ZipArchive** implements [Countable](class.countable.md) {

/\* Властивості \*/

public readonly int `$lastId`;

public readonly int `$status`;

public readonly int `$statusSys`;

public readonly int `$numFiles`;

public readonly string $filename;

public readonly string `$comment`;

/\* Методи \*/

public [addEmptyDir](ziparchive.addemptydir.md)(string `$dirname`, int
$flags u003d 0): bool

public [addFile](ziparchive.addfile.md)(
string `$filepath`,
string `$entryname` u003d "",
int `$start` u003d 0,
int `$length` u003d 0,
int `$flags` u003d ZipArchive::FL_OVERWRITE
): bool

public [addFromString](ziparchive.addfromstring.md)(string `$name`,
string `$content`, int `$flags` u003d ZipArchive::FL_OVERWRITE): bool

public [addGlob](ziparchive.addglob.md)(string `$pattern`, int
`$flags` u003d 0, array `$options` u003d \[\]): array\|false

public [addPattern](ziparchive.addpattern.md)(string `$pattern`,
string `$path` u003d ".", array `$options` u003d \[\]): array\|false

public [clearError](ziparchive.clearerror.md)(): void

public [close](ziparchive.close.md)(): bool

public [count](ziparchive.count.md)(): int

public [deleteIndex](ziparchive.deleteindex.md)(int `$index`): bool

public [deleteName](ziparchive.deletename.md)(string `$name`): bool

public [extractTo](ziparchive.extractto.md)(string `$pathto`,
array\|string\|null `$files` u003d **`null`**): bool

public [getArchiveComment](ziparchive.getarchivecomment.md)(int
`$flags` u003d 0): string\|false

public [getCommentIndex](ziparchive.getcommentindex.md)(int `$index`,
int `$flags` u003d 0): string\|false

public [getCommentName](ziparchive.getcommentname.md)(string `$name`,
int `$flags` u003d 0): string\|false

public
[getExternalAttributesIndex](ziparchive.getexternalattributesindex.md)(
int `$index`,
int `&$opsys`,
int `&$attr`,
int `$flags` u003d ?
): bool

public
[getExternalAttributesName](ziparchive.getexternalattributesname.md)(
string `$name`,
int `&$opsys`,
int `&$attr`,
int `$flags` u003d 0
): bool

public [getFromIndex](ziparchive.getfromindex.md)(int `$index`, int
`$len` u003d 0, int `$flags` u003d 0): string\|false

public [getFromName](ziparchive.getfromname.md)(string `$name`, int
`$len` u003d 0, int `$flags` u003d 0): string\|false

public [getNameIndex](ziparchive.getnameindex.md)(int `$index`, int
`$flags` u003d 0): string\|false

public [getStatusString](ziparchive.getstatusstring.md)(): string

public [getStream](ziparchive.getstream.md)(string `$name`):
resource\|false

public [getStreamIndex](ziparchive.getstreamindex.md)(int `$index`,
int `$flags` u003d 0): resource\|false

public [getStreamName](ziparchive.getstreamname.md)(string `$name`,
int `$flags` u003d 0): resource\|false

public static
[isCompressionMethodSupported](ziparchive.iscompressionmethoddupported.md)(int
`$method`, bool `$enc` u003d **`true`**): bool

public static
[isEncryptionMethodSupported](ziparchive.isencryptionmethoddupported.md)(int
`$method`, bool `$enc` u003d **`true`**): bool

public [locateName](ziparchive.locatename.md)(string `$name`, int
`$flags` u003d 0): int\|false

public [open](ziparchive.open.md)(string `$filename`, int `$flags` u003d
0): bool\|int

public
[registerCancelCallback](ziparchive.registercancelcallback.md)([callable](language.types.callable.md)
`$callback`): bool

public
[registerProgressCallback](ziparchive.registerprogresscallback.md)(float
`$rate`, [callable](language.types.callable.md) `$callback`): bool

public [renameIndex](ziparchive.renameindex.md)(int `$index`, string
`$new_name`): bool

public [renameName](ziparchive.renamename.md)(string `$name`, string
`$new_name`): bool

public [replaceFile](ziparchive.replacefile.md)(
string `$filepath`,
int `$index`,
int `$start` u003d 0,
int `$length` u003d 0,
int `$flags` u003d 0
): bool

public [setArchiveComment](ziparchive.setarchivecomment.md)(string
`$comment`): bool

public [setCommentIndex](ziparchive.setcommentindex.md)(int `$index`,
string `$comment`): bool

public [setCommentName](ziparchive.setcommentname.md)(string `$name`,
string `$comment`): bool

public [setCompressionIndex](ziparchive.setcompressionindex.md)(int
`$index`, int `$method`, int `$compflags` u003d 0): bool

public [setCompressionName](ziparchive.setcompressionname.md)(string
`$name`, int `$method`, int `$compflags` u003d 0): bool

public [setEncryptionIndex](ziparchive.setencryptionindex.md)(int
`$index`, int `$method`, ?string `$password` u003d **`null`**): bool

public [setEncryptionName](ziparchive.setencryptionname.md)(string
`$name`, int `$method`, ?string `$password` u003d **`null`**): bool

public
[setExternalAttributesIndex](ziparchive.setexternalattributesindex.md)(
int `$index`,
int `$opsys`,
int `$attr`,
int `$flags` u003d 0
): bool

public
[setExternalAttributesName](ziparchive.setexternalattributesname.md)(
string `$name`,
int `$opsys`,
int `$attr`,
int `$flags` u003d 0
): bool

public [setMtimeIndex](ziparchive.setmtimeindex.md)(int `$index`, int
`$timestamp`, int `$flags` u003d 0): bool

public [setMtimeName](ziparchive.setmtimename.md)(string `$name`, int
`$timestamp`, int `$flags` u003d 0): bool

public [setPassword](ziparchive.setpassword.md)(string `$password`):
bool

public [statIndex](ziparchive.statindex.md)(int `$index`, int `$flags`
u003d 0): array \ | false

public [statName](ziparchive.statname.md)(string `$name`, int `$flags`
u003d 0): array \ | false

public [unchangeAll](ziparchive.unchangeall.md)(): bool

public [unchangeArchive](ziparchive.unchangearchive.md)(): bool

public [unchangeIndex](ziparchive.unchangeindex.md)(int `$index`):
bool

public [unchangeName](ziparchive.unchangename.md)(string `$name`):
bool

}

## Властивості

`lastId`
Значення індексу останнього доданого запису (файл або каталог).
Доступно з PHP 8.0.0 та PECL zip 1.18.0.

`status`
Заголовок Zip-архіву. Доступно для закритого архіву, починаючи з PHP 8.0.0 та
PECL ZIP 1.18.0.

`statusSys`
Системний статус zip-архіву. Доступно для закритого архіву, починаючи з
PHP 8.0.0 та PECL zip 1.18.0.

`numFiles`
Кількість файлів в архіві

`filename`
Ім'я файлу у файловій системі

`comment`
Коментар до архіву

## Зміст

- [ZipArchive::addEmptyDir](ziparchive.addemptydir.md) - Додає
нову директорію
- [ZipArchive::addFile](ziparchive.addfile.md) — Додає до
ZIP-архів файл за вказаним шляхом
- [ZipArchive::addFromString](ziparchive.addfromstring.md) -
Додає файл до ZIP-архіву, використовуючи його вміст
- [ZipArchive::addGlob](ziparchive.addglob.md) — Додати файли з
директорії відповідно до шаблону
- [ZipArchive::addPattern](ziparchive.addpattern.md) — Додати
файли з директорії відповідно до шаблону регулярного виразу
PCRE
- [ZipArchive::clearError](ziparchive.clearerror.md) — Видаляє
повідомлення про помилку статусу, системні та/або повідомлення модуля zip
- [ZipArchive::close](ziparchive.close.md) - Закриває активний
архів (відкритий або знову створений)
- [ZipArchive::count](ziparchive.count.md) — Підраховує кількість
файлів в архіві
- [ZipArchive::deleteIndex](ziparchive.deleteindex.md) — Видаляє
елемент в архіві, використовуючи його індекс
- [ZipArchive::deleteName](ziparchive.deletename.md) — Видаляє
елемент в архіві, використовуючи його ім'я
- [ZipArchive::extractTo](ziparchive.extractto.md) - Витягує
вміст архіву
- [ZipArchive::getArchiveComment](ziparchive.getarchivecomment.md) -
Повертає коментар ZIP-архіву
- [ZipArchive::getCommentIndex](ziparchive.getcommentindex.md) -
Повертає коментар елемента, використовуючи його індекс
- [ZipArchive::getCommentName](ziparchive.getcommentname.md) -
Повертає коментар елемента, використовуючи його ім'я
- [ZipArchive::getExternalAttributesIndex](ziparchive.getexternalattributesindex.md)
— Витягти зовнішні атрибути запису за його індексом
- [ZipArchive::getExternalAttributesName](ziparchive.getexternalattributesname.md)
— Витягти зовнішні атрибути запису на її ім'я
- [ZipArchive::getFromIndex](ziparchive.getfromindex.md) -
Повертає вміст елемента за його індексом
- [ZipArchive::getFromName](ziparchive.getfromname.md) - Повертає
вміст елемента на його ім'я
- [ZipArchive::getNameIndex](ziparchive.getnameindex.md)
Повертає ім'я елемента за його індексом
- [ZipArchive::getStatusString](ziparchive.getstatusstring.md) -
Повертають статус повідомлення про помилку, системний та/або zip-статус
- [ZipArchive::getStream](ziparchive.getstream.md) — Отримати
дескриптор файлу елемента, визначений на ім'я елемента (тільки
для читання)
- [ZipArchive::getStreamIndex](ziparchive.getstreamindex.md) -
Отримує обробник файлу для запису, визначеного його індексом
(тільки для читання)
- [ZipArchive::getStreamName](ziparchive.getstreamname.md) -
Отримує обробник файлу для запису, визначеного його ім'ям (тільки
для читання)
- [ZipArchive::isCompressionMethodSupported](ziparchive.iscompressionmethoddupported.md)
— Перевіряє, чи підтримується метод стиснення libzip
- [ZipArchive::isEncryptionMethodSupported](ziparchive.isencryptionmethoddupported.md)
— Перевіряє, чи підтримується метод шифрування libzip
- [ZipArchive::locateName](ziparchive.locatename.md) - Повертає
індекс елемента в архіві
- [ZipArchive::open](ziparchive.open.md) - Відкриває ZIP-архів
- [ZipArchive::registerCancelCallback](ziparchive.registercancelcallback.md)
— Реєструє callback-функцію для дозволу скасування під час
закриття архіву
- [ZipArchive::registerProgressCallback](ziparchive.registerprogresscallback.md)
— Реєструє callback-функцію для надання оновлень при
закриття архіву
- [ZipArchive::renameIndex](ziparchive.renameindex.md) -
Перейменовує елемент за його індексом
- [ZipArchive::renameName](ziparchive.renamename.md) -
Перейменовує елемент на його ім'я
- [ZipArchive::replaceFile](ziparchive.replacefile.md) — Замінює
файл у ZIP-архіві вказаним шляхом
- [ZipArchive::setArchiveComment](ziparchive.setarchivecomment.md) -
Встановлює коментар до ZIP-архіву
- [ZipArchive::setCommentIndex](ziparchive.setcommentindex.md) -
Встановлює коментар до елемента за його індексом
- [ZipArchive::setCommentName](ziparchive.setcommentname.md) -
Встановлює коментар до елемента, заданого на ім'я
- [ZipArchive::setCompressionIndex](ziparchive.setcompressionindex.md)
— Встановити метод стиснення запису, заданого його індексом
- [ZipArchive::setCompressionName](ziparchive.setcompressionname.md)
— Встановити метод стиснення запису, заданого на ім'я
- [ZipArchive::setEncryptionIndex](ziparchive.setencryptionindex.md)
— Встановити метод шифрування запису за його індексом
- [ZipArchive::setEncryptionName](ziparchive.setencryptionname.md) -
Встановити метод шифрування запису на його ім'я
- [ZipArchive::setExternalAttributesIndex](ziparchive.setexternalattributesindex.md)
— Встановити зовнішні атрибути запису за його індексом
- [ZipArchive::setExternalAttributesName](ziparchive.setexternalattributesname.md)
— Встановлення зовнішніх атрибутів запису, заданого на ім'я
- [ZipArchive::setMtimeIndex](ziparchive.setmtimeindex.md) -
Встановити час модифікації файлу за його індексом
- [ZipArchive::setMtimeName](ziparchive.setmtimename.md) -
Встановити час модифікації файлу на його ім'я
- [ZipArchive::setPassword](ziparchive.setpassword.md) — Встановлення
пароля для активного архіву
- [ZipArchive::statIndex](ziparchive.statindex.md) - Отримання
детальної інформації про елемент за його індексом
- [ZipArchive::statName](ziparchive.statname.md) — Отримання
детальної інформації про елемент за його ім'ям
- [ZipArchive::unchangeAll](ziparchive.unchangeall.md) — Скасує
всі зміни, зроблені в архіві
- [ZipArchive::unchangeArchive](ziparchive.unchangearchive.md)
Повертає всі глобальні зміни, зроблені в архіві
- [ZipArchive::unchangeIndex](ziparchive.unchangeindex.md)
Скасує всі зміни у позиції із заданим індексом
- [ZipArchive::unchangeName](ziparchive.unchangename.md) — Скасує
усі зміни у позиції із заданим ім'ям
