- [« PDO::pgsqlLOBUnlink](pdo.pgsqllobunlink.md)
- [PDO_SQLITE DSN »](ref.pdo-sqlite.connection.md)

- [PHP Manual](index.md)
- [Драйвери PDO](pdo.drivers.md)
- Функції SQLite (PDO_SQLITE)

# Функції SQLite (PDO_SQLITE)

## Вступ

PDO_SQLITE – це драйвер, який реалізує [інтерфейс Data Objects
(PDO)](intro.pdo.md) для забезпечення доступу до баз даних SQLite 3.

> **Примітка**:
>
> PDO_SQLITE дозволяє використовувати рядки крім потоків разом з
> **`PDO::PARAM_LOB`**.

## Установка

Драйвер PDO_SQLITE PDO доступний за замовчуванням. Для відключення використовуйте
**--without-pdo-sqlite\[u003dDIR\]**, де `[u003dDIR]` - директорія, куди
встановлений sqlite. Починаючи з PHP 7.4.0, потрібна бібліотека
[» libsqlite](http://sqlite.org/) версії 3.5.0 або новіші. Раніше
вбудований з коробки libsqlite міг використовуватися замість цього, і був
за замовчуванням, якщо опція `[u003dDIR]` не задана.

> **Примітка**: **Додаткове налаштування на Windows з PHP 7.4.0**
>
> Для роботи цього модуля системної змінної Windows `PATH` мають бути
> Доступні файли DLL. Щоб дізнатися як цього досягти, зверніться до
> розділ FAQ "[Як додати мою директорію з PHP до змінної Windows
> PATH](faq.installation.md#faq.installation.addtopath)". Хоча
> копіювання DLL-файлів із директорії PHP до системної папки Windows
> також вирішує проблему (бо системна директорія за замовчуванням
> перебуває у змінній `PATH`), це рекомендується. *Цьому модулю
> потрібні наступні файли в змінній `PATH`: * `libsqlite3.dll`.

## Зміст

- [PDO_SQLITE DSN](ref.pdo-sqlite.connection.md) — З'єднання з
базою даних SQLite
- [PDO::sqliteCreateAggregate](pdo.sqlitecreateaggregate.md) -
Реєстрація агрегуючої функції користувача для використання
у SQL-запитах
- [PDO::sqliteCreateCollation](pdo.sqlitecreatecollation.md) -
Реєстрація користувальницької функції сортування для використання в
SQL-запитах
- [PDO::sqliteCreateFunction](pdo.sqlitecreatefunction.md) -
Реєстрація користувальницької функції для використання в
SQL-запитах
