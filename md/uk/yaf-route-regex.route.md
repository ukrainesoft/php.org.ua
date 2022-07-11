- [« Yaf_Route_Regex::\_\_construct](yaf-route-regex.construct.md)
- [Yaf_Route_Rewrite »](class.yaf-route-rewrite.md)

- [PHP Manual](index.md)
- [Yaf_Route_Regex](class.yaf-route-regex.md)
- Ціль маршруту

# Yaf_Route_Regex::route

(Yaf \>u003d1.0.0)

Yaf_Route_Regex::route — Мета маршруту

### Опис

public
**Yaf_Route_Regex::route**([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): bool

Перенаправити вхідний запит.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`request`

### Значення, що повертаються

Якщо шаблон встановлено першим параметром **Yaf_Route_Regex::\_construct()**
проводить відповідність із запитом URI, повертаючи **`true`**, в іншому
випадку - **`false`**.
