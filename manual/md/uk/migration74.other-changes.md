- [«Віддалені модулі](migration74.removed-extensions.md)
- [Підтримка Windows»](migration74.windows-support.md)

- [PHP Manual](index.md)
- [Міграція з PHP 7.3.x на PHP 7.4.x](migration74.md)
- Інші зміни

## Інші зміни

### Поліпшення продуктивності

#### Ядро PHP

Доданий спеціальний опкод віртуальної машини для функції
[array_key_exists()](function.array-key-exists.md), який покращує
продуктивність цієї функції, якщо значення параметра може бути
статично дозволено. У коді, що використовує простір імен, можливо
потрібне використання абсолютного імені (` rray_key_exists()`) або
ж явний імпорт функції.

#### Регулярні вирази (сумісні з Perl)

Коли функція [preg_match()](function.preg-match.md) у режимі UTF-8
(модифікатор ``u'`) неодноразово викликається для одного і того ж рядка
(можливо, на різних позиціях), перевірка правильності UTF-8 буде
виконано лише один раз.

### Зміни обробки INI-файлів

[zend.exception_ignore_args](ini.core.md#ini.zend.exception-ignore-args) -
нова INI-директива для включення або виключення аргументів з
трасування стека, отриманих у винятках.

[opcache.preload_user](opcache.configuration.md#ini.opcache.preload-user) -
нова INI-директива для встановлення користувача, з-під якого має
виконуватиметься код попереднього завантаження, інакше це буде root (не
допускається з міркувань безпеки).

### Міграція на pkg-config

Багато модулів тепер використовують виключно pkg-config, щоб
визначати залежності бібліотек. Як правило, це означає, що замість
**--with-foo-diru003dDIR** використовується лише **--with-foo**.
Користувальницькі шляхи до бібліотек можуть бути вказані або шляхом
додавання додаткових каталогів в `PKG_CONFIG_PATH` або шляхом
явної вказівки параметрів компіляції через `FOO_CFLAGS` та `FOO_LIBS`.

Наступні модулі та SAPI були порушені цією зміною:

- CURL:
- Опція **-with-curl** більше не приймає каталог.
- Enchant:
- Опція ** --with-enchant** більше не приймає каталог.
- FPM:
- Опція **--with-fpm-systemd** тепер використовує тільки
pkg-config для перевірки libsystem. Мінімальна обов'язкова
версія libsystemd – 209.
- GD:
- Опція **--with-gd** перейменована на **--enable-gd** (повинен
бути включений модуль чи ні), а опція **--with-external-gd**
використовує зовнішню бібліотеку libgd, замість тієї, що йде в
комплект.
- Опція **--with-png-dir** видалена. Наявність libpng тепер
обов'язково.
- Опція **--with-zlib-dir** видалена. Наявність zlib тепер
обов'язково.
- Опція **--with-freetype-dir** перейменована в
**--with-freetype**
- Опція **--with-jpeg-dir** перейменована на **--with-jpeg**
- Опція **--with-webp-dir** перейменована на **--with-webp**
- Опція **--with-xpm-dir** перейменована на **--with-xpm**
- IMAP:
- Опція ** --with-kerberos-systemd** більше не приймає каталог.
- Intl:
- Опція **--with-icu-dir** видалена. Якщо передано
** --enable-intl**, тоді завжди потрібна наявність libicu.
- LDAP:
- Опція ** --with-ldap-sasl** більше не приймає каталог.
- Libxml:
- Опція **--with-libxml-dir** видалена.
- Опція **--enable-libxml** перейменована на **--with-libxml**.
- Опція **--with-libexpat-dir** перейменована на **--with-expat**
і більше не приймає каталогу.
- Litespeed:
- Опція **--with-litespeed** перейменована в
**--enable-litespeed**.
- Mbstring:
- Опція **--with-onig** видалена. Якщо **--disable-mbregex** не
вказаний, потрібний libonig.
- ODBC:
- Опція ** --with-iodbc** більше не приймає каталог.
- Опція **--with-unixODBC** без каталогу тепер використовує
pkg-config (переважно). Каталог, як і раніше, можна вказати
для старих версій, без libodbc.pc.
- OpenSSL:
- Опція ** --with-openssl** більше не приймає каталог.
- PCRE:
- Опція **--with-pcre-regex** видалена. Замість цього
**--with-external-pcre** дозволяє використовувати зовнішню
PCRE-бібліотеку замість вбудованої.
- PDO_SQLite:
- Опція ** --with-pdo-sqlite** більше не приймає каталог.
- Readline:
- Опція ** --with-libedit** більше не приймає каталог.
- Sodium:
- Опція **--with-sodium** більше не приймає каталогу.
- SQLite3:
- Опція ** --with-sqlite3** більше не приймає каталог.
- XSL:
- Опція ** --with-xsl** більше не приймає каталог.
- Zip:
- Опція **--with-libzip** видалена.
- Опція **--enable-zip** перейменована на **--with-zip**.

### Екранування CSV

[fputcsv()](function.fputcsv.md), [fgetcsv()](function.fgetcsv.md),
[SplFileObject::fputcsv()](splfileobject.fputcsv.md),
[SplFileObject::fgetcsv()](splfileobject.fgetcsv.md) та
[SplFileObject::setCsvControl()](splfileobject.setcsvcontrol.md)
тепер приймаємо порожній рядок в аргументі $escape. Це відключить
пропрієтарний механізм екранування PHP

Поводження функції [str_getcsv()](function.str-getcsv.md) було
відповідним чином скориговано (раніше порожній рядок був
ідентична використанню значення за замовчуванням).

Метод [SplFileObject::getCsvControl()](splfileobject.getcsvcontrol.md)
тепер також може повертати порожній рядок для третього елемента
масиву, відповідно.

### Фільтрування даних

Модуль [filter](book.filter.md) більше не підтримує
**---with-pcre-dir** для Unix-складання і тому може бути спокійно
зібраний для спільного використання за допомогою **./configure**.

### GD

Поведінка функції [imagecropauto()](function.imagecropauto.md)
вбудованій бібліотеці libgd було синхронізовано із системною
бібліотекою libgd:

- **`IMG_CROP_DEFAULT`** у разі невдалого виконання не замінюється
на **`IMG_CROP_SIDES`**
- Порогове значення кадрування тепер розраховується з алгоритму
у системній бібліотеці libgd

Значення за промовчанням `$mode`
[imagecropauto()](function.imagecropauto.md) було змінено на
**`IMG_CROP_DEFAULT`**; передача `-1` тепер оголошена застарілою.

[imagescale()](function.imagescale.md) тепер підтримує
масштабування із збереженням співвідношення сторін до фіксованої висоти
при передачі `-1` у параметр `$new_width`.

### Фреймворк хеш-кодів HASH

Модуль [hash](book.hash.md) більше не можна відключити, тепер він
є невід'ємною частиною будь-якої PHP-складання, подібно до модуля
[date](book.datetime.md).

### Intl

Модуль [intl](book.intl.md) тепер потребує як мінімум ICU 50.1.

Клас [ResourceBundle](class.resourcebundle.md) тепер реалізує
[Countable](class.countable.md).

### Полегшений протокол доступу до каталогів (LDAP)

Підтримка nsldap та umich_ldap була видалена.

### Libxml

Усі модулі на основі libxml тепер потребують libxml версії 2.7.6 або
новіше.

### Багатобайтові рядки

Бібліотека oniguruma більше не йде в комплекті з PHP, замість неї
Система повинна бути libonig. Як альтернативу можна вказати
**---disable-mbregex**, щоб вимкнути компонент mbregex.

### OPcache

Конфігураційні опції **--disable-opcache-file** та
**--enable-opcache-file** видалені на користь використання INI-директиви
[opcache.file_cache](opcache.configuration.md#ini.opcache.file-cache)

### Хешування паролів

Функції [password_hash()](function.password-hash.md) та
[password_needs_rehash()](function.password-needs-rehash.md) тепер
приймають рядок, що обнулюється, (string) і ціле число (int) в аргументі
`$algo`.

### PEAR

Установка PEAR (разом із PECL) більше не ввімкнена за замовчуванням. Її можна
явно увімкнути, використовуючи **--with-pear**. Ця опція оголошена застарілою
і може бути вилучена в майбутньому.

### Reflection

Змінено числові значення констант-модифікаторів (`IS_ABSTRACT`,
`IS_DEPRECATED`, `IS_EXPLICIT_ABSTRACT`, `IS_FINAL`,
`IS_IMPLICIT_ABSTRACT`, `IS_PRIVATE`, `IS_PROTECTED`, `IS_PUBLIC` та
`IS_STATIC`) у класах [ReflectionClass](class.reflectionclass.md),
[ReflectionFunction](class.reflectionfunction.md),
[ReflectionMethod](class.reflectionmethod.md),
[ReflectionObject](class.reflectionobject.md) та
[ReflectionProperty](class.reflectionproperty.md).

### SimpleXML

Клас [SimpleXMLElement](class.simplexmlelement.md) тепер реалізує
[Countable](class.countable.md).

### SQLite3

Вбудована бібліотека libsqlite у збірці видалена. Для складання модуля
[SQLite3](book.sqlite3.md) тепер потрібно libsqlite3 ≥ 3.7.4. Щоб
зібрати модуль [PDO_SQLite](ref.pdo-sqlite.md) обов'язково потрібно
libsqlite3 ≥ 3.5.0.

Серіалізація та десеріалізація [SQLite3](class.sqlite3.md),
[SQLite3Stmt](class.sqlite3stmt.md) та
[SQLite3Result](class.sqlite3result.md) тепер явно заборонено. Раніше
серіалізація екземплярів цих класів була можлива, але десеріалізація
робила об'єкти невикористовуваними для подальшої роботи.

Нотацію `@param` тепер також можна використовувати для позначення
параметрів SQL запиту.

### Zip

Вбудована бібліотека libzip видалена. Тепер обов'язково наявність у
системі бібліотеки libzip \>u003d 0.11, щоб зібрати модуль
[Zip](book.zip.md).
