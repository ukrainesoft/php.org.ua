- [« yaz_error](function.yaz-error.md)
- [yaz_es »](function.yaz-es.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Перевіряє результат Extended Service

# yaz_es_result

(PHP 4 u003d 4.2.0, PECL yaz u003d 0.9.0)

yaz_es_result — Перевіряє результат Extended Service

### Опис

**yaz_es_result**(resource `$id`): array

Функція перевіряє останній повернутий сервером результат Extended
Service. Extended Service ініціюється або за допомогою
**yaz_item_order()**, або за допомогою [yaz_es()](function.yaz-es.md).

### Список параметрів

`id`
Ідентифікатор підключення, що повертається
[yaz_connect()](function.yaz-connect.md).

### Значення, що повертаються

Повертає масив з елементом targetReference для посилання на операцію
Extended Service (згенерованої та повернутої з сервера).

### Дивіться також

- [yaz_es()](function.yaz-es.md) - Підготовка Extended Service
Request
