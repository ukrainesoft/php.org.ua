- [« Підтримка прозорого для програм відновлення після відмови
(Transparent Application Failover або TAF) для OCI8] (oci8.taf.md)
- [Підтримувані типи даних »](oci8.datatypes.md)

- [PHP Manual](index.md)
- [OCI8](book.oci8.md)
- OCI8 та динамічне трасування DTrace

# OCI8 та динамічне трасування DTrace

OCI8 2.0 містить статичні зонди DTrace, які можна використовувати в
операційні системи, що підтримують DTrace. Більш детально
взаємовідносини PHP та DTrace описані в розділі [Динамічна трасування
DTrace](features.dtrace.md).

## Установка OCI8 з підтримкою DTrace

Для включення підтримки DTrace в PHP OCI8, зберіть OCI8 як розділяється
модуль після встановлення змінної оточення `PHP_DTRACE`.

$ export PHP_DTRACEu003dyes
$ pecl install oci8

Відредагуйте php.ini, задавши
[extension_dir](ini.core.md#ini.extension-dir) рівним директорії, в
якої створився `oci8.so`, а також увімкніть модуль таким чином:

extensionu003doci8.so

Якщо ви встановили PHP OCI8 з PECL з використанням `phpize` та
`configure` (замість `pecl`), вам все ще буде необхідно встановити
`PHP_DTRACEu003dyes`. Це тому, що опція `--enable-dtrace` буде
проігнорована обмеженим скриптом `configure` модуля PECL.

Докладніше про встановлення PECL модулів читайте у розділі [Установка
модулів PECL](install.pecl.md).

## Статичні зонди DTrace в PHP OCI8

| Ім'я зонда Опис зонда Аргументи зонда
|-------------------------|----------------------- -------------------------------------------------- ----------------------------------------------|--- -------------------------------------------------- -------------------------------------------------- -------|
| `oci8-connect-entry` | Ініціюється oci_connect(), oci_pconnect() та oci_new_connect(). Спрацьовує перед тим, як з'єднання було встановлено. | char \*`username`, char \*`dbname`, char \*`charset`, long `session_mode`, int `persistent`, int `exclusive` |
| `oci8-connect-return` | Спрацьовує після встановлення з'єднання. | void \*`connection` |
| `oci8-check-connection` | Спрацьовує, якщо помилка Oracle може призвести до псування з'єднання. | void \*`connection`, char \*`client_id`, int `is_open`, long `errcode`, unsigned long `server_status` |
| `oci8-sqltext` | Спрацьовує під час запуску oci_parse(). | void \*`connection`, char \*`client_id`, void \*`statement`, char \*`sql` |
| `oci8-connection-close` | Спрацьовує, коли з'єднання остаточно знищено. | void \*`connection` |
| `oci8-error` | Спрацьовує, якщо виникла помилка Oracle. | int `status`, long `errcode` |
| `oci8-execute-mode` | Спрацьовує при [oci_execute()](function.oci-execute.md) для виявлення режиму запуску. | void \*`connection`, char \*`client_id`, void \*`statement`, unsigned int `mode` |

**Наступні статичні зонди доступні в PHP OCI8**

Ці зонди корисні при налагодженні скриптів OCI8.

Параметри `connection` та `statement` є вказівниками на внутрішні
структури, що використовуються для відстеження з'єднань та запущених
запитів.

Параметр `client_id` встановлюється функцією
[oci_set_client_identifier()](function.oci-set-client-identifier.md).

Ядро PHP містить статичні зонди. Дивіться розділ [Статичні
зонди DTrace у ядрі
PHP](features.dtrace.dtrace.md#features.dtrace.static-probes).

| Ім'я зонда
|-------------------------------|
| `oci8-connect-expiry` |
| `oci8-connect-lookup` |
| `oci8-connect-p-dtor-close` |
| `oci8-connect-p-dtor-release` |
| `oci8-connect-type` |
| `oci8-sesspool-create` |
| `oci8-sesspool-stats` |
| `oci8-sesspool-type` |

**Внутрішні налагоджувальні зонди DTrace в OCI8**

Ці зонди є корисними для розробників модуля OCI8. Для більш детальної
вивчайте вихідні коди OCI8.

## Отримання списку статичних зондів DTrace у PHP OCI8

Щоб отримати список доступних зондів, запустіть процес PHP і потім
запустіть:

# dtrace -l

Висновок буде приблизно наступним:

ID PROVIDER MODULE FUNCTION NAME
[ . . . ]
17 phpoci22116 oci8.so php_oci_dtrace_check_connection oci8-check-connection
18 phpoci22116 oci8.so php_oci_do_connect oci8-connect-entry
19 phpoci22116 oci8.so php_oci_persistent_helper oci8-connect-expiry
20 phpoci22116 oci8.so php_oci_do_connect_ex oci8-connect-lookup
21 phpoci22116 oci8.so php_oci_pconnection_list_np_dtor oci8-connect-p-dtor-close
22 phpoci22116 oci8.so php_oci_pconnection_list_np_dtor oci8-connect-p-dtor-release
23 phpoci22116 oci8.so php_oci_do_connect oci8-connect-return
24 phpoci22116 oci8.so php_oci_do_connect_ex oci8-connect-type
25 phpoci22116 oci8.so php_oci_connection_close oci8-connection-close
26 phpoci22116 oci8.so php_oci_error oci8-error
27 phpoci22116 oci8.so php_oci_statement_execute oci8-execute-mode
28 phpoci22116 oci8.so php_oci_create_spool oci8-sesspool-create
29 phpoci22116 oci8.so php_oci_create_session oci8-sesspool-stats
30 phpoci22116 oci8.so php_oci_create_session oci8-sesspool-type
31 phpoci22116 oci8.so php_oci_statement_create oci8-sqltext

Стовпець "Provider" складається з `phpoci` та ідентифікатора запущеного
процесу PHP.

Стовпець "Function" містить імена внутрішніх, написаних на C, функцій
PHP, які містять відповідні провайдери (Provider).

Якщо процес PHP не запущено, то ніяких зондів PHP не буде показано.

## Приклад використання DTrace з PHP OCI8

У цьому прикладі показано основи скриптової мови DTrace D.

**Приклад #1 `user_oci8_probes.d` для трасування всіх статичних зондів
PHP OCI8 за допомогою DTrace на рівні користувача**

#!/usr/sbin/dtrace -Zs

#pragma D option quiet

php*:::oci8-connect-entry
{
printf("%lld: PHP connect-entry
", walltimestamp);
printf(" credentialsu003d\"%s@%s\"
", arg0 ? copyinstr(arg0) : "", arg1 ? copyinstr(arg1) : "");
printf(" charsetu003d\"%s\"
", arg2 ? copyinstr(arg2) : "");
printf(" session_modeu003d%ld
", (long) arg3);
printf(" persistentu003d%d
", (int) arg4);
printf(" exclusiveu003d%d
", (int) arg5);
}

php*:::oci8-connect-return
{
printf("%lld: PHP oci8-connect-return
", walltimestamp);
printf(" connectionu003d0x%p
", (void *) arg0);
}

php*:::oci8-connection-close
{
printf("%lld: PHP oci8-connect-close
", walltimestamp);
printf(" connectionu003d0x%p
", (void *) arg0);
}

php*:::oci8-error
{
printf("%lld: PHP oci8-error
", walltimestamp);
printf(" statusu003d%d
", (int) arg0);
printf(" errcodeu003d%ld
", (long) arg1);
}

php*:::oci8-check-connection
{
printf("%lld: PHP oci8-check-connection
", walltimestamp);
printf(" connectionu003d0x%p
", (void *) arg0);
printf("client_idu003d\"%s\"
", arg1 ? copyinstr(arg1) : "");
printf(" is_openu003d%d
", arg2);
printf(" errcodeu003d%ld
", (long) arg3);
printf(" server_statusu003d%lu
", (unsigned long) arg4);
}

php*:::oci8-sqltext
{
printf("%lld: PHP oci8-sqltext
", walltimestamp);
printf(" connectionu003d0x%p
", (void *) arg0);
printf("client_idu003d\"%s\"
", arg1 ? copyinstr(arg1) : "");
printf(" statementu003d0x%p
", (void *) arg2);
printf(" sqlu003d\"%s\"
", arg3 ? copyinstr(arg3) : "");
}

php*:::oci8-execute-mode
{
printf("%lld: PHP oci8-execute-mode
", walltimestamp);
printf(" connectionu003d0x%p
", (void *) arg0);
printf("client_idu003d\"%s\"
", arg1 ? copyinstr(arg1) : "");
printf(" statementu003d0x%p
", (void *) arg2);
printf(" modeu003d0x%x
", arg3);
}

У цьому скрипті з `dtrace` використовується опція `-Z`, що дозволяє йому
запускатись навіть якщо жодних процесів PHP не запущено. Якщо не поставити
цю опцію, то скрипт відразу ж припинить свою роботу, оскільки
відсутні зонди для відстеження.

На багатопроцесорних машинах порядок зондів може бути не
послідовним. Це залежить від того, на яких ядрах працюють зонди та
як потоки мігрують між ядрами. У такій ситуації має
сенс орієнтуватися на тимчасові мітки зондів.

Скрипт відстежує всі повідомлення статичних зондів PHP OCI8 рівня
користувача протягом роботи скрипта PHP. Запускаємо скрипт D:

# ./user_oci8_probes.d

Запускаємо скрипт PHP або свою програму. D-скрипт виводитиме все
аргументи зондів за її спрацьовуванні. Наприклад, простий скрипт PHP,
виконуючий запит до бази даних може створювати такі повідомлення:

1381794982092854582: PHP connect-entry
credentialsu003d"hr@localhost/pdborcl"
charsetu003d""
session_modeu003d0
persistentu003d0
exclusiveu003d0
1381794982183158766: PHP oci8-connect-return
connectionu003d0x7f4a7907bfb8
1381794982183594576: PHP oci8-sqltext
connectionu003d0x7f4a7907bfb8
client_idu003d"Chris"
statementu003d0x7f4a7907c2a0
sqlu003d"select * from employees"
1381794982183783706: PHP oci8-execute-mode
connectionu003d0x7f4a7907bfb8
client_idu003d"Chris"
statementu003d0x7f4a7907c2a0
modeu003d0x20
1381794982444344390: PHP oci8-connect-close
connectionu003d0x7f4a7907bfb8

Після завершення діагностики D-скрипт можна перервати за допомогою натискання
`^C`.

## Дивіться також

- [Динамічна трасування DTrace](features.dtrace.md)
