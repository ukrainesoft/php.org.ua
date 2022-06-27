- [« Stomp::setReadTimeout](stomp.setreadtimeout.md)
- [Stomp::unsubscribe »](stomp.unsubscribe.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- реєструє підписку на вказану розсилку

# Stomp::subscribe

#stomp_subscribe

(PECL stomp \>u003d 0.1.0)

Stomp::subscribe -- stomp_subscribe — Зареєструє передплату на вказану
розсилку

### Опис

Об'єктно-орієнтований стиль (метод):

public **Stomp::subscribe**(string `$destination`, array `$headers` u003d
?): bool

Процедурний стиль:

**stomp_subscribe**(resource `$link`, string `$destination`, array
`$headers` u003d ?): bool

Реєструє передплату на вказану розсилку.

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

`destination`
Розсилання, на яке необхідно зареєструвати передплату.

`headers`
Асоціативний масив, що містить додаткові заголовки (приклад:
receipt).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

Дивіться [stomp_ack()](stomp.ack.md).

### Примітки

**Підказка**

Stomp асинхронний за своєю суттю. Синхронний зв'язок може бути реалізований
додаванням receipt-заголовка. Це змусить методи нічого не повертати,
доки сервер не підтвердить отримання повідомлення або не буде перевищено
час очікування повідомлення.
