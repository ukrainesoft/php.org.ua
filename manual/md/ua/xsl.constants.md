- [« Типи ресурсів](xsl.resources.md)
- [Приклади »](xsl.examples.md)

- [PHP Manual](index.md)
- [XSL](book.xsl.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні тільки в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`XSL_CLONE_AUTO`** (int)

**`XSL_CLONE_NEVER`** (int)

**`XSL_CLONE_ALWAYS`** (int)

**`LIBXSLT_VERSION`** (int)
версія libxslt формату 10117

**`LIBXSLT_DOTTED_VERSION`** (string)
Версія libxslt формату 1.1.17.

**`LIBEXSLT_VERSION`** (int)
версія libexslt формату 813.

**`LIBEXSLT_DOTTED_VERSION`** (string)
Версія libexslt формату 1.1.17.

**`XSL_SECPREF_NONE`** (int)
Вимкнення всіх обмежень безпеки.

**`XSL_SECPREF_READ_FILE`** (int)
Забороняє читання файлів.

**`XSL_SECPREF_WRITE_FILE`** (int)
Забороняє записувати файл.

**`XSL_SECPREF_CREATE_DIRECTORY`** (int)
Забороняє створення каталогів.

**`XSL_SECPREF_READ_NETWORK`** (int)
Забороняє читання мережевих файлів.

**`XSL_SECPREF_WRITE_NETWORK`** (int)
Забороняє запис мережних файлів.

**`XSL_SECPREF_DEFAULT`** (int)
Забороняє всі види доступу запис, тобто. битова маска
**`XSL_SECPREF_WRITE_NETWORK`** \| **`XSL_SECPREF_CREATE_DIRECTORY`** \|
**`XSL_SECPREF_WRITE_FILE`**.
