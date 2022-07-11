- [«ob_get_level](function.ob-get-level.md)
- [ob_gzhandler »](function.ob-gzhandler.md)

- [PHP Manual](index.md)
- [Функції контролю виведення](ref.outcontrol.md)
- Отримати статус буфера виводу

#ob_get_status

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

ob_get_status — Отримати статус буфера виводу

### Опис

**ob_get_status**(bool `$full_status` u003d **`false`**): array

**ob_get_status()** повертає інформацію про стан буфера верхнього
рівня або всіх рівнях активних буферів, якщо `full_status`
встановлений у **`true`**.

### Список параметрів

`full_status`
Якщо **`true`**, то поверне всі рівні активних буферів. Якщо **`false`**
або не встановлений, то поверне статус лише найвищого рівня.

### Значення, що повертаються

Якщо функція викликана без параметра `full_status` або `full_status` u003d
**`false`**, то повертається простий масив з наступних елементів:

``` returnvaluescode
Array
(
[level] u003d> 2
[type] u003d> 0
[status] u003d> 0
[name] u003d> URL-Rewriter
[del] u003d> 1
)
````

| Ключ | Значення |
|-------|----------------------------------------- ---------------------------------------------|
| рівень | | Рівень вкладеності висновку |
| тип | `PHP_OUTPUT_HANDLER_INTERNAL (0)` або `PHP_OUTPUT_HANDLER_USER (1)` |
| тип | `0` (внутрішній обробник) або `1` (наданий користувачем обробник) |
| name | Назва діючого обробника виводу або 'default output handler', якщо не задано |
| del | Прапор очищення, встановлений [ob_start()](function.ob-start.md) |

**Результати простого виклику **ob_get_status()****

Якщо функція викликана з `full_status` u003d **`true`**, то повертається
масив із елементів рівнів активних буферів. Як ключ
використовується рівень виведення, і кожен елемент масиву містить у собі
масив інформації про статус однієї з активних елементів вывода.

Array
(
[0] u003d> Array
(
[chunk_size] u003d> 0
[size] u003d> 40960
[block_size] u003d> 10240
[type] u003d> 1
[status] u003d> 0
[name] u003d> default output handler
[del] u003d> 1
)

[1] u003d> Array
(
[chunk_size] u003d> 0
[size] u003d> 40960
[block_size] u003d> 10240
[type] u003d> 0
[buffer_size] u003d> 0
[status] u003d> 0
[name] u003d> URL-Rewriter
[del] u003d> 1
)

)

Повний висновок містить такі додаткові елементи:

| Ключ | Значення |
|------------|------------------------------------ -------------------------------|
| chunk_size | Розмір порції [ob_start()](function.ob-start.md) |
| size | ... |
| blocksize | ... |

**Повні результати **ob_get_status()****

### Дивіться також

- [ob_get_level()](function.ob-get-level.md) - Повертає рівень
вкладеності механізму буферизації виводу
- [ob_list_handlers()](function.ob-list-handlers.md) - Список всіх
використовуваних обробників виводу
