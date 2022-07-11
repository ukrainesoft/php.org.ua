- [«
opcache_get_configuration](function.opcache-get-configuration.md)
- [opcache_invalidate »](function.opcache-invalidate.md)

- [PHP Manual](index.md)
- [Функції OPcache](ref.opcache.md)
- Отримати інформацію про стан кешу

# opcache_get_status

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8, PECL ZendOpcache \> 7.0.2)

opcache_get_status — Отримати інформацію про стан кешу

### Опис

**opcache_get_status**(bool `$include_scripts` u003d **`true`**):
array\|false

Функція повертає інформацію про стан екземпляра кеша у пам'яті. Вона
не повертає жодної інформації про файловий кеш.

### Список параметрів

`include_scripts`
Включити інформацію про стан конкретного сценарію.

### Значення, що повертаються

Повертає масив, що опціонально містить інформацію про стан
конкретного скрипта або **`false`** у разі виникнення помилки.

### Помилки

Якщо використовується `opcache.restrict_api` та поточний шлях підпадає під
заборона, то буде викликана помилка рівня E_WARNING та жодних даних
повернуто не буде.

### Дивіться також

- [opcache_get_configuration()](function.opcache-get-configuration.md) -
Отримати конфігураційну інформацію кешу
