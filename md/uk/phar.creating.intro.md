- [« Створення Phar-архівів](phar.creating.md)
- [Чим відрізняється phar від tar- або zip-архіву?
»](phar.fileformat.md)

- [PHP Manual](index.md)
- [Створення Phar-архівів](phar.creating.md)
- Створення Phar-архівів: Вступ

## Створення Phar-архівів: Вступ

Має бути написано найближчим часом. Перед читанням цього
обов'язково прочитайте [Як використовувати Phar-архіви](phar.using.md).

Відмінним початком буде читання про
[Phar::buildFromIterator()](phar.buildfromiterator.md) і про
особливості вибору доступного для архівів [формату
файла] (phar.fileformat.md). Хороше розуміння того, що із себе
представляє заглушка (stub) і що вона має вирішальне значення для
створення phar-архіву, і тому [Phar::setStub()](phar.setstub.md) та
[Phar::createDefaultStub()](phar.createdefaultstub.md) також будуть
гарною відправкою точкою. Якщо ви розповсюджуєте веб-додаток,
ключовими будуть знання про [Phar::webPhar()](phar.webphar.md) та
пов'язаний з ним метод [Phar::mungServer()](phar.mungserver.md). Будь-яке
програма, яка звертається до своїх власних файлів, повинна
враховувати можливість використання
[Phar::interceptFileFuncs()](phar.interceptfilefuncs.md).
