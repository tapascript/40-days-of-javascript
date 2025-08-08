# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

## 1. Export Expenses

Export the user and expense details in a JSON file when clicking on the export button.

The example JSON:

```json
{
  "users": [
    {
      "id": "user_1754145833768_qjcqq6bin",
      "name": "Tapas"
    },
    {
      "id": "user_1754145843849_zjp5a6w0w",
      "name": "Bikas"
    }
  ],
  "expenses": [
    {
      "id": "expense_1754145839607_t30k1nauj",
      "paidBy": "Tapas",
      "amount": 32,
      "description": "3232",
      "timestamp": "2025-08-02T14:43:59.607Z"
    },
    {
      "id": "expense_1754145848181_culgo7f1q",
      "paidBy": "Bikas",
      "amount": 434,
      "description": "3434",
      "timestamp": "2025-08-02T14:44:08.181Z"
    }
  ],
  "exportDate": "2025-08-02T14:44:14.380Z"
}
```

## 2. Import Expenses

The Same JSON file should be imported by clicking the import button and populate the expense list, user list select box. Following it, when the split button is clicked, the settlements should take place.

## 3. Enhance the UI

I have added a bunch of styling enhancements to the app. Please check the source code. Learn about thos styling:

- Animation
- Focus
- Button styling
- ... more

## 4. Deploy

Deploy the improved app on Netlify, Vercel, Render, or any other free services and share the URL on the social media by tagging @tapasadhikary and @tapascript. Cheers!

Here is the deployed version of the enhanced app we built together in the session:
