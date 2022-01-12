# Instructions
Create a form with the following fields: first name, last name, email address and phone number.
The fields should be uncontrolled.
Add a submit button and alert the form values when submit is clicked.

Look at the [final result](https://k51kx02y2v.codesandbox.io/) for visual requirements.

## Requirements

The form should:
- look like the final result
- leave all fields uncontrolled
- on submit alert the field values as a string of key: value pairs

## Approach

- use refs to make each input selectable when submitting
- Intercept the form submit behavior to alert the field values
- On submit pull all the field values from refs
- Use a template literal to alert the values as a string

### FYI
You will need to prevent the default action of the form to log out the field values.
If you don't, the page will refresh itself when you click submit.
This is handled the same as in normal DOM listeners: `event.preventDefault()`