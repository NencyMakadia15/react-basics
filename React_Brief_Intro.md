### **ReactJS :**

JS library to build UI \& Web App

Used for creating fast, interactive, reusable UI components



##### **Key Features :**

Component-Based: Builds applications using small, reusable components.

Virtual DOM: Improves performance by efficiently updating only the parts of the page that change.

Declarative: You describe what the UI should look like, and React handles updating it.

Reusable Code: Components can be reused across different parts of an application.

JSX: Allows developers to write HTML-like syntax directly within JavaScript.

Large Ecosystem: Works well with libraries and tools such as React Router, Redux, and Next.js.



It makes easier to develop dynamic, scalable, and maintainable web application interfaces using reusable components.





### **Component :**

&#x09;A React component is a reusable JavaScript function that returns UI (usually JSX)



###### &#x09;**1. Functional Component:**

&#x09;	JS function that returns JSX



###### &#x09;**2. Class Component:**

&#x09;	JS class that extends React.Component



###### &#x09;  **Functional**		    **Class**

&#x09;JS function			JS class

&#x09;Uses Hooks			Uses lifecycle methods

&#x09;Simpler syntax			More syntax

&#x09;Modern React approach		Mostly used in older React code

&#x09;No 'this' required		Uses 'this'	

&#x09; 

&#x09;Functional = Function + JSX + Hooks

&#x09;Class = Class + render() + this



#### Hooks :

Functions that provide React features to functional components



#### JSX :

HTML-like syntax used inside JavaScript



#### Props :

Data passed from parent → child



#### State :	

Component's own changeable data



#### setState :	

Updates state in class components



#### Fragment :

used to group multiple elements without adding an extra HTML element like <div> to the DOM

syntax => <React.Fragment>...</React.Fragment>  or  <>...</>



#### Pure Component :

it avoids unnecessary re-renders by comparing its props and state with their previous values

OR

A component that re-renders only when its props or state have changed



class components => React.PureComponent

functional components => React.memo()



#### Ref :

is used to access or store a value without causing a re-render.



#### **Context :** 

A way to share data across multiple components without passing props through every intermediate component.









