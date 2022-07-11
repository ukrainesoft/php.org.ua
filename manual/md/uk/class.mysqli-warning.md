- [« mysqli_driver::$report_mode](mysqli-driver.report-mode.md)
- [mysqli_warning::\_\_construct »](mysqli-warning.construct.md)

- [PHP Manual](index.md)
- [MySQLi](book.mysqli.md)
- Клас mysqli_warning

# Клас mysqli_warning

(PHP 5, PHP 7, PHP 8)

## Вступ

Попереджає MySQL.

## Огляд класів

final class **mysqli_warning** {

/\* Властивості \*/

public string `$message`;

public string `$sqlstate`;

public int `$errno`;

/\* Методи \*/

private [\_\_construct](mysqli-warning.construct.md)()

public [next](mysqli-warning.next.md)(): bool

}

## Властивості

`message`
Рядок повідомлення

`sqlstate`
Код SQLstate

`errno`
Номер помилки

## Зміст

- [mysqli_warning::\_\_construct](mysqli-warning.construct.md) -
Закритий конструктор для заборони прямого створення екземпляра
- [mysqli_warning::next](mysqli-warning.next.md) — Отримує
наступне попередження
