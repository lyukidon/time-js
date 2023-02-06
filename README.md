# time-js

- usage

```javascript
import {Date, time} from 'time-js'

Date(string)
Date('YY.MM.DD') // 23.02.06
Date('YYYY.MM.DD') // 2023.02.06

Time(string, military time : bool);
Time('HH:MM:SS') // 00:50:40
Time('HH:MM:SS', false) // AM 00:50:40
```

- Data format
    - Date
        - YEAR length : 4 or 2
        - MONTH length : 2
        - DAY length : 2
    - Time
        - HOUR length : 2
        - MINUTE length : 2
        - SECOND length : 2