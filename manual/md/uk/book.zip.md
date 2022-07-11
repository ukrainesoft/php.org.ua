- [«
RarException::setUsingExceptions](rarexception.setusingexceptions.md)
- [Вступ »](intro.zip.md)

- [PHP Manual](index.md)
- [Модулі для стиснення та архівації](refs.compression.md)
- Zip

# Zip

- [Вступ](intro.zip.md)
- [Встановлення та налаштування](zip.setup.md)
- [Вимоги](zip.requirements.md)
- [Установка](zip.installation.md)
- [Налаштування під час виконання](zip.configuration.md)
- [Типи ресурсів](zip.resources.md)
- [Предвизначені константи](zip.constants.md)
- [Приклади](zip.examples.md)
- [ZipArchive](class.ziparchive.md) - Клас ZipArchive
- [ZipArchive::addEmptyDir](ziparchive.addemptydir.md) -
Додає нову директорію
- [ZipArchive::addFile](ziparchive.addfile.md) - Додає до
ZIP-архів файл за вказаним шляхом
- [ZipArchive::addFromString](ziparchive.addfromstring.md) -
Додає файл до ZIP-архіву, використовуючи його вміст
- [ZipArchive::addGlob](ziparchive.addglob.md) — Додати файли
з директорії відповідно до шаблону
- [ZipArchive::addPattern](ziparchive.addpattern.md) — Додати
файли з директорії відповідно до шаблону регулярного
висловлювання PCRE
- [ZipArchive::clearError](ziparchive.clearerror.md) — Видаляє
повідомлення про помилку статусу, системні та/або повідомлення модуля
zip
- [ZipArchive::close](ziparchive.close.md) - Закриває активний
архів (відкритий або знову створений)
- [ZipArchive::count](ziparchive.count.md) - Підраховує
кількість файлів в архіві
- [ZipArchive::deleteIndex](ziparchive.deleteindex.md) — Видаляє
елемент в архіві, використовуючи його індекс
- [ZipArchive::deleteName](ziparchive.deletename.md) — Видаляє
елемент в архіві, використовуючи його ім'я
- [ZipArchive::extractTo](ziparchive.extractto.md) - Витягує
вміст архіву
- [ZipArchive::getArchiveComment](ziparchive.getarchivecomment.md)
— Повертає коментар ZIP-архіву
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
- [ZipArchive::getFromName](ziparchive.getfromname.md) -
Повертає вміст елемента на його ім'я
- [ZipArchive::getNameIndex](ziparchive.getnameindex.md)
Повертає ім'я елемента за його індексом
- [ZipArchive::getStatusString](ziparchive.getstatusstring.md) -
Повертають статус повідомлення про помилку, системний та/або
zip-статус
- [ZipArchive::getStream](ziparchive.getstream.md) — Отримати
дескриптор файлу елемента, визначений на ім'я елемента
(тільки для читання)
- [ZipArchive::getStreamIndex](ziparchive.getstreamindex.md) -
Отримує обробник файлу для запису, визначеного його індексом
(тільки для читання)
- [ZipArchive::getStreamName](ziparchive.getstreamname.md) -
Отримує обробник файлу для запису, визначеного його ім'ям
(тільки для читання)
- [ZipArchive::isCompressionMethodSupported](ziparchive.iscompressionmethoddupported.md)
— Перевіряє, чи підтримується метод стиснення libzip
- [ZipArchive::isEncryptionMethodSupported](ziparchive.isencryptionmethoddupported.md)
— Перевіряє, чи підтримується метод шифрування libzip
- [ZipArchive::locateName](ziparchive.locatename.md) -
Повертає індекс елемента до архіву
- [ZipArchive::open](ziparchive.open.md) - Відкриває ZIP-архів
- [ZipArchive::registerCancelCallback](ziparchive.registercancelcallback.md)
— Реєструє callback-функцію для дозволу скасування під час
закриття архіву
- [ZipArchive::registerProgressCallback](ziparchive.registerprogresscallback.md)
— Реєструє callback-функцію для надання оновлень
при закритті архіву
- [ZipArchive::renameIndex](ziparchive.renameindex.md) -
Перейменовує елемент за його індексом
- [ZipArchive::renameName](ziparchive.renamename.md) -
Перейменовує елемент на його ім'я
- [ZipArchive::replaceFile](ziparchive.replacefile.md)
Замінює файл у ZIP-архіві вказаним шляхом
- [ZipArchive::setArchiveComment](ziparchive.setarchivecomment.md)
— Встановлює коментар до ZIP-архіву
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
- [ZipArchive::setEncryptionName](ziparchive.setencryptionname.md)
— Встановити метод шифрування запису на його ім'я
- [ZipArchive::setExternalAttributesIndex](ziparchive.setexternalattributesindex.md)
— Встановити зовнішні атрибути запису за його індексом
- [ZipArchive::setExternalAttributesName](ziparchive.setexternalattributesname.md)
— Встановлення зовнішніх атрибутів запису, заданого на ім'я
- [ZipArchive::setMtimeIndex](ziparchive.setmtimeindex.md) -
Встановити час модифікації файлу за його індексом
- [ZipArchive::setMtimeName](ziparchive.setmtimename.md) -
Встановити час модифікації файлу на ім'я
- [ZipArchive::setPassword](ziparchive.setpassword.md) -
Встановлення пароля для активного архіву
- [ZipArchive::statIndex](ziparchive.statindex.md) - Отримання
детальної інформації про елемент за його індексом
- [ZipArchive::statName](ziparchive.statname.md) — Отримання
детальної інформації про елемент за його ім'ям
- [ZipArchive::unchangeAll](ziparchive.unchangeall.md)
Скасовує всі зміни, зроблені в архіві
- [ZipArchive::unchangeArchive](ziparchive.unchangearchive.md)
Повертає всі глобальні зміни, зроблені в архіві
- [ZipArchive::unchangeIndex](ziparchive.unchangeindex.md) -
Скасує всі зміни у позиції із заданим індексом
- [ZipArchive::unchangeName](ziparchive.unchangename.md) -
Скасує всі зміни у позиції із заданим ім'ям
- [Функції Zip](ref.zip.md)
- [zip_close](function.zip-close.md) - Закриває дескриптор
ZIP-архіву
- [zip_entry_close](function.zip-entry-close.md) - Закриває
дескриптор директорії
- [zip_entry_compressedsize](function.zip-entry-compressedsize.md)
— Повертає стислий розмір файлу для дескриптора директорії
- [zip_entry_compressionmethod](function.zip-entry-compressionmethod.md)
— Повертає метод стиснення дескриптора директорії
- [zip_entry_filesize](function.zip-entry-filesize.md) -
Повертає реальний розмір файлу для дескриптора директорії
- [zip_entry_name](function.zip-entry-name.md) — Отримує ім'я
дескриптора директорії
- [zip_entry_open](function.zip-entry-open.md) - Відкриває
директорію для читання
- [zip_entry_read](function.zip-entry-read.md) - Читає дані
із відкритого раніше дескриптора директорії
- [zip_open](function.zip-open.md) - Відкриває ZIP-архів
- [zip_read](function.zip-read.md) — Зчитує наступний запис
у ZIP-архіві
