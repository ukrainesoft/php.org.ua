- [« Основні відмінності від інших реалізацій
SAPI] (features.commandline.differences.md)
- [Використання »](features.commandline.usage.md)

- [PHP Manual](index.md)
- [Використання PHP у командному рядку](features.commandline.md)
- Список опцій командного рядка

## Список опцій командного рядка

Список опцій командного рядка, що надаються PHP, можуть бути отримані
будь-якої миті, запустивши PHP з ключем **-h**:

Usage: php [options] [-f] <file> [--] [args...]
php [options] -r <code> [--] [args...]
php [options] [-B <begin_code>] -R <code> [-E <end_code>] [--] [args...]
php [options] [-B <begin_code>] -F <file> [-E <end_code>] [--] [args...]
php [options] -- [args...]
php [options] -a

-a Run interactively
-c <path>|<file> Look for php.ini file in this directory
-n No php.ini file will be used
-d foo[u003dbar] Define INI entry foo with value 'bar'
-e Generate extended information for debugger/profiler
-f <file> Parse and execute <file>.
-h Цей Help
-i PHP information
-l Syntax check only (lint)
-m Show compiled in modules
-r <code> Run PHP <code> без використання script tags <?..?>
-B <begin_code> Run PHP <begin_code> before processing input lines
-R <code> Run PHP <code> для every input line
-F <file> Parse and execute <file> для every input line
-E <end_code> Run PHP <end_code> після processing all input lines
-H Hide any passed arguments from external tools.
-S <addr>:<port> Run with built-in web server.
-t <docroot> Спеціальний документ root <docroot> для створення сайту веб-сервера.
-s Output HTML syntax highlighted source.
-v Version number
-w Output source with stripped comments and whitespace.
-z <file> Load Zend extension <file>.

args... Arguments passed to script. Use -- args when first argument
starts with - or script is read from stdin

--ini Show configuration file names

--rf <name> Show information about function <name>.
--rc <name> Show information about class <name>.
--re <name> Перегляд інформації про extension <name>.
--rz <name> Перевірка інформації про Zend extension <name>.
--ri <name> Show configuration for extension <name>.

[TABLE]

**Опції, доступні з командного рядка**

> **Примітка**:
>
> Опції `-rBRFEH`, `--ini` та `--r[fcezi]` доступні лише в CLI.
