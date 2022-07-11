- [«EventBuffer::readLine](eventbuffer.readline.md)
- [EventBuffer::searchEol »](eventbuffer.searcheol.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Сканує буфер на наявність рядка

# EventBuffer::search

(PECL event \>u003d 1.2.6-beta)

EventBuffer::search — Сканує буфер на наявність рядка

### Опис

public **EventBuffer::search**( string `$what` , int `$start` u003d -1 , int
$end u003d -1):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Сканує буфер на наявність рядка `what`. Повертає числову позицію
рядки або **`false`**, якщо рядок не було знайдено.

Якщо вказано аргумент `start`, він вказує на позицію, з якою повинен
розпочинатися пошук; інакше пошук виконується з початку рядка.
Якщо вказано аргумент `end`, пошук виконується між початковою та кінцевою
позиціями буфера.

### Список параметрів

`what`
Рядок для пошуку.

`start`
Позиція початку пошуку.

`end`
Позиція закінчення пошуку.

### Значення, що повертаються

Повертає числову позицію першого входження рядка у буфері або
**`false`**, якщо рядок не знайдено.

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальну інформацію див. у розділі [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Приклади

**Приклад #1 Приклад використання **EventBuffer::search()****

` <?php// Count total occurances of 'str' in 'buf'function count_instances($buf, $str) {    $total u003d 0; $p    u003du003d0; $i     u003d 0; while(1) {       |$p u003d $buf->search($str, $p); if ($p u003du003du003d FALSE) {            break; }        ++$total; ++$p; }   return $total;}$buf u003d new EventBuffer();$buf->add("Some string within a string inside another string");var_dump(count_instances($buf, )"

Результатом виконання цього прикладу буде щось подібне:

int(3)

### Дивіться також

- [EventBuffer::searchEol()](eventbuffer.searcheol.md) - Сканує
буфер на наявність кінця рядка
