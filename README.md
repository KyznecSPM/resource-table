# Task

1. Data streaming. If the scroller is at its maximum timestamp, get fresh data from the service and update the table.

> I see several options to get streaming data. Use web sockets or SSE. If for some reason web sockets can not be used, then add interval request to the API with the timestamp of the last record.
> But there is a probability that with last timestamp not all updates could reach the first time.
> So when you update the data on the client, you will need to delete the records with the last timestamp and replace them with the service response data.

2. Performance. How to optimize rerendering when the scroller moves if the original JSON has 100K entries (1000 users, 10 resources, 10 events - eventually display a table of ~10K lines).

> Use virtualization (like react-virtualized). Do not draw all the data, but only the data that is currently visible to the user.

3. Improvement. How you can change the component and the API of the service when the number of users scales up.

> Do not make calculations on the client. If you do it, do it in webworker. Load only the data you need to display, use pagination. Use caching both on the server and on the client.

---

## Опишите необходимые обновления для этих последующих идей

1. Потоковая передача данных. Если скроллер находится на максимальной отметке времени, получить свежие данные из сервиса и обновить таблицу.

> Для получения потоковых данных я вижу несколько вариантов. Использовать web сокеты или SSE. Если по каким то причинам web сокеты использовать нельзя, то добавить интервальный запрос к API с timestamp последней записи.
> Но есть вероятность что с последним timestamp не все обновления могли дойти в первый раз.
> Поэтому при обновлении данных на клиенте нужно будет удалять записи с последним timestamp и заменять их данными ответа сервиса.

2. Производительность. Как оптимизировать рендеринг при движении скроллера, если исходный JSON содержит 100K записей (1000 пользователей, 10 ресурсов, 10 событий - в итоге отображается таблица из ~10K строк).

> Использовать виртуализацию. Не отрисовывать все данные, а только те которые видны пользователю на текущий момент.

3. Улучшение. Как можно изменить компонент и API сервиса при увеличении количества пользователей.

> Не делать вычислений на клиенте. Если делать то в webworker. Загружать только те данные которые нужны для отображения, использовать пагинацию. Использовать кеширование как на сервере так и на клиенте.
