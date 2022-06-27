- [« Вимоги](rar.requirements.md)
- [Налаштування під час виконання »](rar.configuration.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](rar.setup.md)
- Встановлення

## Установка

Модуль Rar в даний час доступний у PECL
[»https://pecl.php.net/package/rar](https://pecl.php.net/package/rar).

Ви також можете скористатися інсталятором PECL, щоб встановити
модуль Rar. Для цього необхідно використати команду: **pecl -v install
rar**.

Також ви можете завантажити архів `tar.gz` та встановити Rar вручну:

**Приклад #1 Встановлення Rar**

`` shellcode
gunzip rar-xxx.tgz
tar-xvf rar-xxx.tar
cd rar-xxx
phpize
./configure && make && make install
````

Користувачам Windows необхідно включити `php_rar.dll` у `php.ini`. DLL
для цього модуля PECL зараз недоступна. Дивіться також розділ
[складання на Windows](install.windows.building.md).
