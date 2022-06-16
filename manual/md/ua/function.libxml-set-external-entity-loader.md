- [« libxml_get_last_error](function.libxml-get-last-error.md)
- [libxml_set_streams_context
»](function.libxml-set-streams-context.md)

- [PHP Manual](index.md)
- [Функції libxml](ref.libxml.md)
- Зміна завантажувача за замовчуванням для зовнішніх об'єктів

# libxml_set_external_entity_loader

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

libxml_set_external_entity_loader — Зміна завантажувача за замовчуванням
для зовнішніх об'єктів

### Опис

**libxml_set_external_entity_loader**(?[callable](language.types.callable.md)
`$resolver_function`): bool

Зміна стандартного завантажувача для зовнішніх об'єктів. Можна, можливо
використовувати для придушення розширення довільних зовнішніх сутностей,
щоб уникнути XXE-атак, навіть якщо для відповідної операції
встановлено значення **`LIBXML_NOENT`**. Зазвичай це краще, ніж виклик
[libxml_disable_entity_loader()](function.libxml-disable-entity-loader.md).

### Список параметрів

`resolver_function`
Callback-функція ([callable](language.types.callable.md)) з наступною
сигнатурою:

resolver(string `$public_id`, string `$system_id`, array `$context`):
resource\|string\|null

`public_id`
Публічний ідентифікатор.

`system_id`
Системний ідентифікатор

`context`
Масив із чотирьох елементів: ``directory'`, ``intSubName'`,
``extSubURI'' і ``extSubSystem''.

Ця callback-функція має повертати ресурс
([resource](language.types.resource.md)) або рядок (string) з
Якою можна відкрити ресурс. Якщо повертається **`null`**, дозвіл
посилання на суть завершиться помилкою.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання
**libxml_set_external_entity_loader()****

` <?php$xml u003d <<<<<DOCTYPE foo PUBLIC "-//FOO/BAR" "http://example.com/foobar"><foo>bar</foo>XML;$dtd u003d < <<DTD<!ELEMENT foo (#PCDATA)>DTD;libxml_set_external_entity_loader(    function ($public, $system, $context) use($dtd) {        var_dump($public);        var_dump($system);        var_dump($context) ;        $f u003d fopen("php://temp", "r+");        fwrite($f, $dtd);        rewind($f);        return $f;    });$dd u003d new DOMDocument;$r  u003d $dd->loadXML($xml);var_dump($dd->validate());?> `

Результат виконання цього прикладу:

string(10) "-//FOO/BAR"
string(25) "http://example.com/foobar"
array(4) {
["directory"] u003d> NULL
["intSubName"] u003d> NULL
["extSubURI"] u003d> NULL
["extSubSystem"] u003d> NULL
}
bool(true)

### Дивіться також

- [libxml_disable_entity_loader()](function.libxml-disable-entity-loader.md) -
Вимкнення можливості завантаження сутностей із зовнішніх джерел
