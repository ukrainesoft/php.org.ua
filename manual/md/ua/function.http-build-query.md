- [«get_meta_tags](function.get-meta-tags.md)
- [parse_url »] (function.parse-url.md)

- [PHP Manual](index.md)
- [Функції URL](ref.url.md)
- Генерує URL-кодований рядок запиту

# http_build_query

(PHP 5, PHP 7, PHP 8)

http_build_query — Генерує URL-кодований рядок запиту

### Опис

**http_build_query**(
array\|object `$data`,
string `$numeric_prefix` u003d "",
?string `$arg_separator` u003d **`null`**,
int `$encoding_type` u003d **`PHP_QUERY_RFC1738`**
): string

Генерує URL-кодований рядок запиту з наданого
асоціативного (або індексованого) масиву

### Список параметрів

`data`
Може бути масив чи об'єкт, що містить властивості.

Якщо `data` масив, то він може бути простою одномірною структурою або
масивом масивів (який, у свою чергу, може містити інші
масиви).

Якщо `data` об'єкт, тоді лише загальнодоступні властивості будуть включені до
результат.

`numeric_prefix`
Якщо числові індекси використовуються в базовому масиві та цей параметр
зазначений, то він буде доданий до числового індексу для елементів тільки в
базовий масив.

Це дозволяє забезпечити допустимі імена змінних, які пізніше
дані будуть декодовані PHP або іншим програмним забезпеченням CGI.

`arg_separator`
[arg_separator.output](ini.core.md#ini.arg-separator.output)
використовується як роздільник аргументів, але може бути
перевизначено шляхом зазначення цього параметра.

`encoding_type`
За промовчанням **`PHP_QUERY_RFC1738`**.

Якщо `encoding_type` дорівнює **`PHP_QUERY_RFC1738`**, тоді кодування
здійснюється за [» RFC 1738](http://www.faqs.org/rfcs/rfc1738) та типом
контенту `application/x-www-form-urlencoded`, що має на увазі, що
пробіли кодуються як символи "плюс" (`+`).

Якщо `enc_type` дорівнює **`PHP_QUERY_RFC3986`**, тоді кодування
здійснюється відповідно до [» RFC
3986](http://www.faqs.org/rfcs/rfc3986), а пробіли будуть закодовані в
відсотках (%20).

### Значення, що повертаються

Повертає URL-кодований рядок.

### Приклади

**Приклад #1 Простий приклад використання **http_build_query()****

` <?php$data u003d array(   'foo' u003d> 'bar',   'baz' u003d> 'boom',   'cow' u003d> 'milk',    'null'  processor');echo http_build_query($data) . "
";echo http_build_query($data, '', '&');?> `

Результат виконання цього прикладу:

foou003dbar&bazu003dboom&cowu003dmilk&phpu003dhypertext+processor
foou003dbar&bazu003dboom&cowu003dmilk&phpu003dhypertext+processor

**Приклад #2 Приклад використання **http_build_query()** з числовими
індексами елементів.

` <?php$data u003d array('foo', 'bar', 'baz', null, 'boom', 'cow' u003d> 'milk', 'php' u003d> 'hypertext processor');echo http_build_quer $ data) . "
";echo http_build_query($data, 'myvar_');?> `

Результат виконання цього прикладу:

0u003dfoo&1u003dbar&2u003dbaz&4u003dboom&cowu003dmilk&phpu003dhypertext+processor
myvar_0u003dfoo&myvar_1u003dbar&myvar_2u003dbaz&myvar_4u003dboom&cowu003dmilk&phpu003dhypertext+processor

**Приклад #3 Приклад використання **http_build_query()** з багатовимірними
масивами**

` <?php$data u003d array(    'user' u003d> array(        'name' u003d> 'Bob Smith',        'age'  u003d> 47,        'sex'  u003d> 'M',        'dob'  u003d> '5/ 12/1956'    ),   'pastimes' u003d> array('golf', 'opera', 'poker', 'rap'),   'children' u003d> array( b>u003d' > , 'sex'u003d>'M'),        'sally' u003d> array('age'u003d>8, 'sex'u003d>'F')    ),    'CEO');echo http_$$'' );?> `

Результат виконання даних прикладів: (символи перенесені для зручності
читання)

user%5Bname%5Du003dBob+Smith&user%5Bage%5Du003d47&user%5Bsex%5Du003dM&
user%5Bdob%5Du003d5%2F12%2F1956&pastimes%5B0%5Du003dgolf&pastimes%5B1%5Du003dopera&
pastimes%5B2%5Du003dpoker&pastimes%5B3%5Du003drap&children%5Bbobby%5D%5Bage%5Du003d12&
children%5Bbobby%5D%5Bsex%5Du003dM&children%5Bsally%5D%5Bage%5Du003d8&
children%5Bsally%5D%5Bsex%5Du003dF&flags_0u003dCEO

> **Примітка**:
>
> Тільки числовий індексований елемент "CEO" у базовому масиві
> отримав префікс. Інші числові індекси, знайдені в pastimes, не
> вимагають рядкового префікса, щоб бути допустимими іменами
> Змінні.

**Приклад #4 Приклад використання **http_build_query()** з об'єктом**

` <?phpclass parentClass {    public    $pub      u003du003d''publicParent'; protected $prot     u003d 'protectedParent'; private   $priv     u003d 'privateParent'; public   $pub_bar u003d null; protected $prot_bar u003d u003d null; private   $priv_bar u003d null; public function __construct(){        $this->pub_bar u003du003d new childClass(); $this->prot_baru003du003dnew childClass(); $this->priv_baru003du003dnew childClass(); }}class childClass {    public   $$pub u003du003d'publicChild'; protected $prot u003d 'protectedChild'; private   $priv u003d 'privateChild';}$parent u003d new parentClass();echo http_build_query($parent);?> `

Результат виконання цього прикладу:

pubu003dpublicParent&pub_bar%5Bpub%5Du003dpublicChild

### Дивіться також

- [parse_str()](function.parse-str.md) - Розбирає рядок у
змінні
- [parse_url()](function.parse-url.md) - Розбирає URL та повертає
його компоненти
- [urlencode()](function.urlencode.md) - URL-кодування рядка
- [array_walk()](function.array-walk.md) - Застосовує задану
користувачем функцію до кожного елементу масиву
