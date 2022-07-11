- [« ibase_service_attach](function.ibase-service-attach.md)
- [ibase_set_event_handler »](function.ibase-set-event-handler.md)

- [PHP Manual](index.md)
- [Функції Firebird/InterBase](ref.ibase.md)
- відключається від диспетчера служб

# ibase_service_detach

(PHP 5, PHP 7 \< 7.4.0)

ibase_service_detach — Вимикається від диспетчера служб

### Опис

**ibase_service_detach**(resource `$service_handle`): bool

### Список параметрів

`service_handle`
Раніше створене з'єднання із сервером бази даних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ibase_service_detach()****

` <?php    // Присоединение к удаленному серверу Firebird по IP-адресу    if (($service u003d ibase_service_attach('10.1.1.199', 'sysdba', 'masterkey')) !u003d FALSE) {        // Присоединение прошло успешно. // Повернення версії сервера (щось на зразок 'LI-V3.0.4.33054 Firebird 3.0')       $server_version  u003d ibase_server_info($SERVE,VC // Повернення реалізації сервера (щось на зразок'Firebird/Linux/AMD/Intel/x64')        $server_implementation u003d ibase_server_info($service, IBASE_SVC_IMP; // Від'єднання від сервера (відключення)        if(ibase_service_detach($service) u003du003d FALSE) {             echo "|| }|||||||||||| }    }   else {         // Висновок повідомлення в випадку виникнення помилки         $conn_error u003d| die($conn_error); }?> `
