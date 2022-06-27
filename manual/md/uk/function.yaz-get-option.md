- [« yaz_es](function.yaz-es.md)
- [yaz_hits»](function.yaz-hits.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Повертає значення параметра для підключення

# yaz_get_option

(PECL yaz \>u003d 0.9.0)

yaz_get_option — Повертає значення параметра для підключення

### Опис

**yaz_get_option**(resource `$id`, string `$name`): string

Повертає значення параметра, вказаного в 'name'.

### Список параметрів

`id`
Ресурс підключення, що повертається
[yaz_connect()](function.yaz-connect.md).

`name`
Назва параметра.

### Значення, що повертаються

Повертає значення вказаної опції або порожній рядок, якщо опція не
була встановлена.

### Дивіться також

- Опис [yaz_set_option()](function.yaz-set-option.md) -
Встановлює установки для з'єднання для перегляду доступних
параметрів
