- [« Stomp::subscribe](stomp.subscribe.md)
- [StompFrame »](class.stompframe.md)

- [PHP Manual](index.md)
- [Stomp](class.stomp.md)
- Видаляє існуючу передплату

# Stomp::unsubscribe

#stomp_unsubscribe

(PECL stomp \>u003d 0.1.0)

Stomp::unsubscribe -- stomp_unsubscribe — Видаляє існуючу передплату

### Опис

Об'єктно-орієнтований стиль (метод):

public **Stomp::unsubscribe**(string `$destination`, array `$headers` u003d
?): bool

Процедурний стиль:

**stomp_unsubscribe**(resource `$link`, string `$destination`, array
`$headers` u003d ?): bool

Видаляє існуючу передплату.

### Список параметрів

`link`
Тільки для процедурного стилю: ідентифікатор з'єднання stomp,
отриманий із [stomp_connect()](stomp.construct.md).

`destination`
Передплата видалення.

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
