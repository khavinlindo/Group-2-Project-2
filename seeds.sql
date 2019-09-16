INSERT INTO grocery(item, catagory) VALUES ('Cereal', 4);
INSERT INTO grocery(item, catagory) VALUES ('Bananas', 1);
INSERT INTO grocery(item, catagory) VALUES ('Hamburger Meat', 2);
INSERT INTO grocery(item, catagory) VALUES ('Milk', 3);
INSERT INTO grocery(item, catagory) VALUES ('Magazine', 5);

INSERT INTO task(task, urgency) VALUES ('Take out trash', 2);
INSERT INTO task(task, urgency) VALUES ('Doctors Appointment', 1);
INSERT INTO task(task, urgency) VALUES ('Oil Change', 3);

SELECT * FROM grocery;
SELECT * FROM task;

1: Grocery List -- ID, Item, Catagory
    catagories -- 1) produce 2) meats, 3) dairy, 4) dry goods, 5) non-grocery
2: Task List -- ID, Task, Priority
    urgency -- 1) Top Priority, 2) Done Today, 3) This Week
3: Calendar 
4: Notes -- ID, Note, Author