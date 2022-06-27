- [«Зумовлені класи](reserved.classes.md)
- [Список інших зарезервованих слів
»](reserved.other-reserved-words.md)

- [PHP Manual](index.md)
- [Список зарезервованих слів](reserved.md)
- Обумовлені константи

## Зумовлені константи

### Оголошені в ядрі константи

Ці константи оголошуються ядром PHP та охоплюють PHP, Zend engine та
SAPI-модулі.

**`PHP_VERSION`** (string)
Поточна версія PHP у вигляді рядка у форматі
"major.minor.release\[extra\]".

**`PHP_MAJOR_VERSION`** (int)
Поточна "основна" (major) версія PHP у вигляді цілого числа (наприклад,
int(5) для версії "5.2.7-extra").

**`PHP_MINOR_VERSION`** (int)
Поточна "проміжна" (minor) версія PHP у вигляді цілого числа
(наприклад, int(2) для версії "5.2.7-extra").

**`PHP_RELEASE_VERSION`** (int)
Поточна "реліз"-версія (release) PHP у вигляді цілого числа (наприклад,
int(7) для версії "5.2.7-extra").

**`PHP_VERSION_ID`** (int)
Поточна версія PHP у вигляді цілого числа, її зручно використовувати при
порівняння версій (наприклад, int(50207) для версії "5.2.7-extra").

**`PHP_EXTRA_VERSION`** (string)
Поточна "екстра"-версія PHP у вигляді рядка (наприклад, '-extra' для версії
"5.2.7-extra"). Зазвичай використовується в різних дистрибутивах
індикації версії пакетів.

**`PHP_ZTS`** (int)

**`PHP_DEBUG`** (int)

**`PHP_MAXPATHLEN`** (int)
Максимальна довжина файлових імен (включаючи шлях), що підтримується даною
збиранням PHP.

**`PHP_OS`** (string)
Операційна система під яку збирався PHP.

**`PHP_OS_FAMILY`** (string)
Сімейство операційних систем, для яких зібрано PHP. Будь-яка з
Windows, BSD, Darwin, Solaris, Linux або
``unknown'`. Доступно з PHP 7.2.0.

**`PHP_SAPI`** (string)
API сервера (Server API) даної збірки PHP. Дивіться також
[php_sapi_name()](function.php-sapi-name.md).

**`PHP_EOL`** (string)
Коректний символ кінця рядка, який використовується на даній платформі.

**`PHP_INT_MAX`** (int)
Максимальне ціле число, яке підтримується цією збіркою PHP. Зазвичай це
int(2147483647) в 32-бітних системах і int(9223372036854775807)
64-бітні. Зазвичай, PHP_INT_MIN u003du003du003d \~PHP_INT_MAX.

**`PHP_INT_MIN`** (int)
Мінімальне ціле число, яке підтримується цією збіркою PHP. Зазвичай це
int(-2147483648) в 32-бітних системах та int(-9223372036854775808) в
64-бітні.

**`PHP_INT_SIZE`** (int)
Розмір цілого числа в байтах у поточному збиранні PHP.

**`PHP_FLOAT_DIG`** (int)
Кількість десяткових цифр, які можуть бути округлені в float та
назад без втрати точності. Доступно з PHP 7.2.0.

**`PHP_FLOAT_EPSILON`** (float)
Найменше позитивне число x, таке, що `x + 1.0! u003d 1.0`.
Доступно з PHP 7.2.0.

**`PHP_FLOAT_MIN`** (float)
Найменше можливе позитивне число типу float. Якщо вам потрібно
найменше можливе *негативне* число типу float, використовуйте
`- PHP_FLOAT_MAX`. Доступно з PHP 7.2.0.

**`PHP_FLOAT_MAX`** (float)
Максимальна можлива кількість типу float. Доступно з PHP 7.2.0.

**`DEFAULT_INCLUDE_PATH`** (string)

**`PEAR_INSTALL_DIR`** (string)

**`PEAR_EXTENSION_DIR`** (string)

**`PHP_EXTENSION_DIR`** (string)
Каталог за замовчуванням, в якому слід шукати динамічно завантажені
модулі (якщо він не перевизначений у
[extension_dir](ini.core.md#ini.extension-dir)). За замовчуванням
використовується **`PHP_PREFIX`** (або `PHP_PREFIX . "\ext"` у Windows).

**`PHP_PREFIX`** (string)
Значення **--prefix** було встановлено під час налаштування. У Windows це
значення **--with-prefix** було встановлено під час налаштування.

**`PHP_BINDIR`** (string)
Значення **--bindir** було встановлено під час налаштування. У Windows це
значення **--with-prefix** було встановлено під час налаштування.

**`PHP_BINARY`** (string)
Вказує шлях до файлів PHP під час виконання скрипта.

**`PHP_MANDIR`** (string)
Вказує шлях встановлення сторінок документації man.

**`PHP_LIBDIR`** (string)

**`PHP_DATADIR`** (string)

**`PHP_SYSCONFDIR`** (string)

**`PHP_LOCALSTATEDIR`** (string)

**`PHP_CONFIG_FILE_PATH`** (string)

**`PHP_CONFIG_FILE_SCAN_DIR`** (string)

**`PHP_SHLIB_SUFFIX`** (string)
Суфікс, використовуваний для бібліотек, що динамічно лінуються, таких як
"so" (для більшості Unix-систем) або "dll" (Windows).

**`PHP_FD_SETSIZE`** (string)
Максимальна кількість файлових дескрипторів для системних викликів.
Доступно з PHP 7.1.0.

**`E_ERROR`** (int)
[Константа, яка вказує рівень повідомлень про
помилках](errorfunc.constants.md)

**`E_WARNING`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_PARSE`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_NOTICE`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_CORE_ERROR`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_CORE_WARNING`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_COMPILE_ERROR`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_COMPILE_WARNING`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_USER_ERROR`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_USER_WARNING`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_USER_NOTICE`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_RECOVERABLE_ERROR`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_DEPRECATED`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_USER_DEPRECATED`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_ALL`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`E_STRICT`** (int)
[Константа повідомлення про помилку](errorfunc.constants.md)

**`__COMPILER_HALT_OFFSET__`** (int)

**`true`** (bool)
Дивіться розділ [Булевий тип](language.types.boolean.md).

**`false`** (bool)
Дивіться розділ [Булевий тип](language.types.boolean.md).

**`null`** (null)
Дивіться [Null](language.types.null.md).

**`PHP_WINDOWS_EVENT_CTRL_C`** (int)
Події Windows `CTRL+C`. Доступно з PHP 7.4.0 (лише для Windows).

**`PHP_WINDOWS_EVENT_CTRL_BREAK`** (int)
Windows 'CTRL+BREAK'. Доступно з PHP 7.4.0 (лише для Windows).

Також дивіться: [Магічні константи](language.constants.magic.md).

### Стандартні визначені константи

Усі константи [модулів, що входять до складу
ядра](extensions.membership.md#extensions.membership.core), тепер
визначено в PHP за замовчуванням.
