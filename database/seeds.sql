INSERT INTO groceries(item, amount, category) VALUES ('Cereal', 2, 4);
INSERT INTO groceries(item, amount, category) VALUES ('Bananas', 6, 1);
INSERT INTO groceries(item, amount, category) VALUES ('Hamburger Meat', 2, 2);
INSERT INTO groceries(item, amount, category) VALUES ('Milk', 1, 3);
INSERT INTO groceries(item, amount, category) VALUES ('Magazine', 1, 5);

INSERT INTO task(task, urgency) VALUES ('Take out trash', 2);
INSERT INTO task(task, urgency) VALUES ('Doctors Appointment', 1);
INSERT INTO task(task, urgency) VALUES ('Oil Change', 3);

INSERT INTO notes(note, author) VALUES ('This is the first note.', 'Michael Adams');
INSERT INTO notes(note, author) VALUES ('Lucy is a really weird girl.', 'Snoopy');
INSERT INTO notes(note, author) VALUES ('Need to verify moon landing occured.', 'Flat EartherTK421');
INSERT INTO notes(note, author) VALUES ('Go to Kroger on way home from doctors.' 'Dont forget to get the groceries list', 'Michael Adams');

SELECT * FROM groceries;
SELECT * FROM tasks;
SELECT * FROM notes;

INSERT INTO groceries (date) VALUES (NOW())

1: groceries List -- ID, Item, Amount, category, Date
    catagories -- 1) produce 2) meats, 3) dairy, 4) dry goods, 5) non-groceries
2: Task List -- ID, Task, Priority, Date
    urgency -- 1) Top Priority, 2) Done Today, 3) This Week
3: Calendar 
4: Notes -- ID, Note, Author, Date