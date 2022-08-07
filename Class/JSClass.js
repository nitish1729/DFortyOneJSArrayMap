// JavaScript Class Syntax
//Use the keyword class to create a class.
//Always add a method named constructor():
class ClassName {
    constructor(name) {

     }
  }
  class Employee {  // define class
    constructor(Id,Name,Address,Salary){ // constructor
     this.Id = Id;
     this.Name = Name;
     this.Address = Address;
     this.Salary = Salary;
    }
  }
  // creating objects of class
  let Emp = new Employee(9,"Nithish","Btm Layout 1st stage",22000);
  let Emp1 = new Employee(18,"Awasthi Mehta","Bangalore",22500);
  console.log(Emp);
  console.log(Emp1);

  //The Constructor Method
  //The constructor method is a special method:

  class Student 
  {
    constructor(RollNo, name,standard,Year)
    {
      this.RollNo = RollNo;
      this.name = name;
      this.standard = standard;
      this.Year = Year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.Year;
    }
  }
  let stu = new Student(171,"Satish Mehta",12);
  console.log( stu);
  //console.log( stu.age);
  // Class Inheritance