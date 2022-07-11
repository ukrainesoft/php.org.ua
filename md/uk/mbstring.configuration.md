- [« Установка](mbstring.installation.md)
- [Типи ресурсів»] (mbstring.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mbstring.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------------------- ---------|-------------------------------------|-- ---------------|---------------------------------- ----------------------|
| [mbstring.language](mbstring.configuration.md#ini.mbstring.language) | "neutral" | PHP_INI_ALL | |
| [mbstring.detect_order](mbstring.configuration.md#ini.mbstring.detect-order) | NULL | PHP_INI_ALL | |
| [mbstring.http_input](mbstring.configuration.md#ini.mbstring.http-input) | "pass" | PHP_INI_ALL | Застаріла |
| [mbstring.http_output](mbstring.configuration.md#ini.mbstring.http-output) | "pass" | PHP_INI_ALL | Застаріла |
| [mbstring.internal_encoding](mbstring.configuration.md#ini.mbstring.internal-encoding) | NULL | PHP_INI_ALL | Застаріла |
| [mbstring.substitute_character](mbstring.configuration.md#ini.mbstring.substitute-character) | NULL | PHP_INI_ALL | |
| [mbstring.func_overload](mbstring.configuration.md#ini.mbstring.func-overload) | "0" | PHP_INI_SYSTEM | Оголошено застарілим у PHP 7.2.0; видалено з PHP 8.0.0. |
| [mbstring.encoding_translation](mbstring.configuration.md#ini.mbstring.encoding-translation) | "0" | PHP_INI_PERDIR | |
| [mbstring.http_output_conv_mimetypes](mbstring.configuration.md#ini.mbstring.http-output-conv-mimetypes) | "^(text/\|application/xhtml\+xml)" | PHP_INI_ALL | |
| [mbstring.strict_detection](mbstring.configuration.md#ini.mbstring.strict-detection) | "0" | PHP_INI_ALL | |

**Опції конфігурації mbstring**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`mbstring.language` string
За замовчуванням в mbstring використовуються установки національної мови.
Зверніть увагу, що ця опція автоматично визначає
`mbstring.internal_encoding`, і `mbstring.internal_encoding` має бути
поміщений після `mbstring.language` в `php.ini`

`mbstring.encoding_translation` bool
Включає прозорий фільтр кодування для вхідних запитів HTTP
виконує виявлення та перетворення вхідного кодування у внутрішнє
кодування.

`mbstring.internal_encoding` string
**Увага**
Ця можливість застаріла і буде обов'язково віддалена в майбутньому.

Визначає внутрішнє кодування символів за промовчанням.

Користувачі повинні залишити цю опцію порожньою та поставити замість неї
[`default_charset`](ini.core.md#ini.default-charset).

`mbstring.http_input` string
**Увага**
Ця можливість застаріла і буде обов'язково віддалена в майбутньому.

Визначає кодування символів за промовчанням для введення HTTP.

Користувачі повинні залишити цю опцію порожньою та поставити замість неї
[`default_charset`](ini.core.md#ini.default-charset).

`mbstring.http_output` string
**Увага**
Ця можливість застаріла і буде обов'язково віддалена в майбутньому.

Визначає кодування символів за замовчуванням для виводу HTTP (конвертація
з внутрішнього кодування кодування HTTP виводу відбудеться перед
виведенням).

Користувачі повинні залишити цю опцію порожньою та поставити замість неї
[`default_charset`](ini.core.md#ini.default-charset).

`mbstring.detect_order` string
Визначає порядок визначення кодування символів за промовчанням. Дивіться
також [mb_detect_order()](function.mb-detect-order.md).

`mbstring.substitute_character` string
Визначає символ заміни неприпустимих символів кодування. перелік
підтримуваних значень дивіться в описі функції
[mb_substitute_character()](function.mb-substitute-character.md).

`mbstring.func_overload` string
**Увага**
Ця функціональність оголошена *ЗАСТАРЛЕННОЮ*, починаючи з PHP 7.2.0 та
була *Видалена* у версії PHP 8.0.0. Використовувати цю функцію вкрай не
рекомендується.

Перевантажує багато однобайтових функцій аналогами з mbstring.
Дивіться розділ [Перевантаження функцій](mbstring.overload.md) для
отримання додаткової інформації.

Ця опція може бути змінена лише у файлі `php.ini`.

`mbstring.http_output_conv_mimetypes` string

`mbstring.strict_detection` bool
Включає чітке визначення кодування. Дивіться опис та приклади в
[mb_detect_encoding()](function.mb-detect-encoding.md).

Відповідно до [» специфікації HTML
4.01](http://www.w3.org/TR/REC-html40/interact/forms.md#adef-accept-charset),
веб-браузерам можна перекодувати дані з форми, які вони
отримують у кодуванні символів, відмінною від використовуваної на сторінці.
Дивіться функцію [mb_http_input()](function.mb-http-input.md) для
того, щоб визначити кодування символів, яке використовується браузерами.

Хоча популярні браузери здатні досить точно визначити кодування
символів даного HTML-документа, було б краще встановити параметр
`charset` у HTTP-заголовку `Content-Type` відповідним значенням з
за допомогою [header()](function.header.md) або вказати потрібне значення
у параметрі [default_charset](ini.core.md#ini.sect.data-handling)
ini-налаштуваннях.

**Приклад #1 Приклади налаштувань `php.ini`**

; Встановити мову за замовчуванням
mbstring.language u003d Neutral; Установити Neutral(UTF-8) за замовчуванням (за замовчуванням)
mbstring.language u003d English; Встановити англійською за замовчуванням
mbstring.language u003d Japanese; Встановити японську мову за замовчуванням

;;; Встановити внутрішнє кодування за замовчуванням
;;; Примітка: Переконайтеся, що ви використовуєте кодування символів, яке працює з PHP
mbstring.internal_encoding u003d UTF-8; Встановити внутрішнє кодування в UTF-8

;;; Увімкнено перетворення кодування HTTP-введення.
mbstring.encoding_translation u003d On

;;; Встановити кодування символів за промовчанням для введення HTTP
;;; Примітка: Скрипт не може змінити інсталяцію http_input.
mbstring.http_inputu003dpass; Немає перетворення.
mbstring.http_input u003d auto; Встановити HTTP-введення в auto
; "auto" розширюється відповідно до mbstring.language
mbstring.http_inputu003dSJIS; Встановити HTTP-введення у SJIS
mbstring.http_input u003d UTF-8, SJIS, EUC-JP; Вказати порядок

;;; Встановити кодування символів за промовчанням для виводу HTTP
mbstring.http_outputu003dpass; Немає перетворення.
mbstring.http_output u003d UTF-8; Встановити кодування HTTP-виводу в UTF-8

;;; Встановити порядок визначення кодування символів за промовчанням
mbstring.detect_order u003d auto; Встановити порядок визначення у auto
mbstring.detect_order u003d ASCII,JIS,UTF-8,SJIS,EUC-JP; Вказати порядок

;;; Встановити символ заміни за промовчанням
mbstring.substitute_character u003d 12307; Вказати значення Unicode
mbstring.substitute_characteru003dnone; Не друкувати символ
mbstring.substitute_character u003d long; Приклад кодових значень символів: U+3000,JIS+7E7E

**Приклад #2 Налаштування `php.ini` для користувачів `EUC-JP`**

;;; Вимкнути буферизацію виводу
output_buffering u003d Off

;;; Встановити кодування у http-заголовку
default_charset u003d EUC-JP

;;; Встановити японську мову за замовчуванням
mbstring.languageu003dJapanese

;;; Увімкнено перетворення кодування HTTP-введення.
mbstring.encoding_translation u003d On

;;; Встановити перекодування HTTP-введення в auto
mbstring.http_inputu003dauto

;;; Конвертувати HTTP-виведення в EUC-JP
mbstring.http_output u003d EUC-JP

;;; Встановити внутрішнє кодування в EUC-JP
mbstring.internal_encoding u003d EUC-JP

;;; Не друкувати неприпустимі символи
mbstring.substitute_character u003d none

**Приклад #3 Налаштування `php.ini` для користувачів `SJIS`**

;;; Включити буферизацію виводу
output_buffering u003d On

;;; Встановити mb_output_handler для увімкнення перекодування виводу
output_handler u003d mb_output_handler

;;; Встановити кодування у http-заголовку
default_charset u003d Shift_JIS

;;; Встановити японську мову за замовчуванням
mbstring.languageu003dJapanese

;;; Встановити перекодування HTTP-введення в auto
mbstring.http_inputu003dauto

;;; Конвертувати у SJIS
mbstring.http_outputu003dSJIS

;;; Встановити внутрішнє кодування в EUC-JP
mbstring.internal_encoding u003d EUC-JP

;;; Не друкувати неприпустимі символи
mbstring.substitute_character u003d none
