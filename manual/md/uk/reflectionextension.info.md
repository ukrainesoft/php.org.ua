- [«
ReflectionExtension::getVersion](reflectionextension.getversion.md)
- [ReflectionExtension::isPersistent
»](reflectionextension.ispersistent.md)

- [PHP Manual](index.md)
- [ReflectionExtension](class.reflectionextension.md)
- Виведення інформації про модуль

# ReflectionExtension::info

(PHP 5 \>u003d 5.2.4, PHP 7, PHP 8)

ReflectionExtension::info — Виведення інформації про модуль

### Опис

public **ReflectionExtension::info**(): void

Виводить фрагмент "[phpinfo()](function.phpinfo.md)" для зазначеного
модуля.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Інформація про модуль.

### Приклади

**Приклад #1 Приклад використання **ReflectionExtension::info()****

` <?php$ext u003d new ReflectionExtension('mysqli');$ext->info();?> `

Результатом виконання цього прикладу буде щось подібне:

mysqli

MysqlI Support u003d> enabled
Client API library version u003d> mysqlnd 5.0.5-dev - 081106 - $Revision$
Active Persistent Links u003d> 0
Inactive Persistent Links u003d> 0
Active Links u003d> 0
Persistent cache u003d> enabled
put_hits u003d> 0
put_misses u003d> 0
get_hits u003d> 0
get_misses u003d> 0
size u003d> 2000
free_items u003d> 2000
references u003d> 2

Directive u003d> Local Value u003d> Master Value
mysqli.max_links u003d> Unlimited u003d> Unlimited
mysqli.max_persistent u003d> Unlimited u003d> Unlimited
mysqli.allow_persistent u003d> On u003d> On
mysqli.default_host u003d> no value u003d> no value
mysqli.default_user u003d> no value u003d> no value
mysqli.default_pw u003d> no value u003d> no value
mysqli.default_port u003d> 3306 u003d> 3306
mysqli.default_socket u003d> no value u003d> no value
mysqli.reconnect u003d> Off u003d> Off
mysqli.allow_local_infile u003d> On u003d> On
mysqli.cache_size u003d> 2000 u003d> 2000

### Дивіться також

- [ReflectionExtension::getName()](reflectionextension.getname.md) -
Отримання імені модуля
- [phpinfo()](function.phpinfo.md) - Виводить інформацію про поточну
конфігурації PHP
