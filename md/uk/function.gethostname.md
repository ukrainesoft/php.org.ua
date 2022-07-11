- [«gethostbynamel](function.gethostbynamel.md)
- [getmxrr »](function.getmxrr.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Отримує ім'я хоста

# gethostname

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

gethostname — Отримує ім'я хоста

### Опис

**gethostname**(): string\|false

Функція **gethostname()** отримує стандартне ім'я хоста для локального
комп'ютера.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок з ім'ям хоста або **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Приклад використання **gethostname()****

`<?phpecho gethostname(); // може вивести наприклад: sandie?> `

### Дивіться також

- [gethostbyname()](function.gethostbyname.md) - Отримує
IPv4-адреса, що відповідає переданому імені хоста
- [gethostbyaddr()](function.gethostbyaddr.md) - Отримує доменне
ім'я хоста, що відповідає переданій IP-адресі
- [php_uname()](function.php-uname.md) - Повертає інформацію про
операційній системі, на якій запущено PHP
