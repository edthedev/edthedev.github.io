### Save your Work

```
savehistory("/mnt/data/test_commands.txt")
```


### Pie Receipt

Pie chart with duplicate categories merged.

```rstudio
library("dplyr")          ## load
TimeSum <- (TimeTracking %>% group_by(Category) %>% summarize(Duration = sum(Duration))))
pie(TimeSum$Duration, TimeSum$Category)
```