- [« Використання PHP та DTrace](features.dtrace.dtrace.md)
- [Довідник функцій »](funcref.md)

- [PHP Manual](index.md)
- [Динамічна трасування DTrace](features.dtrace.md)
- Використання SystemTap зі статичними зондами PHP DTrace

## Використання SystemTap зі статичними зондами PHP DTrace

У деяких дистрибутивах Linux можна використовувати утиліту трасування
SystemTap для відстеження статичних зондів DTrace. Цей варіант
доступний у PHP 5.4.20 та PHP 5.5.

### Установка PHP з SystemTap

Встановіть розробний пакет SystemTap SDT:

`` shellcode
# yum install systemtap-sdt-devel
````

Встановіть PHP з DTrace:

`` shellcode
# ./configure --enable-dtrace ...
# make
````

### Отримання списку статичних зондів за допомогою SystemTap

Статичні зонди PHP можна подивитися, використовуючи `stap`:

# stap -l 'process.provider("php").mark("*")' -c 'sapi/cli/php -i'

Зразковий висновок:

process("sapi/cli/php").provider("php").mark("compile__file__entry")
process("sapi/cli/php").provider("php").mark("compile__file__return")
process("sapi/cli/php").provider("php").mark("error")
process("sapi/cli/php").provider("php").mark("exception__caught")
process("sapi/cli/php").provider("php").mark("exception__thrown")
process("sapi/cli/php").provider("php").mark("execute__entry")
process("sapi/cli/php").provider("php").mark("execute__return")
process("sapi/cli/php").provider("php").mark("function__entry")
process("sapi/cli/php").provider("php").mark("function__return")
process("sapi/cli/php").provider("php").mark("request__shutdown")
process("sapi/cli/php").provider("php").mark("request__startup")

### Приклад використання SystemTap з PHP

**Приклад #1 `all_probes.stp` - трасування всіх статичних зондів PHP**

`` shellcode
probe process("sapi/cli/php").provider("php").mark("compile__file__entry") {
printf("Probe compile__file__entry
");
printf(" compile_file %s
", user_string($arg1));
printf(" compile_file_translated %s
", user_string($arg2));
}
probe process("sapi/cli/php").provider("php").mark("compile__file__return") {
printf("Probe compile__file__return
");
printf(" compile_file %s
", user_string($arg1));
printf(" compile_file_translated %s
", user_string($arg2));
}
probe process("sapi/cli/php").provider("php").mark("error") {
printf("Probe error
");
printf(" errormsg %s
", user_string($arg1));
printf(" request_file %s
", user_string($arg2));
printf(" lineno %d
", $ arg3);
}
probe process("sapi/cli/php").provider("php").mark("exception__caught") {
printf("Probe exception__caught
");
printf(" classname %s
", user_string($arg1));
}
probe process("sapi/cli/php").provider("php").mark("exception__thrown") {
printf("Probe exception__thrown
");
printf(" classname %s
", user_string($arg1));
}
probe process("sapi/cli/php").provider("php").mark("execute__entry") {
printf("Probe execute__entry
");
printf(" request_file %s
", user_string($arg1));
printf(" lineno %d
", $ arg2);
}
probe process("sapi/cli/php").provider("php").mark("execute__return") {
printf("Probe execute__return
");
printf(" request_file %s
", user_string($arg1));
printf(" lineno %d
", $ arg2);
}
probe process("sapi/cli/php").provider("php").mark("function__entry") {
printf("Probe function__entry
");
printf(" function_name %s
", user_string($arg1));
printf(" request_file %s
", user_string($arg2));
printf(" lineno %d
", $ arg3);
printf(" classname %s
", user_string($arg4));
printf(" scope %s
", user_string($arg5));
}
probe process("sapi/cli/php").provider("php").mark("function__return") {
printf("Probe function__return: %s
", user_string($arg1));
printf(" function_name %s
", user_string($arg1));
printf(" request_file %s
", user_string($arg2));
printf(" lineno %d
", $ arg3);
printf(" classname %s
", user_string($arg4));
printf(" scope %s
", user_string($arg5));
}
probe process("sapi/cli/php").provider("php").mark("request__shutdown") {
printf("Probe request__shutdown
");
printf(" file %s
", user_string($arg1));
printf(" request_uri %s
", user_string($arg2));
printf(" request_method %s
", user_string($arg3));
}
probe process("sapi/cli/php").provider("php").mark("request__startup") {
printf("Probe request__startup
");
printf(" file %s
", user_string($arg1));
printf(" request_uri %s
", user_string($arg2));
printf(" request_method %s
", user_string($arg3));
}
````

Наведений вище скрипт виводитиме дані статичних зондів PHP на
протягом роботи PHP-скрипту:

# stap -c 'sapi/cli/php test.php' all_probes.stp
