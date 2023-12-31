import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UserForm from './UserForm'

test('it shows two inputs and a button', () => {
  render(<UserForm />)

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd with the input values when the button is clicked', async () => {
  const onUserAdd = jest.fn();
  render(<UserForm onUserAdd={onUserAdd} />)

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const button = screen.getByRole('button');

  await userEvent.click(nameInput);
  await userEvent.keyboard('John Doe');
  await userEvent.click(emailInput);
  await userEvent.keyboard('John Doe');
  await userEvent.click(button);

  expect(onUserAdd).toHaveBeenCalledWith({ name: 'John Doe', email: 'John Doe' });
});


test('empties the two inputs when form is submitted', async () => {
  const onUserAdd = jest.fn();
  render(<UserForm onUserAdd={onUserAdd} />)

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const button = screen.getByRole('button');

  await userEvent.click(nameInput);
  await userEvent.keyboard('John Doe');
  await userEvent.click(emailInput);
  await userEvent.keyboard('John Doe');
  await userEvent.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
