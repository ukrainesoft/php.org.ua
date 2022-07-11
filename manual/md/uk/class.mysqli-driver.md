- [« mysqli_result::$num_rows](mysqli-result.num-rows.md)
- [mysqli_driver::embedded_server_end
»](mysqli-driver.embedded-server-end.md)

- [PHP Manual](index.md)
- [MySQLi](book.mysqli.md)
- Клас mysqli_driver

# Клас mysqli_driver

(PHP 5, PHP 7, PHP 8)

## Вступ

Клас **mysqli_driver** є екземпляром шаблону monostate, тобто
є лише один драйвер, до якого можна отримати доступ через
довільна кількість екземплярів **mysqli_driver**.

## Огляд класів

final class **mysqli_driver** {

/\* Властивості \*/

public readonly string `$client_info`;

public readonly int `$client_version`;

public readonly int `$driver_version`;

public readonly bool `$embedded`;

public bool `$reconnect` u003d false;

public int `$report_mode`;

/\* Методи \*/

public [embedded_server_end](mysqli-driver.embedded-server-end.md)():
void

public
[embedded_server_start](mysqli-driver.embedded-server-start.md)(int
`$start`, array `$arguments`, array `$groups`): bool

}

## Властивості

`client_info`
Версія заголовка Client API

`client_version`
Версія Client

`driver_version`
Версія MySQLi Driver

**Увага**
Властивість оголошено *застарілим* у PHP 8.1.0. Покладатися на властивість
украй не рекомендується.

`embedded`
Статус підтримки MySQLi Embedded

**Увага**
Властивість *віддалено* у PHP 8.0.0.

`reconnect`
Дозволити або заборонити перепідключення (дивіться INI-директиву
mysqli.reconnect)

`report_mode`
Встановити **`MYSQLI_REPORT_OFF`**, **`MYSQLI_REPORT_ALL`** або будь-яку
комбінацію з **`MYSQLI_REPORT_STRICT`** (виклик винятків для помилок),
**`MYSQLI_REPORT_ERROR`** (повідомлення про помилки) та
**`MYSQLI_REPORT_INDEX`** (помилки, пов'язані з індексами). Дивіться
також [mysqli_report()](function.mysqli-report.md).

## Зміст

- [mysqli_driver::embedded_server_end](mysqli-driver.embedded-server-end.md)
- Зупиняє вбудований сервер
- [mysqli_driver::embedded_server_start](mysqli-driver.embedded-server-start.md)
— Ініціалізує та запускає вбудований сервер
- [mysqli_driver::$report_mode](mysqli-driver.report-mode.md) -
Встановлює режим звіту про помилки mysqli
