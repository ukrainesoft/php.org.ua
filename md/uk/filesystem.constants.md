- [« Типи ресурсів](filesystem.resources.md)
- [Функції файлової системи»] (ref.filesystem.md)

- [PHP Manual](index.md)
- [Файлова система](book.filesystem.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`SEEK_SET`** (int)

**`SEEK_CUR`** (int)

**`SEEK_END`** (int)

**`LOCK_SH`** (int)

**`LOCK_EX`** (int)

**`LOCK_UN`** (int)

**`LOCK_NB`** (int)

**`GLOB_BRACE`** (int)

**`GLOB_ONLYDIR`** (int)

**`GLOB_MARK`** (int)

**`GLOB_NOSORT`** (int)

**`GLOB_NOCHECK`** (int)

**`GLOB_NOESCAPE`** (int)

**`GLOB_AVAILABLE_FLAGS`** (int)

**`PATHINFO_DIRNAME`** (int)

**`PATHINFO_BASENAME`** (int)

**`PATHINFO_EXTENSION`** (int)

**`PATHINFO_FILENAME`** (int)

**`FILE_USE_INCLUDE_PATH`** (int)
Шукає `filename` у [include_path](ini.core.md#ini.include-path).

**`FILE_NO_DEFAULT_CONTEXT`** (int)

**`FILE_APPEND`** (int)
Додає дані до наявного файлу.

**`FILE_IGNORE_NEW_LINES`** (int)
Вирізають кінці рядків (EOL).

**`FILE_SKIP_EMPTY_LINES`** (int)
Пропускаються порожні рядки.

**`FILE_BINARY`** (int)
Бінарний режим.

> **Примітка**:
>
> Ця константа ні на що не впливає і доступна лише для наступної
> сумісності (`forward compatibility`).

**`FILE_TEXT`** (int)
Текстовий режим

> **Примітка**:
>
> Ця константа ні на що не впливає і доступна лише для наступної
> сумісності (`forward compatibility`).

**`INI_SCANNER_NORMAL`** (int)
Звичайний режим сканування INI.

**`INI_SCANNER_RAW`** (int)
Режим необробленого сканування INI.

**`INI_SCANNER_TYPED`** (int)
Режим типового сканування INI.

**`FNM_NOESCAPE`** (int)
Вимикає екранування зворотних слішів.

**`FNM_PATHNAME`** (int)
Сліші в рядках збігаються лише зі слішами у вказаному шаблоні.

**`FNM_PERIOD`** (int)
Провідна точка у рядку повинна точно співпадати з точкою у вказаному
шаблон.

**`FNM_CASEFOLD`** (int)
Збіг без урахування регістру. Частина розширення GNU.
