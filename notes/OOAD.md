
# Object-Oriented Analysis and Design

## Phases of Object-Oriented Software Development, OOSD

- analysis
- design
  - system design
  - object design
- implementation and testing

## Object-Oriented Principles

**major elements**:  abstraction, encapsulation, modularity, hierarchy<br>
**minor elements**:  typing, concurrency, persistence


- **abstraction**:  focus on essential features of an element/object in OOP, ignoring extraneous/accidental properties
- **encapsulation**:  process of binding both attributes and methods together within a class; internal details within a class; class has methods that provide UIs by which the class-provided services may be used
- **modularity**:  process of decomposing a problem into a set of modules so as to reduce overall problem complexity; intrinsically linked with encapsulation; visualized as a way of mapping encapsulated abstractions into real physical modules having high cohesion within modules and their inter-module interaction or coupling is low
- **hierarchy**:  ranking or ordering of abstraction; system can be made up of interrelated subsystems; uses divide-and-conquer principle; allows code reusability
  - two OOA hierarchies
    - "is-a", a rose is a flower
    - "part-of", a petal is part of a flower
- **type**:  characterization of a set of elements; in OOP, class visualized as a type having properties distinct from any other types
- **typing**:  enforcement of notion that an object is instance of single class or type; enforces that objects of different types may not be interchanged generally, only in restrictive/ed manner
  - two types of typing:
    - **strong**:  operation on object checked at compile time
    - **weak**:  messages may be sent to any class; operation checked only at execution time
- **concurrency**:  allows performing multiple tasks or processes simultaneously; single process exists in system = single thread of control; most systems have multiple threads; multiple CPU systems inherently permit concurrent threads of control; systems running on single CPU use algorithms to give equitable CPU time to threads to enable concurrency
- **active object**:  independent threads of control executing concurrently with threads of other objects; sync with one another as well as purely sequential objects
- **persistence**:  property by which object continues to exist even after its creator ceases to exist (files, databases)

## object-oriented analysis, OOA

procedure of identifying software engineering requirements & developing software specs in terms of a software system's object model, comprised of interacting objects

difference between OOA and other analysis forms is OOA is centered, organized around objects; modeled after real-world objects the system interacts with

in traditional analysis methodologies, functions & data are considered separately

### primary tasks in OOA

- identifying objects
- organizing objects by creating an object model diagram
- defining object internals or object attributes
- defining object behaviors or object actions
- describing how objects interact

**common models**:  use cases & object models

### techniques for OOA

- **object modeling**:  developes static structure of software system in terms of objects; IDs objects, classes into which objects can be grouped, relationships between objects

  - Process:
    - ID objects & group into classes
    - ID relationships among classes
    - create user object model diagram
    - define user object attributes
    - define operations that should be performed on classes
    - review glossary

- **dynamic modeling**:  way of describing how an individual object responds to events, either internal or external events

  - Process:
    - ID states of each object
    - ID events and analyze applicability of actions
    - construct dynamic model diagram, comprising of state transition diagrams
    - express each state in terms of object attributes
    - validate the state-transition diagrams drawn

- **functional modeling**:  shows processes performed within an object and how data changes as it moves between methods; specifies meaning of operations of object modeling and actions of dynamic modeling; corresponds to data flow diagram of traditional structured analysis

  - Process:
    - ID all inputs and outputs
    - construct data flow diagrams showing functional dependencies
    - state purpose of each function
    - ID constraints
    - specify optimization criteria

### structured analysis/structured design (SASD)

traditional approach of software development based upon waterfall model

- Phases:
  - feasibility study
  - requirement analysis and specification
  - system design
  - implementation
  - post-implementation review

### OOA v. SASD Advantages & Disadvantages

| Type | Advantages | Disadvantages |
|:----:|:----------:|:-------------:|
|  OOD | focuses on data, not procedures | functionality restricted within objects |
| | encapsulation & data hiding help develop systems that can't be tampered with | can't ID which objects would generate optimal system design |
| | allows effective management of software complexity by virtue of modularity | OOMs don't easily show comms between objects in system |
| | can be upgraded from small to large easier than SASD | |
| SASD | top-down approach easier to comprehend than OOA | one phase completed before next phase |
| | based upon functionality; gives better understanding of system and generates more complete systems | high initial cost |
| | specs written in simple English; can be more easily analyzed by non-techies | doesn't support code reusability | 

## object-oriented design, OOD

involves implementation of the conceptual model produced during OOA

- concepts mapped onto implementing classes
- constraints identified
- interfaces designed
- results in model for solution domain

### implementation details include

- restructuring class data
- implementation of methods, internal data structures, and algorithms
- implementation of control
- implementation of associations

## object-oriented programming, OOP

programming paradigm based upon objects aiming to incorporate modularity and reusability advantages

**objects**:  instances of classes; used to interact with one another to design apps

### important features of OOP

- bottom-up approach in program design
- programs organized around objects; grouped in classes
- focus on data with methods to operate upon object's data
- interaction between objects through functions
- reusability of design through new class creation by adding features to existing classes

