- [« yaz_ccl_conf](function.yaz-ccl-conf.md)
- [yaz_close »](function.yaz-close.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Викликає парсер CCL

# yaz_ccl_parse

(PHP 4 u003d 4.0.5, PECL yaz u003d 0.9.0)

yaz_ccl_parse — Викликає парсер CCL

### Опис

**yaz_ccl_parse**(resource `$id`, string `$query`, array `&$result`):
bool

Функція викликає синтаксичний CCL аналізатор. Він перетворює цей
запит CCL FIND до запиту RPN, який можна передати функції
[yaz_search()](function.yaz-search.md) для пошуку.

Щоб визначити набір допустимих полів CCL, викличте
[yaz_ccl_conf()](function.yaz-ccl-conf.md) перед цією функцією.

### Список параметрів

`id`
Ресурс з'єднання, повернутий
[yaz_connect()](function.yaz-connect.md).

`query`
Запит CCL FIND.

`result`
Якщо функцію було виконано успішно, це буде масив, що містить
коректний запит RPN у ключі `rpn`.

Після збою в цьому масиві встановлюються три індекси, що вказують
причину виникнення помилки:

- `errorcode` - код помилки CCL (ціле число)

- `errorstring` - рядок помилки CCL

- `errorpos` - приблизна позиція у запиті помилки (ціле число -
позиція символу)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Розбір CCL**

Спробуємо пошукати за допомогою CCL. У наведеному нижче прикладі `$ccl`
є запитом CCL.

`<?phpyaz_ccl_conf($id, $fields); // дивіться приклад для yaz_ccl_confif (!yaz_ccl_parse($id, $ccl, &$cclresult)) {    echo 'Помилка: ' . $cclresult["errorstring"];} else {    $rpn u003d $cclresult["rpn"]; yaz_search($id, "rpn", $rpn);}?> `
