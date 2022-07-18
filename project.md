# Invoice App

## Table of contents

- [Overview](#overview)
  - [Expected Behaviour](#Expected-Behaviour)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Expected Behaviour

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode

- Creating an invoice

  - When creating a new invoice, an ID needs to be created. Each ID should be 2 random uppercased letters followed by 4 random numbers.
  - Invoices can be created either as drafts or as pending. Clicking "Save as Draft" should allow the user to leave any form field blank, but should create an ID if one doesn't exist and set the status to "draft". Clicking "Save & Send" should require all forms fields to be filled in, and should set the status to "pending".
  - Changing the Payments Terms field should set the `paymentDue` property based on the `createdAt` date plus the numbers of days set for the payment terms.
  - The `total` should be the sum of all items on the invoice.

- Editing an invoice

  - When saving changes to an invoice, all fields are required when the "Save Changes" button is clicked. If the user clicks "Cancel", any unsaved changes should be reset.
  - If the invoice being edited is a "draft", the status needs to be updated to "pending" when the "Save Changes" button is clicked. All fields are required at this stage.

- Users should be able to mark invoices as paid by clicking the "Mark as Paid" button. This should change the invoice's status to "paid".
- Users should receive a confirmation modal when trying to delete invoices.
- Feel free not to add custom styling for the date and dropdown form fields. The designs for those fields are optional extras and are mostly for illustration purposes.

### Screenshot

![Design preview](./preview.jpg)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Express](https://expressjs.com/) - web framework for Node.js
- [PostgreSQL](https://www.postgresql.org/) - Database

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/docs) - This helped me speed up the styling process. I really liked this pattern and will use it going forward.

- [Node-postrgres](https://node-postgres.com/) - Super cool library for interfacing with your PostgreSQL database.

## Author

- Website - [Hermann kan](https://www.hkdev.me)

- Twitter - [@HermannKan1](https://www.twitter.com/hermannkan)
