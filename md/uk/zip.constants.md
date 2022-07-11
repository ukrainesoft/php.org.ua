- [«Типи ресурсів](zip.resources.md)
- [Приклади »](zip.examples.md)

- [PHP Manual](index.md)
- [Zip](book.zip.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні тільки в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

[ZipArchive](class.ziparchive.md) використовує константи класу. Є
три типи констант: Прапори (префікс `FL_`), помилки (префікс `ER_`) та
режиму роботи (без префіксу).

**`ZipArchive::CREATE`** (int)
Створювати архів, якщо він не існує.

**`ZipArchive::OVERWRITE`** (int)
Якщо архів існує, то ігнорувати його вміст. Іншими
словами, обробити його як і, як і порожній архів.

**`ZipArchive::EXCL`** (int)
Виводити помилку, якщо існує архів.

**`ZipArchive::RDONLY`** (int)
Відкрити архів у режимі лише читання. Доступно з PHP 7.4.3 та PECL
zip 1.17.1 відповідно, якщо скомпільовано з використанням libzip
≥ 1.0.0.

**`ZipArchive::CHECKCONS`** (int)
Виконувати додаткові перевірки на структуру архіву та видавати помилку
при невдачі.

**`ZipArchive::FL_NOCASE`** (int)
Ігнорувати реєстр символів в іменах елементів архіву.

**`ZipArchive::FL_NODIR`** (int)
Не враховувати шляхи директорії в архіві.

**`ZipArchive::FL_COMPRESSED`** (int)
Читати стислі дані.

**`ZipArchive::FL_UNCHANGED`** (int)
Використовуйте вихідні дані, ігноруючи зміни.

**`ZipArchive::FL_RECOMPRESS`** (int)
Примусове повторне стиснення даних. Доступно з PHP 8.0.0 та PECL zip
1.18.0.

**`ZipArchive::FL_ENCRYPTED`** (int)
Читання зашифрованих даних (мається на увазі FL_COMPRESSED). Доступно з
PHP 8.0.0 та PECL zip 1.18.0.

**`ZipArchive::FL_OVERWRITE`** (int)
Якщо файл з ім'ям існує, його перезаписує (замінює). Доступно з
PHP 8.0.0 та PECL zip 1.18.0.

**`ZipArchive::FL_LOCAL`** (int)
У локальному заголовку. Доступно з PHP 8.0.0 та PECL zip 1.18.0.

**`ZipArchive::ZIP_FL_CENTRAL`** (int)
У центральному каталозі. Доступно з PHP 8.0.0 та PECL zip 1.18.0.

**`ZipArchive::FL_ENC_GUESS`** (int)
Вгадати кодування рядка (за замовчуванням). Доступно з PHP 7.0.8.

**`ZipArchive::FL_ENC_RAW`** (int)
Взяти немодифікований рядок. Доступно з PHP 7.0.8.

**`ZipArchive::FL_ENC_STRICT`** (int)
Строго слідувати специфікації. Доступно з PHP 7.0.8.

**`ZipArchive::FL_ENC_UTF_8`** (int)
Рядок у кодуванні UTF-8. Доступно з PHP 7.0.8.

**`ZipArchive::FL_ENC_CP437`** (int)
Рядок у кодуванні CP437. Доступно з PHP 7.0.8.

**`ZipArchive::CM_DEFAULT`** (int)
Вибрати найкращий метод стиснення "deflate" або "stored" (без стиснення).

**`ZipArchive::CM_STORE`** (int)
Метод стиснення "stored" (без стиснення).

**`ZipArchive::CM_SHRINK`** (int)
Метод стиснення "шрунк".

**`ZipArchive::CM_REDUCE_1`** (int)
Метод стиснення "знижений" з коефіцієнтом 1.

**`ZipArchive::CM_REDUCE_2`** (int)
Метод стиснення "знижений" з коефіцієнтом 2.

**`ZipArchive::CM_REDUCE_3`** (int)
Метод стиснення "знижений" з коефіцієнтом 3.

**`ZipArchive::CM_REDUCE_4`** (int)
Метод стиснення "знижений" з коефіцієнтом 4.

**`ZipArchive::CM_IMPLODE`** (int)
Метод стиснення "imploded".

**`ZipArchive::CM_DEFLATE`** (int)
Метод стиснення "deflated".

**`ZipArchive::CM_DEFLATE64`** (int)
Метод стиснення "deflate64".

**`ZipArchive::CM_PKWARE_IMPLODE`** (int)
Спосіб стиснення "PKWARE imploding".

**`ZipArchive::CM_BZIP2`** (int)
Метод стиснення алгоритмом BZIP2.

**`ZipArchive::CM_LZMA`** (int)
Метод стиснення алгоритмом LZMA.

**`ZipArchive::CM_LZMA2`** (int)
Метод стиснення алгоритмом LZMA2. Доступно з PHP 7.4.3 та PECL zip 1.16.0,
відповідно, якщо скомпільовано за допомогою libzip ≥ 1.6.0.

**`ZipArchive::CM_ZSTD`** (int)
Метод стиснення алгоритмом Zstandard. Доступно, починаючи з PHP 8.0.0 та PECL
zip 1.19.1 відповідно, якщо скомпільовано з використанням libzip
≥ 1.8.0.

**`ZipArchive::CM_XZ`** (int)
Метод стиснення алгоритмом XZ. Доступно з PHP 7.4.3 та PECL zip 1.16.0,
відповідно, якщо скомпільовано за допомогою libzip ≥ 1.6.0.

**`ZipArchive::ER_OK`** (int)
Нема помилок.

**`ZipArchive::ER_MULTIDISK`** (int)
Багатотомний ZIP-архів не підтримується.

**`ZipArchive::ER_RENAME`** (int)
Перейменування тимчасового файлу не вдалося.

**`ZipArchive::ER_CLOSE`** (int)
Закриття ZIP-архіву не вдалося.

**`ZipArchive::ER_SEEK`** (int)
Помилка пошуку.

**`ZipArchive::ER_READ`** (int)
Помилка читання.

**`ZipArchive::ER_WRITE`** (int)
Помилка запису.

**`ZipArchive::ER_CRC`** (int)
Помилка контрольної суми.

**`ZipArchive::ER_ZIPCLOSED`** (int)
Відкритий ZIP-архів було закрито.

**`ZipArchive::ER_NOENT`** (int)
Нема такого файлу.

**`ZipArchive::ER_EXISTS`** (int)
Файл існує.

**`ZipArchive::ER_OPEN`** (int)
Неможливо відкрити файл.

**`ZipArchive::ER_TMPOPEN`** (int)
Неможливо створити тимчасовий файл.

**`ZipArchive::ER_ZLIB`** (int)
Ошибка Zlib.

**`ZipArchive::ER_MEMORY`** (int)
Помилка виділення пам'яті.

**`ZipArchive::ER_CHANGED`** (string)
Запис було змінено.

**`ZipArchive::ER_COMPNOTSUPP`** (int)
Метод стиснення не підтримується.

**`ZipArchive::ER_EOF`** (int)
Передчасний кінець файлу.

**`ZipArchive::ER_INVAL`** (int)
Неприпустимий аргумент.

**`ZipArchive::ER_NOZIP`** (int)
Чи не ZIP-архів.

**`ZipArchive::ER_INTERNAL`** (int)
Внутрішня помилка.

**`ZipArchive::ER_INCONS`** (int)
ZIP-архів несумісний.

**`ZipArchive::ER_REMOVE`** (int)
Неможливо видалити файл.

**`ZipArchive::ER_DELETED`** (int)
Запис було видалено.

**`ZipArchive::ER_ENCRNOTSUPP`** (int)
Метод шифрування не підтримується. Доступно, починаючи з PHP 7.4.3 та PECL
zip 1.16.1 відповідно.

**`ZipArchive::ER_RDONLY`** (int)
Архів лише для читання. Доступно, починаючи з PHP 7.4.3 та PECL zip
1.16.1 відповідно.

**`ZipArchive::ER_NOPASSWD`** (int)
Пароль не вказано. Доступно, починаючи з PHP 7.4.3 та PECL zip 1.16.1,
відповідно.

**`ZipArchive::ER_WRONGPASSWD`** (int)
Наданий неправильний пароль. Доступно, починаючи з PHP 7.4.3 та PECL zip
1.16.1 відповідно.

**`ZipArchive::ZIP_ER_OPNOTSUPP`** (int)
Операція не підтримується. Доступно, починаючи з PHP 7.4.3 та PECL zip
1.16.1 відповідно, якщо скомпільовано з використанням libzip ≥
1.0.

**`ZipArchive::ZIP_ER_INUSE`** (int)
Ресурс досі використовується. Доступно, починаючи з PHP 7.4.3 та PECL zip
1.16.1 відповідно, якщо скомпільовано з використанням libzip ≥
1.0.

**`ZipArchive::ZIP_ER_TELL`** (int)
Вказано помилку. Доступно, починаючи з PHP 7.4.3 та PECL zip 1.16.1,
відповідно, якщо скомпільовано за допомогою libzip ≥ 1.0.0.

**`ZipArchive::ZIP_ER_COMPRESSED_DATA`** (int)
Стислі дані неправильні. Доступно, починаючи з PHP 7.4.3 та PECL zip 1.16.1,
відповідно, якщо скомпільовано за допомогою libzip ≥ 1.0.0.

**`ZipArchive::ER_CANCELLED`** (int)
Операцію скасовано. Доступно, починаючи з PHP 7.4.3 та PECL zip 1.16.1,
відповідно, якщо скомпільовано за допомогою libzip ≥ 1.0.0.

**`ZipArchive::EM_NONE`** (int)
Без шифрування. Доступно, починаючи з PHP 7.2.0 та PECL zip 1.14.0,
відповідно, якщо скомпільовано за допомогою libzip ≥ 1.2.0.

**`ZipArchive::EM_TRAD_PKWARE`** (int)
Традиційне шифрування PKWARE. Доступно, починаючи з PHP 8.0.0 та PECL zip
1.19.0.

**`ZipArchive::EM_AES_128`** (int)
Шифрування AES 128. Доступно, починаючи з PHP 7.2.0 та PECL zip 1.14.0,
відповідно, якщо скомпільовано за допомогою libzip ≥ 1.2.0.

**`ZipArchive::EM_AES_192`** (int)
Шифрування AES 192. Доступно, починаючи з PHP 7.2.0 та PECL zip 1.14.0,
відповідно, якщо скомпільовано за допомогою libzip ≥ 1.2.0.

**`ZipArchive::EM_AES_256`** (int)
Шифрування AES 256. Доступно, починаючи з PHP 7.2.0 та PECL zip 1.14.0,
відповідно, якщо скомпільовано за допомогою libzip ≥ 1.2.0.

**`ZipArchive::EM_UNKNOWN`** (int)
Без шифрування. Доступно, починаючи з PHP 8.0.0 та PECL zip 1.19.0.

**`ZipArchive::LIBZIP_VERSION`** (string)
Версія бібліотеки Zip. Доступно, починаючи з PHP 7.4.3 та PECL zip 1.16.0.



**`ZipArchive::OPSYS_DOS`** (int)
**`ZipArchive::OPSYS_AMIGA`** (int)
**`ZipArchive::OPSYS_OPENVMS`** (int)
**`ZipArchive::OPSYS_UNIX`** (int)
**`ZipArchive::OPSYS_VM_CMS`** (int)
**`ZipArchive::OPSYS_ATARI_ST`** (int)
**`ZipArchive::OPSYS_OS_2`** (int)
**`ZipArchive::OPSYS_MACINTOSH`** (int)
**`ZipArchive::OPSYS_Z_SYSTEM`** (int)
**`ZipArchive::OPSYS_CPM`** (int)
**`ZipArchive::OPSYS_WINDOWS_NTFS`** (int)
**`ZipArchive::OPSYS_MVS`** (int)
**`ZipArchive::OPSYS_VSE`** (int)
**`ZipArchive::OPSYS_ACORN_RISC`** (int)
**`ZipArchive::OPSYS_VFAT`** (int)
**`ZipArchive::OPSYS_ALTERNATE_MVS`** (int)
**`ZipArchive::OPSYS_BEOS`** (int)
**`ZipArchive::OPSYS_TANDEM`** (int)
**`ZipArchive::OPSYS_OS_400`** (int)
**`ZipArchive::OPSYS_OS_X`** (int)
**`ZipArchive::OPSYS_DEFAULT`** (int)
Починаючи з PECL zip 1.12.4
