- [«Сесії](features.sessions.md)
- [Завантаження файлів на сервер»] (features.file-upload.md)

- [PHP Manual](index.md)
- [Відмінні риси](features.md)
- Робота з XForms

# Робота з XForms

[»XForms](http://www.w3.org/MarkUp/Forms/) є альтернативою
традиційним веб-формам, і дозволяють використовувати їх на безлічі
платформ та браузерів, а також реалізовувати нестандартні уявлення
форм, наприклад, як PDF-документа.

Перша істотна відмінність XForms полягає в тому, як форма
надсилається клієнту. Керівництво
[» `XForms for HTML Authors`](http://www.w3.org/MarkUp/Forms/2003/xforms-for-html-authors.md)
містить детальний опис створення XForms. Для того, щоб окреслити
основну ідею керівництва, наведемо кілька простих прикладів.

**Приклад #1 Проста пошукова форма XForms**

```htmlcode
<h:html xmlns:hu003d"http://www.w3.org/1999/xhtml"
xmlnsu003d"http://www.w3.org/2002/xforms">
<h:head>
<h:title>Пошук</h:title>
<model>
<submission actionu003d"http://example.com/search"
methodu003d"post" idu003d"s"/>
</model>
</h:head>
<h:body>
<h:p>
<input refu003d"q"><label>Що шукати?</label></input>
<submit submissionu003d"s"><label>Знайти</label></submit>
</h:p>
</h:body>
</h:html>
````

Наведена вище форма відображає текстове поле для введення (назване
`q`) і кнопку для відправлення форми, при натисканні на яку всі введені
дані будуть надіслані скрипту, вказаному у полі `action`.

Тут ми підійшли до ще однієї істотної різниці з погляду вашого
веб-програми. Стандартна HTML-форма надсилає дані як
`application/x-www-form-urlencoded`, а XForms для передачі даних
використовує розмітку XML.

Якщо ви вирішили працювати з XForms, швидше за все, ви захочете отримати
надіслані користувачем дані у форматі XML. У такому разі зверніть
увагу на змінну `$HTTP_RAW_POST_DATA`, в ній міститься
XML-документ, згенерований браузером, який можна надалі
обробити вподобаним вами двигуном XSLT або парсером документа.

Якщо розмітка вас не цікавить, і ви хочете, щоб передані дані
були поміщені в стандартний масив `$_POST`, ви можете вказати
клієнтському браузеру на необхідність надсилати дані у форматі
`application/x-www-form-urlencoded`. Для цього встановіть атрибут
`method` значенням *urlencoded-post*.

**Приклад #2 Використання XForm спільно з масивом `$_POST`**

```htmlcode
<h:html xmlns:hu003d"http://www.w3.org/1999/xhtml"
xmlnsu003d"http://www.w3.org/2002/xforms">
<h:head>
<h:title>Пошук</h:title>
<model>
<submission actionu003d"http://example.com/search"
methodu003d"urlencoded-post" idu003d"s"/>
</model>
</h:head>
<h:body>
<h:p>
<input refu003d"q"><label>Що шукати?</label></input>
<submit submissionu003d"s"><label>Знайти</label></submit>
</h:p>
</h:body>
</h:html>
````

> **Примітка**: На додаток до вищесказаного слід зазначити, що
> велика кількість браузерів не підтримують XForms. Якщо наведені
> приклади зазнали невдачі, перевірте версію використовуваного вами
> браузер.
