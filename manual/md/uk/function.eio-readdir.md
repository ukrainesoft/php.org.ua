- [«eio_readahead](function.eio-readahead.md)
- [eio_readlink »] (function.eio-readlink.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Читає вміст директорії

#eio_readdir

(PECL eio \>u003d 0.0.1dev)

eio_readdir - Читає вміст директорії

### Опис

**eio_readdir**(
string `$path`,
int `$flags`,
int `$pri`,
[callable](language.types.callable.md) `$callback`,
string `$data` u003d NULL
): resource

Читає вміст директорії (за допомогою системних викликів `opendir`,
`readdir` та `closedir`) і або повертає імена файлів, або передає
масив як аргумент 'result' у функцію 'callback'. Поведінка
методу залежить від значення параметра `flags`.

### Список параметрів

`path`
Шлях до директорії.

`flags`
Комбінація констант *EIO_READDIR\_\**.

`pri`
Пріоритет запитів: **`EIO_PRI_DEFAULT`**, **`EIO_PRI_MIN`**,
**`EIO_PRI_MAX`**, або **`null`**. Якщо переданий **`null`**, то `pri`
встановлюється у **`EIO_PRI_DEFAULT`**.

`callback`
Функція callback викликається при завершенні запиту. Вона повинна
задовольняти наступний прототип:

` void callback(mixed $data, int $result[, resource $req]);'

`data`
є даними користувача, переданими в запиті.

`result`
містить результуюче значення, що залежить від запиту; зазвичай це
значення, яке повертається відповідним системним викликом.

`req`
є опціональним запитуваним ресурсом, який може
використовуватися з такими функціями як
[eio_get_last_error()](function.eio-get-last-error.md)

`data`
Дані, які потрібно передати функції `callback`.

### Значення, що повертаються

**eio_readdir()** повертає ресурс запиту у разі успішного
виконання або **`false`** у разі виникнення помилки. Також може
задавати значення аргументу `result` функції `callback` залежно від
значення параметра `flags`:

**`EIO_READDIR_DENTS`** (int)
Прапор **eio_readdir()**. Якщо заданий, як аргумент
callback-функції передаватиметься масив з такими ключами:
`names`` - масив імен директорії ``dents'` - масив структур типу
`struct eio_dirent`, кожна з яких є масивом з
ключами: ``name'` - ім'я директорії; ``type'` - одна з констант
*EIO_DT\_\**; ``inode'` - номер вузла inode, якщо доступний, або порожній
значення;

**`EIO_READDIR_DIRS_FIRST`** (int)
Якщо цей прапор задано, першими повертатимуться імена директорій, потім
імена файлів. Порядок проходження імен у кожній групі буде оптимальним
для застосування функції stat.

**`EIO_READDIR_STAT_ORDER`** (int)
Якщо цей прапор задано, імена файлів та директорій будуть повертатися в
порядку, зручному збору статистики (`stat`) кожного з об'єктів. Якщо
отриманий список імен передбачається передавати у функцію
[stat()](function.stat.md), порядок проходження імен забезпечить найбільш
швидку роботу функції.

**`EIO_READDIR_FOUND_UNKNOWN`** (int)

Типи вузлів:

**`EIO_DT_UNKNOWN`** (int)
Невідомий тип вузла (дуже часто). Необхідна обробка функцією
[stat()](function.stat.md).

**`EIO_DT_FIFO`** (int)
Тип вузла – FIFO

**`EIO_DT_CHR`** (int)
Тип вузла

**`EIO_DT_MPC`** (int)
Тип вузла - складовий символьний пристрій (v7+coherent)

**`EIO_DT_DIR`** (int)
Тип вузла – директорія

**`EIO_DT_NAM`** (int)
Тип вузла - файл зі спеціальним Xenix найменуванням

**`EIO_DT_BLK`** (int)
Тип вузла

**`EIO_DT_MPB`** (int)
Складовий блоковий пристрій (v7+coherent)

**`EIO_DT_REG`** (int)
Тип вузла

**`EIO_DT_NWK`** (int)

**`EIO_DT_CMP`** (int)
Спеціальний тип вузла для мереж HP-UX

**`EIO_DT_LNK`** (int)
Тип вузла - посилання

**`EIO_DT_SOCK`** (int)
Тип вузла – сокет

**`EIO_DT_DOOR`** (int)
Тип вузла - Solaris door

**`EIO_DT_WHT`** (int)
Тип вузла

**`EIO_DT_MAX`** (int)
Максимальне значення типу вузла

### Приклади

**Приклад #1 Приклад використання **eio_readdir()****

` <?php/* Викликається, коли відпрацює eio_readdir() */function my_readdir_callback($data, $result) {    echo "Викликана функція", __FUNCTION__, 
";    echo "дані: "; var_dump($data);    echo "результат: "; var_dump($result);    echo "
";}eio_readdir("/var/spool/news", EIO_READDIR_STAT_ORDER | EIO_READDIR_DIRS_FIRST, EIO_PRI_DEFAULT, "my_readdir_callback");eio_event_loop();?> `

Результатом виконання цього прикладу буде щось подібне:

Викликано функцію my_readdir_callback
дані: NULL
результат: array(2) {
["names"]u003d>
array(7) {
[0]u003d>
string(7) "archive"
[1]u003d>
string(8) "articles"
[2]u003d>
string(8) "incoming"
[3]u003d>
string(7) "innfeed"
[4]u003d>
string(8) "outgoing"
[5]u003d>
string(8) "overview"
[6]u003d>
string(3) "tmp"
}
["dents"]u003d>
array(7) {
[0]u003d>
array(3)
{
["name"]u003d>
string(7)
"archive"
["type"]u003d>
int(4)
["inode"]u003d>
int(393265)
}
[1]u003d>
array(3)
{
["name"]u003d>
string(8)
"articles"
["type"]u003d>
int(4)
["inode"]u003d>
int(393266)
}
[2]u003d>
array(3)
{
["name"]u003d>
string(8)
"incoming"
["type"]u003d>
int(4)
["inode"]u003d>
int(393267)
}
[3]u003d>
array(3)
{
["name"]u003d>
string(7)
"innfeed"
["type"]u003d>
int(4)
["inode"]u003d>
int(393269)
}
[4]u003d>
array(3)
{
["name"]u003d>
string(8)
"outgoing"
["type"]u003d>
int(4)
["inode"]u003d>
int(393270)
}
[5]u003d>
array(3)
{
["name"]u003d>
string(8)
"overview"
["type"]u003d>
int(4)
["inode"]u003d>
int(393271)
}
[6]u003d>
array(3)
{
["name"]u003d>
string(3)
"tmp"
["type"]u003d>
int(4)
["inode"]u003d>
int(393272)
}
}
}