## objects

**object model**:  visualizes elements in app in terms of objects
**object**:  real-world element in object-oriented environment that may have a physical or conceptual existence

- has ID that distinguishes it from other objects
- has state that determines characteristics & values
- behavior that represents externally visible activities performed by an object in terms of changes in state
- can be modeled according to app needs

## classes

**class**:  collection of objects having same characteristic properties that exhibit common behavior; gives blueprint or description of objects created from it

**instantiation**:  object creation as member of a class

**class constituents**:  set of object attributes instantiated from class (class data); set of operations portraying behavior of class objects (functions/methods)

## encapsulation

**encapsulation**:  process of binding both attributes and methods together within class; internal class details can be hidden from outside; permits class elements to be accessed from outside only through class interface

**data hiding**:  process of insulting an object's data

**message passing**:  how objects in a system communicate with each other

features of message passing:

- between two objects = unidirectional
- enables all interactions between objects
- involves invoking class methods
- objects in different processes can be involved

## inheritance

**inheritance**:  mechanism permitting new classes to be created out off existing classes by extending and refining capabilities

- existing classes = base/parent/super
- new classes = derived/child/sub
  - can inherit attributes and methods off parent(s) provided parent allows it
  - may add its own attributes and methods
  - may modify parent's methods
  - defines an "is-a" relationship

### types

- **single**:  sub derives from single parent
- **multiple**:  sub derives from 2+ parents
- **multi-level**:  sub derives from parent which has parent, etc.
- **hierarchical**:  class has number of subclasses, each of which may have subsequence subclasses, for a number of levels to form a tree structure
- **hybrid**:  combo of multiple and multilevel to form a lattice

## polymorphism

- ability to take multiple forms
- using operations in different ways
- allows objects with different internal structures to have a common external interface
- particularly effective while implementing interface

## generalization & specialization

generalization and specialization represent hierarchy of relationships between classes where subclasses inherit from parents

**generalization**:  common characteristics of classes combined to form a class in a higher level of hierarchy; example subclasses combined to form a generalized parent; represents an "is-a-kind-of" relationship

**specialization**:  reverse of generalization; distinguishing features of groups of objects are used to form specialized classes from existing classes; subclasses are specialized versions of parent

## association

**link**:  connection through which object collaborates with other objects; one object may invoke methods or navigate through another object; depicts relationship between two objects; instance of association

**association**:  group of links having common structure and behavior; depicts relationship between objects of 1+ classes

### degree of an association

- denotes number of classes involved in connection
- **unary**:  connects objects of same class
- **binary**:  connects objects of 2 classes
- **ternary**:  connects objects of 3+ classes

### cardinality ratios of associations

number of instances participating in association

- one to one
- one to many
- many to many

## aggregation

- composition
- relationship among classes by which a class can be made up of any combo of objects of other classes
- allows objects to be placed directly within body of other classes
- "part-of" or "has-a" relationship with ability to navigate from whole to parts
- object composed of 1+ other objects
- may denote physical or conceptual containment

## object-oriented modeling, OOM

visualizes things in an app by using models organized around objects

### benefits of object model

- helps in faster software development
- easy to maintain
- supports relatively hassle-free upgrades
- enables reuse of objects, designs, and functions
- reduces development risks, particularly in integration of complex systems

## dynamic modeling

represents time-dependent aspects of system; concerned with temporal changes in states of objects in a system

- Main Concepts:
  - state (situation @ particular condition during object lifetime)
  - transition (change in state)
  - event (occurrence triggering transitions)
  - action (computation occurring due to some event)
  - concurrency of transitions

**state machine**:  models object behavior as it passes through number of states in its lifetime and actions due to events; graphically represented through state transition diagram

**state**:  abstraction given by values of attributes that object has at a particular time period; situation occurring for finite period off time in lifetime of an object in which it fulfills certain conditions, performs certain activities, or waits for certain events to occur; represented by rounded rectangles in state transition diagrams

- Parts:
  - name (optional)
  - entry/exit actions
  - internal transitions (changes within state that don't cause state change)
  - substates

**initial state**:  default starting state of object, filled black circle

**final state**:  indicates completion of execution of state machine, outlined filled black circle

Both initial and final states are pseudo states and may not have the parts of regular state except name.

**transition**:  denotes a change in object state; gives relationship between first & new state; graphically represented by solid directed arc from source state to destination state

- 5 Parts:
  - source state (state affected by transition)
  - event trigger (occurrence due to which an object in source state undergoes transition if guard condition is satisfied)
  - guard condition (if true causes transition on receiving event ttrigger)
  - action (uninterruptable and atomic computation ocurring on source object due to some event)
  - target state (destination state after transition completion)

**events**:  some occurrences that can trigger state transition of an object or group of objects; have a location in time and space, but do not have time period associated with it; generally associated with some actions; ones that trigger transitions are written alongside arc of transition in state diagrams

****:  
****:  
****:  
****:  
****:  
****:  
****:  
****:  
