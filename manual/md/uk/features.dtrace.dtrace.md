- [« Введення в PHP та DTrace](features.dtrace.introduction.md)
- [Використання SystemTap із статичними зондами PHP DTrace
»](features.dtrace.systemtap.md)

- [PHP Manual](index.md)
- [Динамічна трасування DTrace](features.dtrace.md)
- Використання PHP та DTrace

## Використання PHP та DTrace

PHP може бути налаштований зі статичними зондами DTrace на
платформах, що підтримують динамічне трасування DTrace.

### Конфігурування PHP зі статичними зондами DTrace

Зверніться до документації вашої платформи, щоб увімкнути підтримку
DTrace у вашій операційній системі. Наприклад, в Oracle Linux
необхідно завантажити ядро UEK3 і зробити таке:

`# modprobe fasttrap# chmod 666 /dev/dtrace/helper`

Замість `chmod`, ви можете використовувати пакет правил ACL для обмеження
доступу до конкретного користувача.

Складання PHP з ключем `--enable-dtrace`:

` # ./configure --enable-dtrace ...# make# make install`

Це включає статичні зонди в ядрі PHP. Будь-який модуль PHP,
що надає власні зонди, має бути зібраний окремо як
модуль, що розділяється.

### Статичні зонди DTrace в ядрі PHP

