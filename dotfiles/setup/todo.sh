JOURNAL_HOME=~/notes/Journal

rm ~/.todo-txt/todo.txt
touch $JOURNAL_HOME/todo.txt
ln $JOURNAL_HOME/todo.txt ~/.todo-txt/todo.txt

rm ~/.todo-txt/done.txt
touch $JOURNAL_HOME/done.txt
ln $JOURNAL_HOME/done.txt ~/.todo-txt/done.txt

rm ~/.todo-txt/report.txt
touch $JOURNAL_HOME/report.txt
ln $JOURNAL_HOME/report.txt ~/.todo-txt/report.txt