- [«radius_create_request](function.radius-create-request.md)
- [radius_cvt_int »](function.radius-cvt-int.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Перетворює необроблені дані на IP-адресу

#radius_cvt_addr

(PECL radius \>u003d 1.1.0)

radius_cvt_addr — Перетворює необроблені дані на IP-адресу

### Опис

**radius_cvt_addr**(string `$data`): string

Перетворює необроблені дані на IP-адресу

### Список параметрів

`data`
Вхідні дані

### Значення, що повертаються

Повертає IP-адресу.

### Приклади

**Приклад #1 Приклад використання **radius_cvt_addr()****

` <?phpwhile ($resa u003d radius_get_attr($res)) {    if (!is_array($resa)) {       printf ("Помилка при отриманні атрибу
",  radius_strerror($res));        exit;    }    $attr u003d $resa['attr'];    $data u003d $resa['data'];    switch ($attr) {    case RADIUS_FRAMED_IP_ADDRESS:        $ip u003d radius_cvt_addr($data );        echo "IP: $ip<br>
";                                                          
";        break;    }}?> `

### Дивіться також

- [radius_cvt_int()](function.radius-cvt-int.md) - Перетворює
необроблені дані в ціле число
- [radius_cvt_string()](function.radius-cvt-string.md) - Перетворює
необроблені дані у рядок
