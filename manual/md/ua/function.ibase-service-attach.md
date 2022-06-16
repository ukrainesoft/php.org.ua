- [« ibase_server_info](function.ibase-server-info.md)
- [ibase_service_detach »](function.ibase-service-detach.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- підключається до диспетчера служб

# ibase_service_attach

(PHP 5, PHP 7 \< 7.4.0)

ibase_service_attach — Підключається до диспетчера служб

### Опис

**ibase_service_attach**(string `$host`, string `$dba_username`, string
`$dba_password`): resource\|false

### Список параметрів

`host`
Ім'я або IP-адреса хоста бази даних. Ви можете вказати порт, додавши '/'
та номер порту. Якщо порт не вказано, використовуватиметься порт 3050.

`dba_username`
Ім'я будь-якого дійсного користувача.

`dba_password`
Пароль користувача.

### Значення, що повертаються

Повертає ідентифікатор посилання Interbase / Firebird у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ibase_service_attach()****

` <?php    // Присоединение к удаленному серверу Firebird по IP-адресу    if (($service u003d ibase_service_attach('10.1.1.199', 'sysdba', 'masterkey')) !u003d FALSE) {        // Присоединение прошло успешно. // Повернення версії сервера (щось на зразок 'LI-V3.0.4.33054 Firebird 3.0')       $server_version  u003d ibase_server_info($SERVE,VC // Повернення реалізації сервера (щось на зразок'Firebird/Linux/AMD/Intel/x64')        $server_implementation u003d ibase_server_info($service, IBASE_SVC_IMP; // Від'єднання від сервера (відключення) ibase_service_detach ($ service); // Висновок інформації        echo "Версія сервера: " . $server_version . "<br/>"; echo "Реалізація сервера: " . $ server_implementation; }   else {         // Висновок повідомлення в випадку виникнення помилки        $conn_error u003d ibase_errms() die($conn_error); }?> `

**Приклад #2 Приклад використання **ibase_service_attach()** з
синтаксисом `hostname/port`**

`<?php    // Приєднання до віддаленого серверу Firebird по імені. Використовується порт 3050. (                                            | // Повернення версії сервера (щось на зразок 'LI-V3.0.4.33054 Firebird 3.0')       $server_version  u003d ibase_server_info($SERVE,VC // Повернення реалізації сервера (щось на зразок'Firebird/Linux/AMD/Intel/x64')        $server_implementation u003d ibase_server_info($service, IBASE_SVC_IMP; // Від'єднання від сервера (відключення) ibase_service_detach ($ service); // Висновок інформації        echo "Версія сервера: " . $server_version . "<br/>"; echo "Реалізація сервера: " . $ server_implementation; }   else {         // Висновок повідомлення в випадку виникнення помилки        $conn_error u003d ibase_errms() die($conn_error); }?> `

### Дивіться також

- [ibase_service_detach()](function.ibase-service-detach.md) -
Відключається від диспетчера служб
