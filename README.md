# Dynamic Form with Next.js, TypeScript, React Hook Form, and Material UI

This project demonstrates how to create a dynamic form in a Next.js application using TypeScript. The form fields are rendered dynamically based on JSON data, and the form provides validation, responsiveness, and various field types (e.g., TEXT, LIST, RADIO).

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Customization](#customization)
* [Running the Application](#running-the-application)
* [Technologies Used](#technologies-used)

## Installation

### 1\. Clone the Repository

Clone the project to your local machine using the following command:

```bash
git clone <repository_url>
cd dynamic-form
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Required Dependencies

* react-hook-form: To manage form validation and submission.

* @mui/material: For Material UI components such as TextField, RadioGroup, etc.

## Usage

-----

### 1\. Create or Modify formData.json

The form fields are rendered based on the content of the formData.json file located in the /public directory. Below is an example of the JSON structure:

```{
  "data": [
    {
      "id": 1,
      "name": "Full Name",
      "fieldType": "TEXT",
      "minLength": 1,
      "maxLength": 100,
      "defaultValue": "John Doe",
      "required": true
    },
    {
      "id": 2,
      "name": "Email",
      "fieldType": "TEXT",
      "minLength": 1,
      "maxLength": 50,
      "defaultValue": "hello@mail.com",
      "required": true
    },
    {
      "id": 6,
      "name": "Gender",
      "fieldType": "LIST",
      "defaultValue": "1",
      "required": true,
      "listOfValues": ["Male", "Female", "Others"]
    },
    {
      "id": 7,
      "name": "Love React?",
      "fieldType": "RADIO",
      "defaultValue": "1",
      "required": true,
      "listOfValues": ["Yes", "No"]
    }
  ]
}

```

## Customization

-------------

### 1\. Change Field Labels

To change the label of any field, simply modify the name attribute in formData.json. For example, change "Full Name" to "Name".

### 2\. Modify Field Types

To switch from a dropdown to a radio button (or vice versa), modify the fieldType in the JSON file:

* "fieldType": "RADIO" for radio buttons.

* "fieldType": "LIST" for dropdown lists.

### 3\. Add More Fields

Add new fields by expanding the data array in formData.json.

### 4\. Change Validation

Modify the minLength, maxLength, and required attributes in the JSON file to customize form field validation.

## Running the Application

-----------------------

1. ```npm run dev```

2. Open your browser and go to <http://localhost:3000> to see the dynamic form in action.

## Technologies Used

-----------------

* **Next.js**: A React framework for building static and server-rendered applications.

* **TypeScript**: For static type checking.

* **Material UI**: For UI components like TextField, RadioGroup, MenuItem, etc.

* **React Hook Form**: To manage form validation and submission.
