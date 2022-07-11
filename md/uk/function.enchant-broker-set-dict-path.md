- [«
enchant_broker_request_pwl_dict](function.enchant-broker-request-pwl-dict.md)
- [enchant_broker_set_ordering
»](function.enchant-broker-set-ordering.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Встановити шлях для заданого бекенду

#enchant_broker_set_dict_path

(PHP 5 u003d 5.3.1, PHP 7, PHP 8, PECL enchant u003d 1.0.1)

enchant_broker_set_dict_path — Встановити шлях для заданого бекенду

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**enchant_broker_set_dict_path**([EnchantBroker](class.enchantbroker.md)
`$broker`, int `$type`, string `$path`): bool

Встановити шлях для заданого бекенду.

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

`type`
Тип словників, тобто. **`ENCHANT_MYSPELL`** або **`ENCHANT_ISPELL`**.

`path`
Шлях до директорії зі словниками.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Примітки

> **Примітка**:
>
> Функція доступна лише тоді, коли модуль був скомпільований з Enchant v1.

### Дивіться також

- [enchant_broker_get_dict_path()](function.enchant-broker-get-dict-path.md) -
Повертає шлях словника для заданого бекенду
