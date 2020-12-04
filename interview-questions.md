# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. Are Ruby methods accessors or mutators?

  Your answer: Ruby methods are accesors.

  Researched answer:
  
  For the most part, Ruby methods are all accessors, meaning they do not mutate the object they are called on. For a method to permanently change the object it is called on, follow it with a bang operator.



2. What is a block in Ruby?

  Your answer: It's the piece of code inside of a function?

  Researched answer:
  
  Ruby has anonymous functions similar to JavaScript. They are called blocks. Blocks can be created with the do/end keywords OR with {}. Blocks are code that is passed to a method.




3. Ruby has an implicit return. What does that mean?

  Your answer: Returns the value of the last executed instrunction in the method

  def implicit_return
  if true
    42
  else
    0
  end
end

implicit_return # => 42

  Researched answer: 
  https://medium.com/rubycademy/the-return-keyword-in-ruby-df0a7f578fcb
  Ruby has an implicit return, which means the value of the last line of a method is automatically returned without using the keyword return.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Uses clases as blueprints for objets.

  Researched answer:

Ruby is a pure object-oriented language and everything appears to Ruby as an object. Every value in Ruby is an object, even the most primitive things: strings, numbers and even true and false. Even a class itself is an object that is an instance of the Class class. This chapter will take you through all the major functionalities related to Object Oriented Ruby.
"The basic elements of functional programming are Variables and Functions. The basic elements of object-oriented programming are objects and methods. The functional programming is used only when there are few things with more operations. Object-oriented programming is used when there are many things with few operations.



5. What is the difference between a class and an object?

  Your answer: An object is a unit of data. A class is what kind of data it is.

  Researched answer:

  A class is used to specify the form of an object and it combines data representation and methods for manipulating that data into one neat package. The data and methods within a class are called members of the class.





6. STRETCH: What is Duck Typing?

  Your answer:


  Researched answer: Duck types are public interfaces that are not tied to any specific class.
  "It is a term used in dynamic languages that do not have strong typing.
  The idea is that you don't need a type in order to invoke an existing method on an object - if a method is defined on it, you can invoke it.
  The name comes from the phrase "If it looks like a duck and quacks like a duck, it's a duck"."

  



## Looking Ahead: Terms for Next Week
- PostgreSQL
Postgres (or PostgreSQL) is an open source database. 

- API
An application programming interface (API) is a computing interface that defines interactions between multiple software intermediaries. It

- CRUD
CRUD operations are commonly used in web development and it stands for:
Create
Read
Update
Delete

- Ruby on Rails
or Rails, is a server-side web application framework written in Ruby under the MIT License

- ORM
Object-relational mapping (ORM, O/RM, and O/R mapping) in computer software is a programming technique for converting data between incompatible type systems in object-oriented programming languages. This creates, in effect, a “virtual object database” that can be used from within the programming language. There are both free and commercial packages available that perform object-relational mapping, although some programmers opt to create their own ORM tools.

- Active Record
Rails Active Record is the Object/Relational Mapping (ORM) layer supplied with Rails. It closely follows the standard ORM model, which is as follows −

tables map to classes,
rows map to objects and
columns map to object attributes.