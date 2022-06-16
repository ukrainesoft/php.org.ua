- [« Memcached::getMultiByKey](memcached.getmultibykey.md)
- [Memcached::getResultCode »](memcached.getresultcode.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Отримує значення Memcached параметра

# Memcached::getOption

(PECL memcached \>u003d 0.1.0)

Memcached::getOption — Отримує значення Memcached параметра

### Опис

public **Memcached::getOption**(int `$option`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Цей метод повертає значення Memcached параметра, зазначеного в
`option`. Деякі параметри відповідають тим, що визначено в
libmemcached, а деякі є специфічними для модуля. Зверніться
до розділу [Memcached константи](memcached.constants.md) для отримання
додаткову інформацію.

### Список параметрів

`option`
Одна з `Memcached::OPT_*` констант.

### Значення, що повертаються

Повертає значення запитуваного параметра, або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Отримує значення Memcached параметра**

` <?php$m u003d new Memcached();var_dump($m->getOption(Memcached::OPT_COMPRESSION));var_dump($m->getOption(Memcached::OPT_POLL_TIMEOUT));?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
int(1000)

### Дивіться також

- **Memcached::getOption()**
- [Memcached::setOption()](memcached.setoption.md) - Встановлює
значення параметра для Memcached
- [Memcached Constants](memcached.constants.md)
