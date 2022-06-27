- [«CUBRID (PDO)](ref.pdo-cubrid.md)
- [PDO::cubrid_schema »](pdo.cubrid-schema.md)

- [PHP Manual](index.md)
- [CUBRID (PDO)](ref.pdo-cubrid.md)
- З'єднання з базою даних CUBRID

#PDO_CUBRID DSN

(PECL PDO_CUBRID \>u003d 8.3.0.0001)

PDO_CUBRID DSN — З'єднання з базою даних CUBRID

### Опис

Ім'я джерела даних (Data Source Name, DSN) PDO_CUBRID складається з
наступних елементів, розділених крапкою з комою:

Префікс DSN
**`cubrid:`**.

`host`
Ім'я хоста, на якому розгорнуто базу даних.

`port`
Порт, де база даних слухає підключення.

`dbname`
Назва бази даних.

### Примітки

> **Примітка**:
>
> При з'єднанні з CUBRID необхідно вказати ім'я користувача та пароль.

### Приклади

**Приклад #1 Приклад PDO_CUBRID DSN**

Наступний приклад демонструє PDO_CUBRID DSN для з'єднання з базою
CUBRID:

cubrid:hostu003dlocalhost;portu003d33000;dbnameu003ddemodb