| Ім'я зонда Опис зонда Аргументи |
|-----------------------|------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|------------------------------ -------------------------------------------------- -----------------|
| `request-startup` | Спрацьовує на початку запиту. | char \*`file`, char \*`request_uri`, char \*`request_method` |
| `request-shutdown` | Спрацьовує після закінчення запиту. | char \*`file`, char \*`request_uri`, char \*`request_method` |
| `compile-file-entry` | Спрацьовує коли починається компіляція скрипта. | char \*`compile_file`, char \*`compile_file_translated` |
| `compile-file-return` | Спрацьовує, коли закінчується компіляція скрипту. | char \*`compile_file`, char \*`compile_file_translated` |
| `execute-entry` | Спрацьовує, коли запускається масив байт-коду. Наприклад, коли викликаються функції, відновлюється робота генератора чи відбувається include. | char \*`request_file`, int `lineno` |
| `execute-return` | Спрацьовує після відпрацювання масиву байт-коду. | char \*`request_file`, int `lineno` |
| `function-entry` | Спрацьовує, коли двигун PHP починає запуск функції або методу. | char \*`function_name`, char \*`request_file`, int `lineno`, char \*`classname`, char \*`scope` |
| `function-return` | Спрацьовує, коли двигун PHP повертається з функції або методу. | char \*`function_name`, char \*`request_file`, int `lineno`, char \*`classname`, char \*`scope` |
| `exception-thrown` | Спрацьовує, коли викинутий виняток. | char \*`classname` |
| `exception-caught` | Спрацьовує, коли виняток спіймано. | char \*`classname` |
| `error` | Спрацьовує, якщо сталася помилка, незалежно від рівня [error_reporting](errorfunc.configuration.md#ini.error-reporting). | char \*`errormsg`, char \*`request_file`, int `lineno` |

**Наступні статичні зонди доступні в PHP**

Модулі PHP можуть мати додаткові зонди.

### Список статичних зондів DTrace в PHP

Для отримання списку зондів, запустіть процес PHP та виконайте:

# dtrace -l

Висновок буде приблизно такий:

ID PROVIDER MODULE FUNCTION NAME
[ . . . ]
4 php15271 php dtrace_compile_file compile-file-entry
5 php15271 php dtrace_compile_file compile-file-return
6 php15271 php zend_error error
7 php15271 php ZEND_CATCH_SPEC_CONST_CV_HANDLER exception-caught
8 php15271 php zend_throw_exception_internal exception-thrown
9 php15271 php dtrace_execute_ex execute-entry
10 php15271 php dtrace_execute_internal execute-entry
11 php15271 php dtrace_execute_ex execute-return
12 php15271 php dtrace_execute_internal execute-return
13 php15271 php dtrace_execute_ex function-entry
14 php15271 php dtrace_execute_ex function-return
15 php15271 php php_request_shutdown request-shutdown
16 php15271 php php_request_startup request-startup

Колонка Provider містить напис `php` та pid поточного запущеного
процесу PHP.

Якщо запущено веб-сервер Apache, ім'я модуля може бути, наприклад,
`libphp5.so`, і може бути безліч блоків списку, по одному на кожен
процес Apache.

Колонка Function посилається на ім'я внутрішньої С-функції PHP, що реалізує
відповідний зонд.

Якщо PHP не запущено, то пов'язаних з ним зондів у списку не буде.

### Приклади використання DTrace з PHP

Цей приклад показує основні можливості скриптової мови DTrace D.

**Приклад #1 `all_probes.d` - трасування всіх статичних зондів PHP з
за допомогою DTrace**

#!/usr/sbin/dtrace -Zs

#pragma D option quiet

php*:::compile-file-entry
{
printf("PHP compile-file-entry
");
printf(" compile_file %s
", copyinstr(arg0));
printf(" compile_file_translated %s
", copyinstr(arg1));
}

php*:::compile-file-return
{
printf("PHP compile-file-return
");
printf(" compile_file %s
", copyinstr(arg0));
printf(" compile_file_translated %s
", copyinstr(arg1));
}

php*:::error
{
printf("PHP error
");
printf(" errormsg %s
", copyinstr(arg0));
printf(" request_file %s
", copyinstr(arg1));
printf(" lineno %d
", (int) arg2);
}

php*:::exception-caught
{
printf("PHP exception-caught
");
printf(" classname %s
", copyinstr(arg0));
}

php*:::exception-thrown
{
printf("PHP exception-thrown
");
printf(" classname %s
", copyinstr(arg0));
}

php*:::execute-entry
{
printf("PHP execute-entry
");
printf(" request_file %s
", copyinstr(arg0));
printf(" lineno %d
", (int) arg1);
}

php*:::execute-return
{
printf("PHP execute-return
");
printf(" request_file %s
", copyinstr(arg0));
printf(" lineno %d
", (int) arg1);
}

php*:::function-entry
{
printf("PHP function-entry
");
printf(" function_name %s
", copyinstr(arg0));
printf(" request_file %s
", copyinstr(arg1));
printf(" lineno %d
", (int) arg2);
printf(" classname %s
", copyinstr(arg3));
printf(" scope %s
", copyinstr(arg4));
}

php*:::function-return
{
printf("PHP function-return
");
printf(" function_name %s
", copyinstr(arg0));
printf(" request_file %s
", copyinstr(arg1));
printf(" lineno %d
", (int) arg2);
printf(" classname %s
", copyinstr(arg3));
printf(" scope %s
", copyinstr(arg4));
}

php*:::request-shutdown
{
printf("PHP request-shutdown
");
printf(" file %s
", copyinstr(arg0));
printf(" request_uri %s
", copyinstr(arg1));
printf(" request_method %s
", copyinstr(arg2));
}

php*:::request-startup
{
printf("PHP request-startup
");
printf(" file %s
", copyinstr(arg0));
printf(" request_uri %s
", copyinstr(arg1));
printf(" request_method %s
", copyinstr(arg2));
}

Цей скрипт використовує опцію `-Z` для `dtrace`, дозволяючи йому працювати
навіть якщо жодного процесу PHP не запущено. Якщо не використати цю
опцію, то скрипт відразу ж завершить виконання, оскільки не побачить жодного
одного зонда, який треба відстежувати.

Скрипт відстежує всі статичні зонди PHP протягом усього часу роботи
PHP-скрипт. Запускаємо D-скрипт:

# ./all_probes.d

Запустіть скрипт або програму PHP. Відстежуючий D-скрипт буде
виводити аргументи всіх зондів, що спрацювали.

Коли ви побачили все, що хотіли, перервати роботу скрипта можна
комбінацією `^C`.

На багатопроцесорних машинах, порядок зондів може бути не
послідовним, залежно від того, на яких процесорах працюють
зонди та як мігрують потоки між процесорами. Відображення тимчасових
міток дозволить уникнути конфузів. Наприклад:

php*:::function-entry
{
printf("%lld: PHP function-entry", walltimestamp);
[ . . .]
}

### Також дивіться

- [OCI8 та динамічне трасування DTrace](oci8.dtrace.md)
