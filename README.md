```markdown
# HelloWorldCounterApp

This is a simple Angular application that serves as an introduction to Angular's fundamental concepts. It includes a "Hello, World!" greeting and a counter feature.

## Objective

The objective of this project is to provide a hands-on learning experience for Angular beginners. You will learn the following key concepts:

1. Setting up an Angular project using the Angular CLI.
2. Creating Angular components to structure your application.
3. Using data binding to display dynamic content.
4. Implementing basic event handling.
5. Understanding the Angular development workflow.

## Requirements

Follow the steps below to complete the counter-app:

### Step 1: Setup

1. Use the Angular CLI to create a new Angular project called "HelloWorldCounterApp."
2. Navigate to the project directory and open it in your code editor.

### Step 2: Create Components

1. Create a new component called "hello-world" using the Angular CLI:
   
   ```bash
   ng generate component hello-world
   
2. Create another component called "counter" using the Angular CLI:
   
   ```bash
   ng generate component counter

### Step 3: Hello World Component

1. In the "hello-world" component, modify the HTML template to display "Hello, World!" as a heading.
2. Import and use the "hello-world" component in the "app.component.html" file to display the greeting.

### Step 4: Counter Component

1. In the "counter" component, create a button that displays the current count, initially set to 0.
2. Implement event handling to increase the count when the button is clicked.
3. Implement a decrement button to decrease the count when clicked.
4. Implement a reset button to reset the count to zero.
5. Display the updated count value on the page.
6. Implement a decrement button in the counter component to decrease the count when clicked.
7. Add a reset button to reset the counter to zero.
8. Write unit tests for the additional functionality.

### Step 5: Styling

Add CSS styles to improve the visual appearance of application.

### Step 6: Testing

Write unit tests for the components and the counter functionality.

 ```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed:

- Node.js and npm: [Download here](https://nodejs.org/)
- Angular CLI: Install globally using npm:
  
  ```bash
  npm install -g @angular/cli
  ```

### Installing

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/abhimistry-07/angular-counter_app
   ```

2. Navigate to the project directory:

   ```bash
   cd HelloWorldCounterApp
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the Application

Run the development server:

```bash
ng serve
```

Open your web browser and visit [http://localhost:4200/](http://localhost:4200/) to see the application in action.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

```bash
ng test
```

## Author

- Abhishek Mistry

