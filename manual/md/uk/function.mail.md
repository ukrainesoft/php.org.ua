- [«ezmlm_hash](function.ezmlm-hash.md)
- [Mailparse »] (book.mailparse.md)

- [PHP Manual](index.md)
- [Пошта](ref.mail.md)
- Надсилає електронну пошту

#mail

(PHP 4, PHP 5, PHP 7, PHP 8)

mail — Надсилає електронну пошту

### Опис

**mail**(
string `$to`,
string `$subject`,
string `$message`,
array\|string `$additional_headers` u003d \[\],
string `$additional_params` u003d ""
): bool

Надсилає електронну пошту.

### Список параметрів

`to`
Одержувач або одержувачі листа.

Формат цього параметра має відповідати [»RFC
2822](http://www.faqs.org/rfcs/rfc2822). Декілька прикладів:

- user@example.com
- user@example.com, anotheruser@example.com
- User \<user@example.com\>
- User \<user@example.com\>, Another User \<anotheruser@example.com\>

`subject`
Тема листа, що надсилається.

**Застереження**
Тема повинна відповідати [»RFC
2047](http://www.faqs.org/rfcs/rfc2047).

`message`
Надіслане повідомлення.

Кожен рядок має бути відділений символом CRLF (
). Рядки не
мають бути довшими за 70 символів.

**Застереження**
(Тільки для Windows) Якщо PHP передає дані безпосередньо SMTP-серверу та в
На початку рядка стоїть точка, то вона буде видалена. Щоб уникнути цього
замініть усі такі точки на дві.

` <?php$text u003d str_replace("
.", "
..", $text);?> `

`additional_headers` (необов'язковий)
Рядок або масив, які будуть вставлені в кінець відправляються
заголовків листа.

Зазвичай використовується додавання додаткових заголовків (From, Cc,
і Bcc). Декілька додаткових заголовків повинні бути розділені CRLF
(
). Якщо для складання цього заголовка використовуються зовнішні
дані, то вони повинні бути перевірені для уникнення ін'єкцій
небажаних заголовків.

Якщо передано масив, його ключі будуть іменами заголовка, а значення
значеннями.

> **Примітка**:
>
> До PHP 5.4.42 та 5.5.27, параметр `additional_headers` не мав захисту
> від ін'єкції. Так що користувачі повинні переконатися, що
> заголовки, що передаються, безпечні і містять тільки заголовки. тобто. не
> містять кілька перекладів рядків поспіль, що стартує тіло
> Повідомлення.

> **Примітка**:
>
> При надсиланні листа *повинно* містити заголовок `From`. Він може бути
> встановлено за допомогою параметра additional_headers, або значення по
> за замовчуванням може бути встановлене в `php.ini`.
>
> Якщо заголовок відсутній, буде згенеровано повідомлення про помилку
> виду
> `Warning: mail(): "sendmail_from" немає в php.ini або custom "From:" header missing`.
> Заголовок `From` також визначає заголовок `Return-Path` під час відправлення
> безпосередньо через SMTP (лише Windows).

> **Примітка**:
>
> Якщо повідомлення не надсилаються, спробуйте використати лише LF
> (
). Деякі агенти пересилання повідомлень Unix (особливо
> [»qmail](http://cr.yp.to/qmail.md)) автоматично замінюють LF на
> CRLF (що призводить до подвійного CR, якщо використовувалося CRLF).
> Використовуйте цей захід у крайньому випадку, оскільки це порушує [» RFC
> 2822](http://www.faqs.org/rfcs/rfc2822).

`additional_params` (необов'язковий)
Параметр `additional_params` може бути використаний для передачі
додаткових прапорів у вигляді аргументів командного рядка для програми
конфігурованої для надсилання листів, зазначеної директивою
`sendmail_path`. Наприклад, можна встановити відправника листа при
використання sendmail за допомогою опції `-f`.

Параметр автоматично екранується функцією
[escapeshellcmd()](function.escapeshellcmd.md), щоб не допустити
виконання команд. Але [escapeshellcmd()](function.escapeshellcmd.md)
дозволяє додавати додаткові параметри. В цілях безпеки
рекомендується перевіряти та очищати цей параметр.

Оскільки [escapeshellcmd()](function.escapeshellcmd.md) застосовується
автоматично, то не можна використовувати деякі символи, допустимі до
використання в email-адресах деякими RFC. **mail()** не допускає
такі символи, тому в програмах, в яких вони потрібні,
рекомендується використовувати альтернативи для їх надсилання (наприклад
фреймворки чи бібліотеки).

Користувач, під яким працює веб-сервер, повинен бути доданий у
список довірених у конфігурації sendmail для того, щоб уникнути
додавання заголовка 'X-Warning' при вказівці відправника за допомогою
опції (-f). Для користувачів sendmail – це файл
`/etc/mail/trusted-users`.

### Значення, що повертаються

Повертає **`true`**, якщо лист був прийнятий для передачі, інакше
**`false`**.

Важливо відзначити, що те, що лист був прийнятий для передачі зовсім не
означає, що воно досягло одержувача.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----------------------------|
| 7.2.0 | Параметр `additional_headers` може набувати значень типу масив. |

### Приклади

**Приклад #1 Надсилання листа.**

Використання функції **mail()** для надсилання простого листа:

` <?php// Повідомлення$message u003d "Line 1
Line 2
Line 3";// На випадок якщо рядок листи довші 70 символів ми ми використовуємо wordwrap()$message u003d wordwrap($message, 70, "
");// Відправляємо mail('caffeinated@example.com', 'My Subject', $message);?> `

**Приклад #2 Надсилання листа з додатковими заголовками.**

Додавання простих заголовків, які повідомляють поштовий агент адреси From і
Reply-To:

` <?php$to      u003d 'nobody@example.com';$subject u003d 'the subject';$message u003d 'hello';$headers u003d 'From: webmaster@example.com' . "
" .   'Reply-To: webmaster@example.com' . "
" .    'X-Mailer: PHP/' . phpversion();mail($to, $subject, $message, $headers);?> `

**Приклад #3 Надсилання листа з додатковими заголовками, переданими
масивом**

У цьому прикладі надсилається той же лист, що і в прикладі вище, але
додаткові заголовки задаються масивом (доступно з PHP 7.2.0).

` <?php$to      u003d 'nobody@example.com';$subject u003d 'the subject';$message u003d 'hello';$headers u003d array(    'From' u003d> '             -To' u003d> 'webmaster@example.com',    'X-Mailer' u003d> 'PHP/' . phpversion());mail($to, $subject, $message, $headers);?> `

**Приклад #4 Надсилання листа з додатковими аргументами командної
рядки.**

Параметр `additional_params` може бути використаний для передачі
додаткових параметрів програмі, що використовується для надсилання листів з
за допомогою директиви `sendmail_path`.

` <?phpmail('nobody@example.com', 'the subject', 'the message', null,   '-fwebmaster@example.com');?> `

**Приклад #5 Надсилання HTML-повідомлень**

За допомогою функції **mail()** також можна надіслати HTML-лист.

`<?php// кілька одержувачів$to u003d 'johny@example.com, sally@example.com'; // зверніть увагу на кому// тема листа$subject u003d 'Birthday Reminders for August';// текст листа$message u003d '<html><head> <title>B> body>  <p>Here are the birthdays upcoming in August!</p>  <table>    <tr>     <th>Person</th><th>Day</th><th>Month</th> Year</th>    </tr>    <tr>      <td>Johny</td><td>10th</td><td>August</td><td>1970</td>    </tr> >      <td>Sally</td><td>17th</td><td>August</td><td>1973</td>    </tr>  </table></body></html>' ;// Для відправки HTML-листи повинен бути встановлений заголовок Content-type$headers u003d 'MIME-Version: 1.0' . "
";$headers .u003d 'Content-type: text/html; charsetu003diso-8859-1' . "
";// Додаткові заголовки$headers[] u003d 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';$headers[] u003d 'From: Birthday Reminder <birthday@ ';$headers[] u003d 'Cc: birthdayarchive@example.com';$headers[] u003d 'Bcc: birthdaycheck@example.com';// Відправляємо mail($to, $subject, $message, implode("
", $headers));?> `

> **Примітка**:
>
> Для надсилання HTML або інших комплексних повідомлень рекомендовано
> використовувати PEAR-пакет
> [» PEAR::Mail_Mime](https://pear.php.net/package/Mail_Mime).

### Примітки

> **Примітка**:
>
> Реалізація SMTP (тільки Windows) функції **mail()** у Windows
> багато в чому відрізняється від реалізації в sendmail. По-перше, вона не
> використовує локальну програму для складання листів, а працює
> безпосередньо з сокетами, що означає, що необхідний поштовий агент
> (`MTA`), що очікує з'єднань на сокеті (може бути як на локальному
> так і на віддаленому сервері).
>
> По-друге, додаткові заголовки на кшталт: `From:`, `Cc:`, `Bcc:` та
> `Date:` інтерпретуються насамперед *не*, `MTA`, а PHP.
>
> Тому параметр `to` не повинен бути адресою виду "Something
> \<someone@example.com\>". Команда mail може неправильно
> Інтерпретувати цю адресу під час передачі даних MTA.

> **Примітка**:
>
> Не слід використовувати функцію **mail()** для надсилання великого
> кількості листів у циклі. Функція відкриває та закриває з'єднання з
> SMTP-сервер для кожного листа, що не дуже ефективно.
>
> Для надсилання великої кількості повідомлень зверніть увагу на пакети
> [» PEAR::Mail](https://pear.php.net/package/Mail) та
> [»PEAR::Mail_Queue](https://pear.php.net/package/Mail_Queue).

> **Примітка**:
>
> Корисні RFC: [»RFC 1896](http://www.faqs.org/rfcs/rfc1896), [»RFC
> 2045](http://www.faqs.org/rfcs/rfc2045), [»RFC
> 2046](http://www.faqs.org/rfcs/rfc2046), [» RFC
> 2047](http://www.faqs.org/rfcs/rfc2047), [»RFC
> 2048](http://www.faqs.org/rfcs/rfc2048), [» RFC
> 2049](http://www.faqs.org/rfcs/rfc2049) та [» RFC
> 2822](http://www.faqs.org/rfcs/rfc2822).

### Дивіться також

- [mb_send_mail()](function.mb-send-mail.md) - Надсилання
закодованого повідомлення
- [imap_mail()](function.imap-mail.md) - Надіслати email
- [»PEAR::Mail](https://pear.php.net/package/Mail)
- [»PEAR::Mail_Mime](https://pear.php.net/package/Mail_Mime)
